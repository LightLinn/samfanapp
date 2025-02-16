import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="LoginScreen" 
        options={{ 
            headerShown: false 
        }}
        />
    </Stack>
  );
}
