import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import { debounce } from 'lodash';

const CartItem = ({ item, onUpdateItem, onRemoveItem }) => {
  const [note, setNote] = useState(item.note);

  const debouncedUpdateNote = useCallback(
    debounce((newNote) => {
      onUpdateItem(item.id, item.quantity, newNote);
    }, 500),
    [item.id, item.quantity, onUpdateItem]
  );

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      onUpdateItem(item.id, newQuantity, note);
    }
  };

  const handleNoteChange = (newNote) => {
    setNote(newNote);
    debouncedUpdateNote(newNote);
  };

  const handleRemoveItem = () => {
    Alert.alert(
      "確認移除",
      "您確定要移除這個商品嗎？",
      [
        { text: "取消", style: "cancel" },
        { text: "確定", onPress: () => onRemoveItem(item.id) }
      ]
    );
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemName}>{item.product.name}</Text>
        <View style={styles.quantityContainer}>
          {item.quantity === 1 ? (
            <TouchableOpacity onPress={handleRemoveItem}>
              <Ionicons name="trash-outline" size={SIZES.large} color={COLORS.gray3} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleQuantityChange(item.quantity - 1)}>
              <Ionicons name="remove-circle-outline" size={SIZES.large} color={COLORS.gray2} />
            </TouchableOpacity>
          )}
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange(item.quantity + 1)}>
            <Ionicons name="add-circle-outline" size={SIZES.large} color={COLORS.secondary} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.noteInput}
        placeholder="備註"
        value={note}
        onChangeText={handleNoteChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    marginBottom: SIZES.small,
    ...SHADOWS.small,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  itemName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.gray,
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginHorizontal: SIZES.small,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    padding: SIZES.small,
    fontFamily: FONT.regular,
    marginBottom: SIZES.small,
  },
});

export default CartItem;