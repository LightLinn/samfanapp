import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert, ImageBackground, ActivityIndicator, Modal, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter, useFocusEffect } from 'expo-router';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import OrderDetailItem from '../components/OrderDetailItem';
import { Ionicons } from '@expo/vector-icons';
import { getOrder, cancelOrder, updateOrder, prepareOrder, shipOrder, deleteOrderItem, editOrderItem } from '../../api/orderApi';
import EditOrderModal from '../components/EditOrderModal';
import PrepareItemModal from '../components/PrepareItemModal';

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedOrder, setEditedOrder] = useState({
    customer_name: '',
    customer_mobile: '',
    pickup_date: '',
  });
  const [isPrepareModalVisible, setIsPrepareModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchOrder = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedOrder = await getOrder(id);
      setOrder(fetchedOrder);
      setEditedOrder({
        customer_name: fetchedOrder.customer_name,
        customer_mobile: fetchedOrder.customer_mobile,
        pickup_date: fetchedOrder.pickup_date,
      });
    } catch (err) {
      setError('無法載入訂單詳情，請稍後再試。');
      console.error('Error fetching order:', err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      fetchOrder();
    }, [fetchOrder])
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleEditOrder = () => {
    setIsEditing(true);
  };

  const handleSaveOrder = async (updatedOrder) => {
    try {
      setIsLoading(true);
      await updateOrder(id, updatedOrder);
      setIsEditing(false);
      fetchOrder(); 
      Alert.alert("成功", "訂單已成功更新");
    } catch (error) {
      Alert.alert("錯誤", "更新訂單失敗，請稍後再試");
      console.error('Error updating order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelOrder = () => {
    Alert.alert(
      "取消訂單",
      "您確定要取消這個訂單嗎？",
      [
        { text: "否", style: "cancel" },
        { 
          text: "是", 
          onPress: async () => {
            try {
              setIsLoading(true);
              await cancelOrder(id);
              Alert.alert("成功", "訂單已成功取消");
              fetchOrder(); // 重新獲取訂單信息以更新狀態
            } catch (error) {
              Alert.alert("錯誤", "取消訂單失敗，請稍後再試");
              console.error('Error canceling order:', error);
            } finally {
              setIsLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleShipOrder = () => {
    Alert.alert(
      "訂單出貨",
      "確認將此訂單標記為已出貨？",
      [
        { text: "否", style: "cancel" },
        { 
          text: "是", 
          onPress: async () => {
            try {
              setIsLoading(true);
              await shipOrder(id);
              Alert.alert("成功", "訂單已成功標記為已出貨");
              fetchOrder(); // 重新獲取訂單信息以更新狀態
            } catch (error) {
              Alert.alert("錯誤", "訂單出貨失敗，請稍後再試");
              console.error('Error shipping order:', error);
            } finally {
              setIsLoading(false);
            }
          }
        }
      ]
    );
  };

  const handlePrepareOrder = () => {
    if (order.box_number === '' || order.box_number === null) {
      Alert.alert("錯誤", "請先填寫箱號");
      return;
    }

    const allItemsPrepared = order.items.every(item => item.is_prepared);
    if (!allItemsPrepared) {
      Alert.alert("錯誤", "還有未標價的商品");
      return;
    }

    Alert.alert(
      "準備出貨",
      "確認將此訂單標記為待出貨？",
      [
        { text: "否", style: "cancel" },
        { 
          text: "是", 
          onPress: async () => {
            try {
              setIsLoading(true);
              await prepareOrder(id);
              Alert.alert("成功", "訂單已成功標記為待出貨");
              fetchOrder(); // 重新獲取訂單信息以更新狀態
            } catch (error) {
              Alert.alert("錯誤", "準備出貨失敗，請稍後再試");
              console.error('Error preparing order:', error);
            } finally {
              setIsLoading(false);
            }
          }
        }
      ]
    );
  };

  const handleUpdateItem = (itemId, isPrepared) => {
    const item = order.items.find(item => item.id === itemId);
    if (item) {
      if (isPrepared) {
        setSelectedItem(item);
        setIsPrepareModalVisible(true);
      } else {
        handleSavePreparedItem({ ...item, is_prepared: false });
      }
    }
  };

  const handleSavePreparedItem = async (updatedItem) => {
    try {
      setIsLoading(true);
      await editOrderItem(id, updatedItem.id, updatedItem);
      fetchOrder();
      // Alert.alert("成功", "商品已成功更新");
    } catch (error) {
      Alert.alert("錯誤", "更新商品失敗，請稍後再試");
      console.error('Error updating item:', error);
    } finally {
      setIsLoading(false);
      setIsPrepareModalVisible(false);
    }
  };

  const handleDeleteItem = (itemId) => {
    Alert.alert(
      "刪除商品",
      "您確定要從訂單中刪除這個商品嗎？",
      [
        { text: "取消", style: "cancel" },
        { 
          text: "確定", 
          onPress: async () => {
            try {
              setIsLoading(true);
              await deleteOrderItem(id, itemId);
              Alert.alert("成功", "商品已成功從訂單中刪除");
              fetchOrder(); // 重新獲取訂單信息以更新狀態
            } catch (error) {
              Alert.alert("錯誤", "刪除商品失敗，請稍後再試");
              console.error('Error deleting order item:', error);
            } finally {
              setIsLoading(false);
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>載入中...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchOrder}>
            <Text style={styles.retryButtonText}>重試</Text>
          </TouchableOpacity>
        </View>
      ) : order ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>建立日期 {formatDate(order.order_date)}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="information-circle-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>訂單狀態 {order.status}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="person-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>訂購人 {order.customer_name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>手機號碼{order.customer_mobile}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>取貨日期 {formatDate(order.pickup_date)}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="cube-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>箱號 {order.box_number}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="pricetag-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>銷售檔期 {order.sales_period.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="cash-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>總金額 {order.total_amount}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="time-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>出貨日期 {order.shipped_at ? formatDate(order.shipped_at) : ''}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="person-outline" size={SIZES.large} color={COLORS.gray2} />
                <Text style={styles.infoText}>出貨人 {order.shipped_by ? order.shipped_by.username : ''}</Text>
              </View>
            </View>

            {order.status === '備貨中' && (
              <View style={styles.actionContainer}>
                <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={handleCancelOrder}>
                  <Ionicons name="close-circle-outline" size={SIZES.large} color={COLORS.white} />
                  <Text style={styles.actionButtonText}>取消訂單</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={handleEditOrder}>
                  <Ionicons name="create-outline" size={SIZES.large} color={COLORS.white} />
                  <Text style={styles.actionButtonText}>編輯訂單</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.shipButton]} onPress={handlePrepareOrder}>
                  <Ionicons name="paper-plane-outline" size={SIZES.large} color={COLORS.white} />
                  <Text style={styles.actionButtonText}>準備出貨</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {order.status === '待出貨' && (
              <TouchableOpacity style={[styles.actionButton, styles.shipButton]} onPress={handleShipOrder}>
                <Ionicons name="paper-plane-outline" size={SIZES.xLarge} color={COLORS.white} />
                <Text style={styles.actionButtonText}>訂單出貨</Text>
              </TouchableOpacity>
            )}

            <OrderDetailItem 
              items={order.items} 
              orderStatus={order.status} 
              onItemUpdate={handleUpdateItem}
              onItemDelete={handleDeleteItem}
            />
          </ScrollView>
          <EditOrderModal
            isVisible={isEditing}
            onClose={() => setIsEditing(false)}
            onSave={handleSaveOrder}
            initialData={{
              customer_name: order.customer_name,
              customer_mobile: order.customer_mobile,
              pickup_date: order.pickup_date,
              box_number: order.box_number,
            }}
          />
          <PrepareItemModal
            isVisible={isPrepareModalVisible}
            onClose={() => setIsPrepareModalVisible(false)}
            onSave={handleSavePreparedItem}
            item={selectedItem}
          />
        </>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  headerBackground: {
    height: 200,
    justifyContent: 'flex-end',
  },
  headerBackgroundImage: {
    opacity: 0.3,
  },
  headerContent: {
    padding: SIZES.medium,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  orderNumber: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  orderStatus: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
    marginTop: SIZES.xSmall,
  },
  orderAmount: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
    marginTop: SIZES.small,
  },
  infoSection: {
    backgroundColor: COLORS.white,
    margin: SIZES.small,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  infoText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.contrast,
    marginLeft: SIZES.small,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: SIZES.small,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
    marginHorizontal: SIZES.xSmall,
    ...SHADOWS.small,
  },
  cancelButton: {
    backgroundColor: COLORS.warning,
  },
  editButton: {
    backgroundColor: COLORS.gray3,
  },
  shipButton: {
    backgroundColor: COLORS.primary,
  },
  actionButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.contrast,
    marginBottom: SIZES.small,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.contrast,
    marginBottom: SIZES.small,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
  },
  retryButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.medium,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
  },
  datePickerText: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
    marginHorizontal: SIZES.xSmall,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  prepareButton: {
    backgroundColor: COLORS.success,
  },
});

export default OrderDetailScreen;