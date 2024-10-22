import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';

const OrderDetailItem = ({ items, orderStatus, onItemUpdate, onItemDelete }) => {
  return (
    <View style={styles.section}>
      {items.map((item) => (
        <View key={item.id} style={[
          styles.itemContainer,
          !item.is_prepared && styles.unpreparedItem
        ]}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemName}>{item.product.name}</Text>
            <Text style={styles.itemPrice}>
              {item.price ? `$ ${item.price}` : '未標價'}
            </Text>
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemQuantity}>數量 {item.quantity}</Text>
          </View>
          {item.note && (
            <View style={styles.noteContainer}>
              <Ionicons name="chatbubble-outline" size={SIZES.medium} color={COLORS.gray2} />
              <Text style={styles.itemNote}>{item.note}</Text>
            </View>
          )}
          {orderStatus === '備貨中' && (
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => onItemDelete(item.id)}
              >
                <Ionicons name="trash-outline" size={SIZES.medium} color={COLORS.gray2} />
                <Text style={[styles.actionButtonText, styles.deleteButtonText]}>刪除</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, item.is_prepared ? styles.preparedButton : styles.prepareButton]}
                onPress={() => onItemUpdate(item.id, !item.is_prepared)}
              >
                <Ionicons 
                  name={item.is_prepared ? "checkmark-circle" : "radio-button-off"} 
                  size={SIZES.medium} 
                  color={item.is_prepared ? COLORS.white : COLORS.secondary} 
                />
                <Text style={[styles.actionButtonText, item.is_prepared && styles.preparedButtonText]}>
                  {item.is_prepared ? '取消備貨' : '備貨'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: COLORS.bg,
    padding: SIZES.medium,
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    marginBottom: SIZES.medium,
    ...SHADOWS.small,
  },
  // unpreparedItem: {
  //   borderColor: COLORS.secondary,
  //   borderWidth: 2,
  // },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  itemName: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.gray,
    flex: 1,
  },
  itemPrice: {
    fontSize: SIZES.medium,
    color: COLORS.gray3,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
  },
  itemQuantity: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  itemSubtotal: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    padding: SIZES.xSmall,
    marginBottom: SIZES.small,
  },
  itemNote: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginLeft: SIZES.xSmall,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall,
    flex: 1,
  },
  prepareButton: {
    marginRight: SIZES.xSmall,
  },
  preparedButton: {
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.xSmall,
  },
  deleteButton: {
    marginLeft: SIZES.xSmall,
  },
  actionButtonText: {
    marginLeft: SIZES.xSmall,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  deleteButtonText: {
    color: COLORS.gray2,
  },
  preparedButtonText: {
    color: COLORS.white,
  },
});

export default OrderDetailItem;
