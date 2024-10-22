import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { COLORS, SIZES, FONT } from '../../../styles/theme';
import { useFocusEffect } from '@react-navigation/native';
import { getOrderAnalysis } from '../../../api/statisticsApi';

const screenWidth = Dimensions.get('window').width;

const OrderAnalysis = () => {
  const [activeTab, setActiveTab] = useState('月份');
  const [orderData, setOrderData] = useState({
    productTotals: [],
    orderItemCounts: [],
    ordersByPickupDate: [],
    ordersByOrderDate: []
  });

  const fetchOrderData = useCallback(async () => {
    try {
      const data = await getOrderAnalysis(activeTab);
      setOrderData(data);
    } catch (error) {
      // 使用模擬數據
      const mockData = {
        productTotals: [
          { name: '產品A', quantity: 150 },
          { name: '產品B', quantity: 120 },
          { name: '產品C', quantity: 90 },
        ],
        orderItemCounts: [
          { orderId: 'A001', itemCount: 10 },
          { orderId: 'B002', itemCount: 7 },
          { orderId: 'C003', itemCount: 5 },
        ],
        ordersByPickupDate: [
          { date: '2023-05-01', count: 5 },
          { date: '2023-05-02', count: 8 },
          { date: '2023-05-03', count: 6 },
        ],
        ordersByOrderDate: [
          { date: '2023-04-28', count: 7 },
          { date: '2023-04-29', count: 9 },
          { date: '2023-04-30', count: 4 },
        ]
      };
      setOrderData(mockData);
    }
  }, [activeTab]);

  useFocusEffect(
    useCallback(() => {
      fetchOrderData();
    }, [fetchOrderData])
  );

  const renderProductTotals = () => (
    <View>
      <Text style={styles.sectionTitle}>產品數量加總</Text>
      <FlatList
        data={orderData.productTotals}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemQuantity}>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );

  const renderOrderItemCounts = () => (
    <View>
      <Text style={styles.sectionTitle}>訂單品項數量排序</Text>
      <FlatList
        data={orderData.orderItemCounts}
        keyExtractor={(item) => item.orderId}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemName}>訂單 {item.orderId}</Text>
            <Text style={styles.listItemQuantity}>{item.itemCount} 項</Text>
          </View>
        )}
      />
    </View>
  );

  const renderOrdersByDate = (data, title) => (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <BarChart
        data={{
          labels: data.map(item => item.date),
          datasets: [{
            data: data.map(item => item.count)
          }]
        }}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: COLORS.bg,
          backgroundGradientFrom: COLORS.bg,
          backgroundGradientTo: COLORS.bg,
          decimalPlaces: 0,
          color: (opacity = 1) => COLORS.primary,
          labelColor: (opacity = 1) => COLORS.gray,
          style: {
            borderRadius: 16
          },
          barPercentage: 0.5,
        }}
        style={styles.chart}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dateRangeTabContainer}>
        <View style={styles.tabsContainer}>
          {['月份', '年份', '檔期'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.dateRangeTab, activeTab === tab && styles.activeDateRangeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.dateRangeTabText, activeTab === tab && styles.activeDateRangeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          style={styles.content}
          data={[
            { key: 'productTotals', render: renderProductTotals },
            { key: 'orderItemCounts', render: renderOrderItemCounts },
            { key: 'ordersByPickupDate', render: () => renderOrdersByDate(orderData.ordersByPickupDate, '按取貨日期排序') },
            { key: 'ordersByOrderDate', render: () => renderOrdersByDate(orderData.ordersByOrderDate, '按下單日期排序') },
          ]}
          renderItem={({item}) => item.render()}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  dateRangeTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.small,
    marginTop: 40,
    paddingHorizontal: SIZES.medium,
  },
  tabsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  dateRangeTab: {
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
  },
  activeDateRangeTab: {
    backgroundColor: COLORS.secondary,
  },
  dateRangeTabText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  activeDateRangeTabText: {
    color: COLORS.white,
  },
  content: {
    flex: 1,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small,
  },
  sectionTitle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: 'bold',
    marginVertical: SIZES.small,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.small,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray3,
  },
  listItemName: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    flex: 2,
  },
  listItemQuantity: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
    flex: 1,
    textAlign: 'right',
  },
  chart: {
    marginVertical: SIZES.small,
    borderRadius: SIZES.medium,
  },
});

export default OrderAnalysis;
