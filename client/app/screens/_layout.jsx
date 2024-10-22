import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONT } from '../../styles/theme';

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

export default function Layout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen 
        name="WelcomeScreen"
        options={{ 
          headerTitle: '',
          headerShadowVisible: false,
        }} 
      />
      <Stack.Screen 
        name="OrderDetailScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>訂單明細</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen
        name="CartScreen"
        options={{
          tabBarLabel: '購物車',
          headerTitle: (props) => <CustomHeaderTitle>購物車</CustomHeaderTitle>,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="CartInfoScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>訂單資訊</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="settings"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>設定</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      
    </Stack>
  )
}
