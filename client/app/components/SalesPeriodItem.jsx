import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../styles/theme';

const SalesPeriodItem = ({ item, onEdit, onDelete }) => {
  return (
    <View style={styles.periodItem}>
      <View style={styles.periodInfo}>
        <Text style={styles.periodName}>{item.name}</Text>
        <Text style={styles.periodDate}>{item.start_date} - {item.end_date}</Text>
        <Text style={[styles.periodStatus, { color: getStatusColor(item.status) }]}>{item.status}</Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => onEdit(item)}>
          <Ionicons name="create-outline" size={SIZES.large} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={SIZES.large} color={COLORS.gray3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case '預備中':
      return COLORS.gray3;
    case '開放訂購':
      return COLORS.primary;
    case '已結束':
      return COLORS.gray;
    default:
      return COLORS.primary;
  }
};

const styles = StyleSheet.create({
  periodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.small,
  },
  periodInfo: {
    flex: 1,
  },
  periodName: {
    fontSize: SIZES.medium,
    fontFamily: 'bold',
    color: COLORS.secondary,
  },
  periodDate: {
    fontSize: SIZES.small,
    fontFamily: 'regular',
    color: COLORS.gray,
    marginTop: SIZES.xSmall,
  },
  periodStatus: {
    fontSize: SIZES.small,
    fontFamily: 'medium',
    marginTop: SIZES.xSmall,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
});

export default SalesPeriodItem;