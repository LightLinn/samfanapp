import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { COLORS } from '../styles/theme';
import { LogBox } from 'react-native';

export default function Index() {
  const { isLoading, userToken } = useAuth();
  LogBox.ignoreAllLogs(true);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (userToken) {
    return <Redirect href="/(tabs)/ProductsScreen" />;
  } else {
    return <Redirect href="/(auth)/LoginScreen" />;
  }
}
