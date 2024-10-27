import api from './api';

// 獲取銷售檔期列表
export const getSalesPeriods = async () => {
    try {
      const response = await api.get('/sales-periods/');
      return response.data;
    } catch (error) {
      console.error('Error fetching sales periods:', error);
      throw error;
    }
  };

// 獲取單個銷售檔期
export const getSalesPeriodById = async (salesPeriodId) => {
  try {
    const response = await api.get(`/sales-periods/${salesPeriodId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sales period by ID:', error);
    throw error;
  }
};
  
// 新增銷售檔期
export const createSalesPeriod = async (salesPeriodData) => {
  try {
    const response = await api.post('/sales-periods/', salesPeriodData);
    return response.data;
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error(error.response.data.error);
  }
};

// 更新銷售檔期
export const updateSalesPeriod = async (salesPeriodId, salesPeriodData) => {
  try {
    const response = await api.patch(`/sales-periods/${salesPeriodId}/`, salesPeriodData);
    return response.data;
  } catch (error) {
    console.error('Error updating sales period:', error);
    throw error;
  }
};

// 刪除銷售檔期
export const deleteSalesPeriod = async (salesPeriodId) => {
  try {
    await api.delete(`/sales-periods/${salesPeriodId}/`);
  } catch (error) {
    console.error('Error deleting sales period:', error);
    throw error;
  }
};

// 取得當前檔期
export const getCurrentSalesPeriod = async () => {
  try {
    const response = await api.get('/sales-periods/current/');
    return response.data;
  } catch (error) {
    console.error('Error fetching current sales period:', error);
    throw error;
  }
};


  
