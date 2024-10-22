import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import { COLORS, SIZES, FONT, SHADOWS } from '../../styles/theme';
import { useRouter } from 'expo-router';
import { useCart } from '../../context/CartContext';

const CustomHeaderTitle = ({ children }) => (
  <Text style={{ 
    fontSize: SIZES.medium, 
    fontWeight: 'bold',
    color: COLORS.gray,
    letterSpacing: SIZES.letterSpacing 
  }}>
    {children}
  </Text>
);

export default function TabsLayout() {
  const router = useRouter();
  const { cartItemCount } = useCart();

  const headerLeft = () => (
    <TouchableOpacity onPress={() => router.push('/screens/settings/SettingsScreen')} style={{ marginLeft: 15 }}>
      <Ionicons name="settings-outline" size={SIZES.xLarge} color={COLORS.gray3} />
    </TouchableOpacity>
  );

  const headerRight = () => {
    return (
      <TouchableOpacity onPress={() => router.push('/screens/CartScreen')} style={{ marginRight: 15 }}>
        <View style={{ position: 'relative' }}>
          <Ionicons name="cart-outline" size={SIZES.xLarge} color={COLORS.secondary} />
          {cartItemCount > 0 && (
            <View style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: COLORS.info,
              borderRadius: 10,
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: COLORS.white, fontSize: 10 }}>{cartItemCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.gray3,
        tabBarStyle: {
          backgroundColor: COLORS.lightWhite,
        },
        headerLeft: headerLeft,
        headerRight: headerRight,
      }}
    >
        <Tabs.Screen
            name="OrderScreen"
            options={{
              tabBarLabel: '歷史訂單',
              headerTitle: (props) => <CustomHeaderTitle>歷史訂單</CustomHeaderTitle>,
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="list-outline" size={size} color={color} />
              ),
            }}
        />
        <Tabs.Screen
            name="ProductsScreen"
            options={{
              tabBarLabel: '預購商品',
              headerTitle: (props) => <CustomHeaderTitle>預購商品</CustomHeaderTitle>,
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar-outline" size={size} color={color} />
              ),
            }}
        />
        <Tabs.Screen
            name="Statistics"
            options={{
              tabBarLabel: '統計分析',
              headerTitle: (props) => <CustomHeaderTitle>統計分析</CustomHeaderTitle>,
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bar-chart-outline" size={size} color={color} />
              ),
            }}
        />
    </Tabs>
  );
}
