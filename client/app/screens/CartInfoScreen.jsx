import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import { convertCartToOrder } from '../../api/convertApi';
import { useCart } from '../../context/CartContext';

// 日期格式化函數
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const CartInfoScreen = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { clearAllCart } = useCart();

  const router = useRouter();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setPickupDate(date);
    hideDatePicker();
  };

  const validateForm = () => {
    let newErrors = {};

    if (!customerName.trim()) {
      newErrors.customerName = '請輸入訂購人姓名';
    }

    if (!customerMobile.trim()) {
      newErrors.customerMobile = '請輸入訂購人手機號碼';
    } else if (!/^[0-9]{10}$/.test(customerMobile)) {
      newErrors.customerMobile = '請輸入有效的10位數電話號碼';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (pickupDate < today) {
      newErrors.pickupDate = '取貨日期不能早於今天';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        const data = {
          customerName,
          customerMobile,
          pickupDate: formatDate(pickupDate)
        };
        const response = await convertCartToOrder(data);
        await clearAllCart()
        Alert.alert('成功', '訂單已成功創建', [
          { 
            text: '確定', 
            onPress: () => {
              router.replace('/(tabs)/ProductsScreen');
            }
          }
        ]);
      } catch (error) {
        console.error('Error creating order:', error);
        Alert.alert('錯誤', '創建訂單時發生錯誤,請稍後再試');
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert('錯誤', '資料有誤，請檢查後重新輸入');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>姓名 {errors.customerName && <Text style={styles.errorText}>{errors.customerName}</Text>}</Text>
        <TextInput
          style={styles.input}
          value={customerName}
          onChangeText={setCustomerName}
          placeholder="訂購人姓名"
        />
        

        <Text style={styles.label}>手機 {errors.customerMobile && <Text style={styles.errorText}>{errors.customerMobile}</Text>}</Text>
        
        <TextInput
          style={styles.input}
          value={customerMobile}
          onChangeText={setCustomerMobile}
          placeholder="手機號碼"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>取貨日期 {errors.pickupDate && <Text style={styles.errorText}>{errors.pickupDate}</Text>}</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>
            {formatDate(pickupDate)}
          </Text>
        </TouchableOpacity>
        

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>送出訂單</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  formContainer: {
    padding: SIZES.medium,
  },
  label: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    ...SHADOWS.small,
  },
  dateButton: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    ...SHADOWS.small,
  },
  dateButtonText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  submitButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    alignItems: 'center',
    marginTop: SIZES.large,
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
  errorText: {
    color: COLORS.warning,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    marginBottom: SIZES.small,
    paddingLeft: SIZES.small,
  },
});

export default CartInfoScreen;
