import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { COLORS, FONT, SIZES } from '../../styles/theme';

const EditOrderModal = ({ isVisible, onClose, onSave, initialData }) => {
  const [editedOrder, setEditedOrder] = useState(initialData);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setEditedOrder({ ...editedOrder, pickup_date: date.toISOString().split('T')[0] });
    hideDatePicker();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>訂購人</Text>
          <TextInput
            style={styles.input}
            value={editedOrder.customer_name}
            onChangeText={(text) => setEditedOrder({...editedOrder, customer_name: text})}
            placeholder="訂購人"
          />
          <Text style={styles.title}>手機號碼</Text>
          <TextInput
            style={styles.input}
            value={editedOrder.customer_mobile}
            onChangeText={(text) => setEditedOrder({...editedOrder, customer_mobile: text})}
            placeholder="手機號碼"
            keyboardType="phone-pad"
          />
          <Text style={styles.title}>箱號</Text>
          <TextInput
            style={styles.input}
            value={editedOrder.box_number}
            onChangeText={(text) => setEditedOrder({...editedOrder, box_number: text})}
            placeholder="箱號"
          />
          <Text style={styles.title}>取貨日期</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.datePickerText}>{editedOrder.pickup_date || "取貨日期"}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => onSave(editedOrder)}>
              <Text style={styles.buttonText}>送出</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.medium,
    width: '80%',
  },
  title: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.xSmall,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
  },
  datePickerText: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
    marginHorizontal: SIZES.xSmall,
  },
  cancelButton: {
    backgroundColor: COLORS.gray2,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EditOrderModal;
