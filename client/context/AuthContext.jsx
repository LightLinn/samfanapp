import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../api/authApi';
import api from '../api/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    loadStoredToken();
  }, []);

  const loadStoredToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      const storedRefreshToken = await AsyncStorage.getItem('refresh_token');

      setUserToken(storedToken);
      setRefreshToken(storedRefreshToken);

      if (storedToken && storedRefreshToken) {
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
    } catch (error) {
      console.error('Error loading stored token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (username, password) => {
    try {
      const response = await login(username, password);
      await AsyncStorage.setItem('token', response.access);
      await AsyncStorage.setItem('refresh_token', response.refresh);
      setUserToken(response.access);
      setRefreshToken(response.refresh);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.access}`;
    } catch (error) {
      throw error;
    }
  };

  const logoutUser = async () => {
    setUserToken(null);
    setRefreshToken(null);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refresh_token');
    delete api.defaults.headers.common['Authorization'];
  };

  const refreshAccessToken = async () => {
    try {
      const response = await api.post('/token/refresh/', { refresh: refreshToken });
      setUserToken(response.access);
      setRefreshToken(response.refresh);
      await AsyncStorage.setItem('token', response.access);
      await AsyncStorage.setItem('refresh_token', response.refresh);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      isLoading,
      userToken,
      refreshToken,
      login: loginUser,
      logout: logoutUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};