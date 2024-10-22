import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONT } from '../../../styles/theme';

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
        name="SettingsScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>設定</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="ProductListScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>商品管理</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="ProductAddScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>新增商品</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="ProductEditScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>編輯商品</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="SalesPeriodListScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>檔期管理</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="SalesPeriodAddScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>新增檔期</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="SalesPeriodEditScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>編輯檔期</CustomHeaderTitle>,
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={SIZES.xLarge} color={COLORS.secondary} />
            </TouchableOpacity>
          ),
        }} 
      />
      <Stack.Screen 
        name="NotFoundScreen"
        options={{ 
          headerTitle: (props) => <CustomHeaderTitle>找不到頁面</CustomHeaderTitle>,
          headerShadowVisible: false,
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
