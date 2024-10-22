import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';

const ProductItem = ({ product, onAddToCart }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');

  const handleQuantityChange = (increment) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + increment));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity, note);
    setModalVisible(false);
    // Reset modal state
    setQuantity(1);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={SIZES.xLarge} color={COLORS.white} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{product.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleQuantityChange(-1)}>
                <Ionicons name="remove-circle-outline" size={SIZES.xLarge} color={COLORS.gray2} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => handleQuantityChange(1)}>
                <Ionicons name="add-circle-outline" size={SIZES.xLarge} color={COLORS.gray2} />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.noteInput}
              placeholder="備註"
              value={note}
              onChangeText={setNote}
              multiline
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleAddToCart}>
              <Text style={styles.confirmButtonText}>確認</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>取消</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium,
    paddingHorizontal: SIZES.xSmall,
    ...SHADOWS.medium,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.small,
  },
  infoContainer: {
    flex: 1,
    marginLeft: SIZES.medium,
    marginRight: SIZES.small,
  },
  name: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginBottom: SIZES.xSmall,
  },
  description: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray2,
    marginBottom: SIZES.xSmall,
  },
  price: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
    marginLeft: SIZES.small,
    ...SHADOWS.small,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.large,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: SIZES.large,
    color: COLORS.gray,
    marginBottom: SIZES.medium,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.medium,
  },
  quantityText: {
    fontSize: SIZES.large,
    marginHorizontal: SIZES.small,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    marginBottom: SIZES.medium,
    width: '100%',
  },
  confirmButton: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    width: '100%',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  confirmButtonText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  cancelButton: {
    padding: SIZES.small,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: COLORS.secondary,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
});

export default ProductItem;
