import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { COLORS, SIZES } from '../../../styles/theme';
import { getProducts, deleteProduct } from '../../../api/productApi';
import ProductListItem from '../../components/ProductListItem';

const ProductListScreen = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError('無法載入商品，請稍後再試。');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  const handleEdit = (product) => {
    router.push(`/screens/settings/ProductEditScreen?id=${product.id}`);
  };

  const handleDelete = (productId) => {
    Alert.alert(
      '確認刪除',
      '您確定要刪除這個商品嗎？此操作無法撤銷。',
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
              await deleteProduct(productId);
              setProducts(products.filter(product => product.id !== productId));
            } catch (error) {
              console.error('刪除商品時出錯:', error);
              Alert.alert('錯誤', '刪除商品失敗，請稍後再試。');
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  const handleAddProduct = () => {
    router.push('/screens/settings/ProductAddScreen');
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={SIZES.large} color={COLORS.gray} />
          <Text style={styles.loadingText}>載入商品中...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchProducts}>
            <Text style={styles.retryButtonText}>重試</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductListItem
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAddProduct} style={styles.addButton}>
          <Text style={styles.addButtonText}>新增商品</Text>
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
  listContent: {
    padding: SIZES.medium,
    paddingBottom: 100,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 30,
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

export default ProductListScreen;