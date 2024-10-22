import api from "./api";

export const getProductAnalysis = async (timeRange) => {
  const response = await api.get(`/statistics/product?timeRange=${timeRange}`);
  return response.data;
};

export const getRevenueAnalysis = async (timeRange) => {
  const response = await api.get(`/statistics/revenue?timeRange=${timeRange}`);
  return response.data;
};

export const getOrderAnalysis = async (timeRange) => {
  const response = await api.get(`/statistics/order?timeRange=${timeRange}`);
  return response.data;
};