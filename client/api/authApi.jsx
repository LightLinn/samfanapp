import api from './api';

// 登入
export const login = async (username, password) => {
  try {
    const response = await api.post('/token/', { username, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// 登出
export const logout = async () => {
  try {
    const response = await api.post('/logout/');
    return response.data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// refresh token
export const refreshToken = async () => {
  try {
    const response = await api.post('/token/refresh/');
    return response.data;
  } catch (error) {
    console.error('Refresh token error:', error);
    throw error;
  }
};

// delete user
export const deleteUser = async () => {
  try {
    const response = await api.delete('/users/delete_account/');
    return response.data;
  } catch (error) {
    console.error('Delete user error:', error);
    throw error;
  }
};




