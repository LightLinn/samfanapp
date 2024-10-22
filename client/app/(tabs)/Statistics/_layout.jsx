import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import OrderAnalysis from './OrderAnalysis';
import RevenueAnalysis from './RevenueAnalysis';
import ProductAnalysis from './ProductAnalysis';
import { COLORS, SIZES, FONT } from '../../../styles/theme';

const StatisticsScreenLayout = () => {
  const [activeTab, setActiveTab] = useState('分析');
  const tabs = ['產品', '營收', '訂單'];

  const renderContent = () => {
    switch (activeTab) {
      case '產品':
        return <ProductAnalysis />;
      case '營收':
        return <RevenueAnalysis />;
      case '訂單':
        return <OrderAnalysis />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.tabContainer}
        contentContainerStyle={{alignItems: 'center', justifyContent: 'space-around', width: '100%'}}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: COLORS.white,
  },
  tab: {
    paddingHorizontal: SIZES.medium,
    justifyContent: 'center', // 確保文字垂直居中
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
  },
  tabText: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  activeTabText: {
    color: COLORS.secondary,
  },
  content: {
    flex: 1, // 這將使 content 佔���剩餘的所有空間
  },
});

export default StatisticsScreenLayout;
