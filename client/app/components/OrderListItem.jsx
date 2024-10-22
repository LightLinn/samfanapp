import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT } from '../../styles/theme';
import moment from 'moment';

const formatDate = (dateString) => {
  return moment(dateString).format('YYYY-MM-DD');
};

const getStatusColor = (status) => {
    switch (status) {
      case '備貨中':
      case '待出貨':
        return COLORS.secondary;
      case '已出貨':
      case '已取消':
        return COLORS.gray3;
      default:
        return COLORS.gray2;
    }
  };
  
const OrderListItem = ({ order, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.column}>
        <Text style={styles.customerName} numberOfLines={1} ellipsizeMode="tail">
          {order.customer_name}
        </Text>
      </View>
      <View style={styles.column}>
        <Text style={[styles.status, { color: getStatusColor(order.status) }]}>{order.status}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.date}>{formatDate(order.order_date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  column: {
    flex: 1,
    paddingHorizontal: SIZES.small,
  },
  customerName: {
    fontWeight: 'bold',
    fontSize: SIZES.small,
    color: COLORS.gray2,
  },
  status: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
    textAlign: 'center',
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    textAlign: 'right',
  },
});

export default OrderListItem;
