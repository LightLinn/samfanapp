import api from './api';

export const getProducts = async () => {
    try {
      const response = await api.get('/products/');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };

// 獲取單個商品
export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

// 新增商品
export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products/', productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// 更新商品
export const updateProduct = async (productId, productData) => {
  try {
    const response = await api.patch(`/products/${productId}/`, productData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// 刪除商品
export const deleteProduct = async (productId) => {
  try {
    await api.delete(`/products/${productId}/`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
  