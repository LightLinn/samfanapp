import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getSalesPeriodById, updateSalesPeriod } from '../../../api/salesperiodApi';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { COLORS, SIZES, FONT } from '../../../styles/theme';

const SalesPeriodEditScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // 使用 useLocalSearchParams 替代 useSearchParams
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('預備中');
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  useEffect(() => {
    const fetchSalesPeriod = async () => {
      try {
        const period = await getSalesPeriodById(id);
        setName(period.name);
        setStartDate(period.start_date);
        setEndDate(period.end_date);
        setStatus(period.status);
      } catch (error) {
        console.error('Error fetching sales period:', error);
        Alert.alert('錯誤', '無法獲取檔期資料');
      }
    };

    if (id) {
      fetchSalesPeriod();
    }
  }, [id]);

  const handleStartDateConfirm = (date) => {
    setStartDate(moment(date).format('YYYY-MM-DD'));
    setStartDatePickerVisibility(false);
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(moment(date).format('YYYY-MM-DD'));
    setEndDatePickerVisibility(false);
  };

  const handleSubmit = async () => {
    if (!name || !startDate || !endDate) {
      Alert.alert('錯誤', '請填寫所有必填欄位');
      return;
    }

    if (moment(endDate).isSameOrBefore(moment(startDate))) {
      Alert.alert('錯誤', '結束日期必須晚於開始日期');
      return;
    }

    try {
      await updateSalesPeriod(id, { name, start_date: startDate, end_date: endDate, status });
      Alert.alert('成功', '檔期已更新');
      router.back();
    } catch (error) {
      console.error('Error updating sales period:', error);
      Alert.alert('錯誤', '無法更新檔期，請稍後再試');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>檔期名稱</Text>
        <TextInput
          placeholder="檔期名稱"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>開始日期</Text>
        <TouchableOpacity onPress={() => setStartDatePickerVisibility(true)} style={styles.input}>
          <Text>{startDate ? moment(startDate).format('YYYY-MM-DD') : '選擇日期'}</Text>
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
        <TouchableOpacity onPress={() => setEndDatePickerVisibility(true)} style={styles.input}>
          <Text>{endDate ? moment(endDate).format('YYYY-MM-DD') : '選擇日期'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="date"
          onConfirm={handleEndDateConfirm}
          onCancel={() => setEndDatePickerVisibility(false)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>更新檔期</Text>
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
  section: {
    marginBottom: SIZES.medium,
  },
  label: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.bold,
    color: COLORS.primary,
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
});

export default SalesPeriodEditScreen;