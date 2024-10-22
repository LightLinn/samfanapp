import api from './api';
  
// 獲取訂單列表
export const getOrders = async () => {
  try {
    const response = await api.get('/orders/');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// 獲取單個訂單
export const getOrder = async (orderId) => {
  try {
    const response = await api.get(`/orders/${orderId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

// 取消訂單
export const cancelOrder = async (orderId) => {
  try {
    const response = await api.patch(`/orders/${orderId}/cancel/`);
    return response.data;
  } catch (error) {
    console.error('Error canceling order:', error);
    throw error;
  }
};

// 準備出貨
export const prepareOrder = async (orderId) => {
  try {
    const response = await api.patch(`/orders/${orderId}/prepare/`);
    return response.data;
  } catch (error) {
    console.error('Error preparing order:', error);
    throw error;
  }
};

// 訂單出貨
export const shipOrder = async (orderId, data) => {
  try {
    const response = await api.patch(`/orders/${orderId}/ship/`, data);
    return response.data;
  } catch (error) {
    console.error('Error shipping order:', error);
    throw error;
  }
};

// 更新訂單
export const updateOrder = async (orderId, orderData) => {
  try {
    const response = await api.patch(`/orders/${orderId}/`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// 刪除訂單中商品 
export const deleteOrderItem = async (orderId, itemId) => {
  try {
    const response = await api.post(`/orders/${orderId}/remove_item/`, { item_id: itemId });
    return response.data;
  } catch (error) {
    console.error('Error deleting order item:', error);
    throw error;
  }
};

// 編輯訂單中商品
export const editOrderItem = async (orderId, itemId, itemData) => {
  try {
    const response = await api.patch(`/orders/${orderId}/edit_item/`, {
      item_id: itemId,
      item_data: itemData
    });
    return response.data;
  } catch (error) {
    console.error('Error editing order item:', error);
    throw error;
  }
};


// 訂單追加商品
// 再訂一次


