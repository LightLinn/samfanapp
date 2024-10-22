import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 使用 __DEV__ 全局变量来设定 API_BASE_URL
const API_BASE_URL = __DEV__ 
  ? 'http://localhost:8000/api'
  : 'https://api.yourproductionurl.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 使用拦截器添加认证令牌
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;



