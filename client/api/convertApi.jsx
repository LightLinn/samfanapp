import api from './api';

// 將購物車轉換為訂單 路由: /convert/
// 輸入: customerName, customerMobile, pickupDate

export const convertCartToOrder = async (data) => {
    try {
        const response = await api.post('/convert/', data);
        return response.data;
    } catch (error) {
        console.error('Error converting cart to order:', error);
        throw error;
    }
};

