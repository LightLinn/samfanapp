import React, { useState, useCallback, useEffect } from 'react';
import { View, FlatList, StyleSheet, TextInput, SafeAreaView, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';
import ProductItem from '../components/ProductItem';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import { getProducts } from '../../api/productApi';
import { getCurrentSalesPeriod } from '../../api/salesperiodApi';
import { useCart } from '../../context/CartContext';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPeriod, setCurrentPeriod] = useState(null);
  const [message, setMessage] = useState('');
  const { addItemToCart } = useCart();

  const checkCurrentPeriod = useCallback(async () => {
    try {
      const response = await getCurrentSalesPeriod();
      setMessage(response.message);
      if (response.data) {
        setCurrentPeriod(response.data);
      } else {
        setCurrentPeriod(null);
      }
    } catch (err) {
      console.error('Error checking current sales period:', err);
      setMessage('無法檢查當前銷售檔期,請稍後再試。');
      setCurrentPeriod(null);
    }
  }, []);

  const fetchProducts = useCallback(async () => {
    if (!currentPeriod) return;
    setIsLoading(true);
    setError(null);
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    } catch (err) {
      setError('無法載入商品,請稍後再試。');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPeriod]);

  useFocusEffect(
    useCallback(() => {
      checkCurrentPeriod();
    }, [checkCurrentPeriod])
  );

  useEffect(() => {
    if (currentPeriod) {
      fetchProducts();
    } else {
      setIsLoading(false);
    }
  }, [currentPeriod, fetchProducts]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(text.toLowerCase()) ||
      product.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = async (product, quantity, note) => {
    try {
      await addItemToCart(product.id, quantity, note);
      // Alert.alert('成功', '已將商品加入購物車');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      Alert.alert('錯誤', '無法添加商品到購物車，請稍後再試');
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={SIZES.large} color={COLORS.gray} />
          <Text style={styles.loadingText}>載入中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!currentPeriod) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
          <View style={styles.periodInfoContainer}>
            <Text style={styles.periodTitle}>
              {currentPeriod.name}
            </Text>
            <Text style={styles.periodInfo}>
              {formatDate(currentPeriod.start_date)} 至 {formatDate(currentPeriod.end_date)}
            </Text>
          </View>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={SIZES.large} color={COLORS.gray2} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="搜尋..."
            placeholderTextColor={COLORS.gray2}
            value={searchQuery}
            onChangeText={handleSearch}
          />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Ionicons name="close-circle" size={SIZES.medium} color={COLORS.gray2} style={styles.clearIcon} />
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem product={item} onAddToCart={handleAddToCart} />
          )}
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.small,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingHorizontal: SIZES.small,
    ...SHADOWS.small,
  },
  searchIcon: {
    marginRight: SIZES.small,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  clearIcon: {
    marginLeft: SIZES.small,
  },
  productList: {
    paddingBottom: SIZES.medium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
  },
  errorText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: SIZES.medium,
  },
  retryButton: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.small,
  },
  retryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
  periodInfoContainer: {
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    marginBottom: SIZES.small,
    ...SHADOWS.small,
  },
  periodTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SIZES.small,
  },
  periodInfo: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default ProductsScreen;