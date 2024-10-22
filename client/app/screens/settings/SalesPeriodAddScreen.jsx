import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { createSalesPeriod } from '../../../api/salesperiodApi'; // 導入 API
import { useRouter } from 'expo-router';
import moment from 'moment'; // 導入 moment
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // 導入日期選擇器
import { COLORS, SIZES, FONT } from '../../../styles/theme'; // 導入樣式主題

const SalesPeriodAddScreen = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('預備中'); // 默認狀態
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(moment(date).format('YYYY-MM-DD')); // 格式化日期
    setStartDatePickerVisibility(false);
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(moment(date).format('YYYY-MM-DD')); // 格式化日期
    setEndDatePickerVisibility(false);
  };

  const handleSubmit = async () => {
    if (!name || !startDate || !endDate) {
      Alert.alert('錯誤', '請填寫所有必填欄位');
      return;
    }

    // 檢查結束日期是否晚於開始日期
    if (moment(endDate).isSameOrBefore(moment(startDate))) {
      Alert.alert('錯誤', '結束日期必須晚於開始日期');
      return;
    }

    try {
      await createSalesPeriod({ name, start_date: startDate, end_date: endDate, status });
      Alert.alert('成功', '檔期已新增');
      router.back();
    } catch (error) {
      console.error('Error creating sales period:', error);
      Alert.alert('錯誤', '無法新增檔期，請稍後再試');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>檔期名稱</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="輸入檔期名稱"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>開始日期</Text>
        <TouchableOpacity onPress={showStartDatePicker} style={styles.input}>
          <Text style={styles.dateText}>
            {startDate ? moment(startDate).format('YYYY-MM-DD') : '選擇日期'}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="date"
          onConfirm={handleStartDateConfirm}
          onCancel={() => setStartDatePickerVisibility(false)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>結束日期</Text>
        <TouchableOpacity onPress={showEndDatePicker} style={styles.input}>
          <Text style={styles.dateText}>
            {endDate ? moment(endDate).format('YYYY-MM-DD') : '選擇日期'}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="date"
          onConfirm={handleEndDateConfirm}
          onCancel={() => setEndDatePickerVisibility(false)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>新增檔期</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.bg,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    fontFamily: FONT.regular,
    backgroundColor: COLORS.white,
  },
  section: {
    marginBottom: SIZES.medium,
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    alignItems: 'center',
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
  dateText: {
    color: COLORS.gray3,
  },
});

export default SalesPeriodAddScreen;
