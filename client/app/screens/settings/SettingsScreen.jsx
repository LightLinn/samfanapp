import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import { COLORS, FONT, SIZES, SHADOWS } from '../../../styles/theme';
import { useAuth } from '../../../context/AuthContext';
import { deleteUser } from '../../../api/authApi'; // 假設這是刪除用戶的 API 函數

const SettingItem = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color={COLORS.primary} />
    <Text style={styles.settingText}>{title}</Text>
    <Ionicons name="chevron-forward" size={24} color={COLORS.gray} />
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const navigation = useNavigation();

  const settingsOptions = [
    { title: '商品管理', icon: 'cube-outline', route: '/screens/settings/ProductListScreen' },
    { title: '檔期管理', icon: 'calendar-outline', route: '/screens/settings/SalesPeriodListScreen' },
    { title: '帳號設置', icon: 'person-outline', route: '/screens/settings/NotFoundScreen' },
    { title: '通知設置', icon: 'notifications-outline', route: '/screens/settings/NotFoundScreen' },
    { title: '幫助與支援', icon: 'help-circle-outline', route: '/screens/settings/NotFoundScreen' },
    { title: '關於我們', icon: 'information-circle-outline', route: '/screens/settings/NotFoundScreen' },
  ];

  const handleLogout = async () => {
    // 二次確認
    Alert.alert(
      '登出',
      '確定要登出嗎？',
      [
        { text: '取消', style: 'cancel' },
        { text: '登出', onPress: async () => {
          await logout();
          router.push('/(auth)/LoginScreen');
        }},
      ],
      { cancelable: false }
    );
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "刪除帳號",
      "您確定要刪除您的帳號嗎？此操作無法撤銷。",
      [
        {
          text: "取消",
          style: "cancel"
        },
        { 
          text: "確定刪除", 
          onPress: async () => {
            try {
              await deleteUser();
              router.replace('/(auth)/LoginScreen');
            } catch (error) {
              console.error("刪除帳號失敗:", error);
              Alert.alert("錯誤", "刪除帳號失敗，請稍後再試。");
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.settingsContainer}>
          {settingsOptions.map((item, index) => (
            <SettingItem
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => router.push(item.route)}
            />
          ))}
        </View>
      </ScrollView>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>登出</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
          <Text style={styles.deleteAccountText}>刪除帳號</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    ...SHADOWS.medium,
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  settingsContainer: {
    padding: SIZES.medium,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
    ...SHADOWS.small,
  },
  settingText: {
    flex: 1,
    marginLeft: SIZES.medium,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.contrast,
  },
  logoutButton: {
    backgroundColor: COLORS.gray3,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    ...SHADOWS.small,
  },
  logoutText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
  deleteAccountButton: {
    backgroundColor: COLORS.danger,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.medium,
    ...SHADOWS.small,
  },
  deleteAccountText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
});

export default SettingsScreen;
