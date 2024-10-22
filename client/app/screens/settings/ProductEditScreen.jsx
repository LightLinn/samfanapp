import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getProductById, updateProduct } from '../../../api/productApi';
import { COLORS, SIZES, FONT } from '../../../styles/theme';

const ProductEditScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id);
        setName(product.name);
        setDescription(product.description);
        setNote(product.note);
      } catch (error) {
        console.error('Error fetching product:', error);
        Alert.alert('錯誤', '無法獲取商品資料');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert('錯誤', '請填寫商品名稱');
      return;
    }

    try {
      await updateProduct(id, { name, description, note });
      Alert.alert('成功', '商品已更新');
      router.back();
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('錯誤', '無法更新商品，請稍後再試');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>商品名稱</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="輸入商品名稱"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>商品描述</Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          placeholder="輸入商品描述"
          multiline
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>備註</Text>
        <TextInput
          value={note}
          onChangeText={setNote}
          style={styles.input}
          placeholder="輸入備註"
          multiline
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>更新商品</Text>
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

export default ProductEditScreen;