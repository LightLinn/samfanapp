import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <CartProvider>
      <Stack>
        <Stack.Screen 
          name="index"
          options={{ 
            headerTitle: '',
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="(tabs)"
          options={{ 
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="(auth)"
          options={{ 
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="screens"
          options={{ 
            headerTitle: '',
            headerShown: false,
          }}
        />
      </Stack>
      </CartProvider>
    </AuthProvider>
  );
}
