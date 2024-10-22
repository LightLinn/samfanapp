import React, { useState, useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { COLORS, SIZES, FONT, SHADOWS } from '../../../styles/theme';
import { useFocusEffect } from '@react-navigation/native';
import { getRevenueAnalysis } from '../../../api/statisticsApi';

const screenWidth = Dimensions.get('window').width;

const RevenueAnalysis = () => {
  const [activeTab, setActiveTab] = useState('月份');
  const [revenueData, setRevenueData] = useState([]);

  const fetchRevenueData = useCallback(async () => {
    try {
      const data = await getRevenueAnalysis(activeTab);
      setRevenueData(data);
    } catch (error) {
      const mockData = [
        { date: '1月', revenue: 30000 },
        { date: '2月', revenue: 25000 },
        { date: '3月', revenue: 35000 },
        { date: '4月', revenue: 28000 },
        { date: '5月', revenue: 40000 },
        { date: '6月', revenue: 32000 },
      ];
      setRevenueData(mockData);
    }
  }, [activeTab]);

  useFocusEffect(
    useCallback(() => {
      fetchRevenueData();
    }, [fetchRevenueData])
  );

  const filterValidData = (data) => {
    return data.filter(item => 
      typeof item.revenue === 'number' && 
      isFinite(item.revenue) &&
      !isNaN(item.revenue)
    );
  };

  const validData = filterValidData(revenueData);
  const chartData = {
    labels: validData.length > 0 ? validData.map(item => item.date) : [],
    datasets: [{
      data: validData.length > 0 ? validData.map(item => item.revenue) : [0]
    }]
  };

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
        <LineChart
          data={chartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: COLORS.bg,
            backgroundGradientFrom: COLORS.bg,
            backgroundGradientTo: COLORS.bg,
            decimalPlaces: 0,
            color: (opacity = 1) => COLORS.secondary,
            labelColor: (opacity = 1) => COLORS.gray3,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: COLORS.primary
            }
          }}
          bezier
          style={styles.chart}
        />

        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <Text style={[styles.headerText, styles.dateColumn]}>日期</Text>
            <Text style={[styles.headerText, styles.revenueColumn]}>營收</Text>
          </View>
          <FlatList
            data={revenueData}
            keyExtractor={(item) => item.date}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Text style={[styles.listItemDate, styles.dateColumn]}>{item.date}</Text>
                <Text style={[styles.listItemRevenue, styles.revenueColumn]}>${item.revenue.toLocaleString()}</Text>
              </View>
            )}
            style={styles.revenueList}
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
  dateRangeTabTitle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    marginRight: SIZES.small,
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
  },
  listContainer: {
    marginTop: SIZES.large,
    paddingHorizontal: SIZES.medium,
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
  revenueList: {
    marginTop: SIZES.small,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.medium,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray3,
  },
  listItemDate: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  listItemRevenue: {
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  dateColumn: {
    flex: 1,
    paddingRight: SIZES.small,
  },
  revenueColumn: {
    flex: 1,
    textAlign: 'right',
  },
});

export default RevenueAnalysis;
