import React, { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../styles/theme';
import { getSalesPeriods, deleteSalesPeriod } from '../../../api/salesperiodApi'; // 新增導入
import SalesPeriodItem from '../../components/SalesPeriodItem'; // 新增導入

const SalesPeriodListScreen = () => {
  const router = useRouter();
  const [salesPeriods, setSalesPeriods] = useState([]); // 初始化為空陣列
  const [isLoading, setIsLoading] = useState(true); // 加載狀態
  const [error, setError] = useState(null);

  const fetchSalesPeriods = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const periods = await getSalesPeriods();
      setSalesPeriods(periods);
    } catch (error) {
      setError('無法載入檔期資料，請稍後再試。');
      console.error('Error fetching sales periods:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (period) => {
    // 使用 expo-router 的方式導航並傳遞參數
    router.push(`/screens/settings/SalesPeriodEditScreen?id=${period.id}`);
  };

  const handleDelete = useCallback((periodId) => {
    Alert.alert(
      '確認刪除',
      '您確定要刪除這個檔期嗎？此操作無法撤銷。',
      [
        {
          text: '取消',
          style: 'cancel'
        },
        {
          text: '刪除',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteSalesPeriod(periodId);
              setSalesPeriods(prevPeriods => prevPeriods.filter(period => period.id !== periodId));
            } catch (error) {
              console.error('刪除檔期時出錯:', error);
              Alert.alert('錯誤', '刪除檔期失敗，請稍後再試。');
            }
          }
        }
      ],
      { cancelable: false }
    );
  }, []);

  const handleAddPeriod = () => {
    router.push('/screens/settings/SalesPeriodAddScreen'); // 導航到新增檔期頁面
  };

  useFocusEffect(
    useCallback(() => {
      fetchSalesPeriods();
    }, [])
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={SIZES.large} color={COLORS.gray} />
          <Text style={styles.loadingText}>載入檔期中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchSalesPeriods}>
            <Text style={styles.retryButtonText}>重試</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={salesPeriods}
        renderItem={({ item }) => (
          <SalesPeriodItem
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAddPeriod} style={styles.addButton}>
          <Text style={styles.addButtonText}>新增檔期</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  listContent: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: SIZES.medium,
    color: COLORS.red,
  },
  retryButton: {
    marginTop: SIZES.small,
    padding: SIZES.small,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
  },
  retryButtonText: {
    color: COLORS.white,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 30,  // 距離底部的距離
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  addButton: {
    width: '90%',
    padding: SIZES.large,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
});

export default SalesPeriodListScreen;