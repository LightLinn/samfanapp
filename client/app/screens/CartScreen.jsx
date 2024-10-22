import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ActivityIndicator } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import CartItem from '../components/CartItem';
import { getOrCreateCart } from '../../api/cartApi';
import { getCurrentSalesPeriod } from '../../api/salesperiodApi';
import { useCart } from '../../context/CartContext';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPeriod, setCurrentPeriod] = useState(null);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { updateItemInCart, removeItemFromCart } = useCart();

  const checkCurrentPeriod = useCallback(async () => {
    try {
      const response = await getCurrentSalesPeriod();
      setMessage(response.message);
      if (response.data) {
        setCurrentPeriod(response.data);
        setIsLoading(false);
      } else {
        setCurrentPeriod(null);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Error checking current sales period:', err);
      setMessage('無法檢查當前銷售檔期,請稍後再試。');
      setCurrentPeriod(null);
    }
  }, []);

  const fetchCartItems = useCallback(async () => {
    if (!currentPeriod) return;
    try {
      const cart = await getOrCreateCart();
      setCartItems(cart.items);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      Alert.alert('錯誤', '無法獲取購物車內容,請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  }, [currentPeriod]);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      checkCurrentPeriod();
    }, [checkCurrentPeriod])
  );

  useEffect(() => {
    if (currentPeriod) {
      fetchCartItems();
    } else {
      setIsLoading(false);
    }
  }, [currentPeriod, fetchCartItems]);

  const handleUpdateItem = async (id, quantity, note) => {
    try {
      await updateItemInCart(id, quantity, note);
      await fetchCartItems();
    } catch (error) {
      console.error('Error updating cart item:', error);
      Alert.alert('錯誤', '無法更新購物車項目');
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await removeItemFromCart(id);
      await fetchCartItems();
    } catch (error) {
      console.error('Error removing item:', error);
      Alert.alert('錯誤', '無法移除商品');
    }
  };

  const handleNextStep = () => {
    if (cartItems.length === 0) {
      Alert.alert("錯誤", "購物車是空的，請添加商品");
      return;
    }
    router.push(`/screens/CartInfoScreen/`);
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (!currentPeriod) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CartItem 
                item={item} 
                onUpdateItem={handleUpdateItem}
                onRemoveItem={handleRemoveItem}
              />
            )}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
              <Text style={styles.nextButtonText}>下一步</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>購物車是空的</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.medium,
  },
  messageText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray2,
    textAlign: 'center',
  },
  listContent: {
    padding: SIZES.medium,
    flexGrow: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
  bottomContainer: {
    padding: SIZES.medium,
    ...SHADOWS.medium,
  },
  nextButton: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    alignItems: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
});

export default CartScreen;
