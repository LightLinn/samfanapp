import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
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

const OrderItem = ({ order, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.salesPeriod}>{order.sales_period}</Text>
        <Text style={[styles.orderStatus, { color: getStatusColor(order.status) }]}>{order.status}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.customerName}>{order.customerName}</Text>
      </View>
      <Text style={styles.customerMobile}>{order.customerMobile}</Text>
      <View style={styles.footer}>
        <Text style={styles.date}>預購日期 {formatDate(order.order_date)}</Text>
        <Text style={styles.orderTotal}>$ {order.total}</Text>
      </View>
      <View style={styles.footer}>
      <Text style={styles.date}>取貨日期 {formatDate(order.pickup_date)}</Text>
      <Text style={styles.itemsCount}>共{order.items_count}件</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    marginBottom: SIZES.medium,
    ...SHADOWS.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  salesPeriod: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: 'bold'
  },
  customerName: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  customerMobile: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  orderStatus: {
    fontSize: SIZES.medium,
    color: COLORS.gray2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.xSmall,
  },
  date: {
    fontSize: SIZES.small,
    color: COLORS.gray3,
  },
  orderTotal: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  itemsCount: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});

export default OrderItem;
