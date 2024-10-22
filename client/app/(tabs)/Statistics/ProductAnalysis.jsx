import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../../../styles/theme';
import { useFocusEffect } from '@react-navigation/native';
import { getProductAnalysis } from '../../../api/statisticsApi';
const screenWidth = Dimensions.get('window').width;

const ProductAnalysis = () => {
  const [activeTab, setActiveTab] = useState('月份');
  const [productData, setProductData] = useState([]);

  const fetchProductData = useCallback(async () => {
    try {
      const data = await getProductAnalysis(activeTab);
      setProductData(data);
    } catch (error) {
      const mockData = [
        { name: '產品A', quantity: 100, amount: 30000 },
        { name: '產品B', quantity: 80, amount: 25000 },
        { name: '產品C', quantity: 60, amount: 15000 },
        { name: '產品D', quantity: 40, amount: 10000 },
        { name: '產品E', quantity: 70, amount: 20000 },
      ];
      setProductData(mockData);
    }
  }, [activeTab]);

  useFocusEffect(
    useCallback(() => {
      fetchProductData();
    }, [fetchProductData])
  );

  const pieChartData = productData.map((item, index) => {
    const baseColor = COLORS.secondary;
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    const shade = index * 20; // 調整這個值可以改變顏色變化的程度
    return {
      name: item.name,
      population: item.amount,
      color: `rgb(${Math.max(0, r - shade)}, ${Math.max(0, g - shade)}, ${Math.max(0, b - shade)})`,
      legendFontColor: COLORS.gray,
      legendFontSize: 12
    };
  });

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
        <PieChart
          data={pieChartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            color: (opacity = 1) => COLORS.primary,
            labelColor: (opacity = 1) => COLORS.gray,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          center={[10, 0]}
          absolute
          style={styles.chart}
        />
        
        
        <View style={styles.productListContainer}>
          <View style={styles.listHeader}>
            <Text style={[styles.headerText, styles.productColumn]}>產品</Text>
            <Text style={[styles.headerText, styles.quantityColumn]}>數量</Text>
            <Text style={[styles.headerText, styles.amountColumn]}>金額</Text>
          </View>
          <FlatList
            data={productData}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text style={[styles.listItemName, styles.productColumn]} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                <Text style={[styles.listItemQuantity, styles.quantityColumn]}>{item.quantity}</Text>
                <Text style={[styles.listItemAmount, styles.amountColumn]}>${item.amount.toLocaleString()}</Text>
              </View>
            )}
            style={styles.productList}
          />
        </View>
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
    paddingVertical: SIZES.medium,
  },
  chart: {
    ...SHADOWS.medium,
  },
  productListContainer: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.medium,
  },
  productList: {
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.medium,
  },
  listItemName: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  listItemQuantity: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
  },
  listItemAmount: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.small,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray3,
  },
  headerText: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  productColumn: {
    flex: 2,
    paddingRight: SIZES.small,
  },
  quantityColumn: {
    flex: 1,
    textAlign: 'center',
  },
  amountColumn: {
    flex: 1,
    textAlign: 'right',
  },
});

export default ProductAnalysis;
