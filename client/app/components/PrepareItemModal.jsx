import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../styles/theme';

const PrepareItemModal = ({ isVisible, onClose, onSave, item }) => {
  const [price, setPrice] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (item) {
      setPrice(item.price ? item.price.toString() : '');
      setNote(item.note || '');
    }
  }, [item]);

  const handleSave = () => {
    if (item) {
      onSave({
        id: item.id,
        price: parseFloat(price) || 0,
        note,
        is_prepared: true
      });
    }
    onClose();
  };

  if (!item) {
    return null;
  }

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.itemName}>{item.product?.name || '未知商品'}</Text>
          <Text style={styles.label}>價格</Text>
          <TextInput
            style={styles.input}
            placeholder="價格"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <Text style={styles.label}>備註</Text>
          <TextInput
            style={[styles.input, styles.noteInput]}
            placeholder="備註"
            value={note}
            onChangeText={setNote}
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
              <Text style={[styles.buttonText, styles.saveButtonText]}>保存</Text>
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
  itemName: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    marginBottom: SIZES.small,
  },
  label: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    marginBottom: SIZES.small,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    fontSize: SIZES.medium,
  },
  noteInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: SIZES.small,
    borderRadius: SIZES.small,
    flex: 1,
    marginHorizontal: SIZES.xSmall,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.gray3,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  saveButtonText: {
    color: COLORS.white,
  },
});

export default PrepareItemModal;
