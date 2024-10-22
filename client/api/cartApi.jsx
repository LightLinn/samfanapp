import api from './api';

// 獲取或創建購物車
export const getOrCreateCart = async () => {
  try {
    const response = await api.get('/cart/');
    return response.data;
  } catch (error) {
    console.error('Error fetching or creating cart:', error);
    throw error;
  }
};

// 添加商品到購物車
export const addToCart = async (productId, quantity, note) => {
  try {
    const response = await api.post('/cart/add_item/', {
      product_id: productId,
      quantity: quantity,
      note: note,
      append: true, // 新增這個參數來表示我們要追加數量和備註
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};

// 更新購物車中的商品數量和備註
export const updateCartItem = async (cartItemId, quantity, note) => {
  try {
    const response = await api.patch('/cart/update_item/', {
      id: cartItemId,
      quantity: quantity,
      note: note,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating cart item:', error);
    throw error;
  }
};

// 刪除購物車中的商品
export const deleteCartItem = async (cartItemId) => {
  try {
    const response = await api.delete('/cart/remove_item/', { data: { id: cartItemId } });
    return response.data;
  } catch (error) {
    console.error('Error deleting cart item:', error);
    throw error;
  }
};

// 獲取購物車中的商品數量
export const getCartItemCount = async () => {
  try {
    const response = await api.get('/cart/get_cart_item_count/');
    return response.data;
  } catch (error) {
    console.error('Error fetching cart item count:', error);
    throw error;
  }
};
