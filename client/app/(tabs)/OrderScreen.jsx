import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import OrderItem from '../components/OrderItem';
import OrderListItem from '../components/OrderListItem'
import { COLORS, FONT, SIZES, SHADOWS } from '../../styles/theme';
import { useFocusEffect } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getOrders } from '../../api/orderApi';
import QrCodeScanner from '../components/QrCodeScanner';

const OrderScreen = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedStatus, setSelectedStatus] = useState('全部');
  const [isAdvancedFilterActive, setIsAdvancedFilterActive] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [viewMode, setViewMode] = useState('card'); // 'card' 或 'list'
  const [showScanner, setShowScanner] = useState(false);

  const statusOptions = ['全部', '備貨中', '待出貨', '待付款', '已出貨', '已取消'];

  useFocusEffect(
    useCallback(() => {
      fetchOrders();
    }, [])
  );

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
      setFilteredOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    filterOrders(text, selectedStatus);
  };

  const handleStatusFilter = (status) => {
    if (isAdvancedFilterActive) {
      setIsAdvancedFilterActive(false);
      setSelectedStatus('全部');
      filterOrders(searchQuery, '全部');
    } else {
      setSelectedStatus(status);
      filterOrders(searchQuery, status);
    }
  };

  const filterOrders = (query, status) => {
    let filtered = orders;
    if (query) {
      filtered = filtered.filter(order => 
        order.customer_name.toLowerCase().includes(query.toLowerCase()) ||
        order.customer_mobile.includes(query) ||
        order.items.some(item => 
          item.product.name.toLowerCase().includes(query.toLowerCase())
        ) ||
        order.order_date.includes(query) || 
        (order.box_number && order.box_number.includes(query)) ||
        order.sales_period.name.includes(query)
      );
    }
    if (status !== '全部') {
      filtered = filtered.filter(order => order.status === status);
    }
    setFilteredOrders(filtered);
  };

  const handlePress = (orderId) => {
    router.push(`/screens/OrderDetailScreen?id=${orderId}`);
  };

  const toggleAdvancedFilter = () => {
    setIsAdvancedFilterActive(!isAdvancedFilterActive);
    if (isAdvancedFilterActive) {
      setStartDate(new Date());
      setEndDate(new Date());
      setMinAmount('');
      setMaxAmount('');
      setProductFilter('');
      filterOrders(searchQuery, selectedStatus);
    }
  };

  const applyAdvancedFilter = () => {
    let filtered = orders;
    if (startDate && endDate) {
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.order_date);
        // orderDate.setHours(0, 0, 0, 0);
        const startDateAdjusted = new Date(startDate)
        const endDateAdjusted = new Date(endDate);
        startDateAdjusted.setHours(0, 0, 0, 0);
        endDateAdjusted.setHours(23, 59, 59, 999);
        return orderDate >= startDateAdjusted && orderDate <= endDateAdjusted;
      });
    }
    setFilteredOrders(filtered);
    setIsAdvancedFilterActive(true);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'desc' ? 'asc' : 'desc');
  };

  useEffect(() => {
    // 當 sortOrder 改變時，重新排序 filteredOrders
    const sortedOrders = [...filteredOrders].sort((a, b) => {
      const dateA = new Date(a.order_date);
      const dateB = new Date(b.order_date);
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
    setFilteredOrders(sortedOrders);
  }, [sortOrder]);

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'card' ? 'list' : 'card');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.fixedHeader}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="姓名/手機號碼/日期/箱號/產品/檔期..."
              placeholderTextColor={COLORS.gray2}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            {searchQuery === '' ? (
              <TouchableOpacity onPress={() => setShowScanner(true)}>
                <Ionicons name="qr-code" size={SIZES.large} color={COLORS.gray2} style={styles.searchIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleSearch('')}>
                <Ionicons name="close-circle" size={SIZES.large} color={COLORS.gray2} style={styles.clearIcon} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.filterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {statusOptions.map((status, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.filterButton,
                    selectedStatus === status && styles.selectedFilterButton
                  ]}
                  onPress={() => handleStatusFilter(status)}
                >
                  <Text style={[
                    styles.filterButtonText,
                    selectedStatus === status && styles.selectedFilterButtonText
                  ]}>{status}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
              <Ionicons 
                name={sortOrder === 'desc' ? "arrow-down" : "arrow-up"} 
                size={SIZES.xLarge} 
                color={COLORS.gray2} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewToggleButton} onPress={toggleViewMode} >
              <Ionicons 
                name={viewMode === 'card' ? "list-outline" : "grid-outline"} 
                size={SIZES.xLarge} 
                color={COLORS.gray2} 
              />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.advancedFilterButton} onPress={toggleAdvancedFilter}>
              <Ionicons 
                name={isAdvancedFilterActive ? "options" : "options-outline"} 
                size={SIZES.xLarge} 
                color={isAdvancedFilterActive ? COLORS.secondary : COLORS.gray2} 
              />
            </TouchableOpacity> */}
          </View>
        </View>
        
        {isAdvancedFilterActive && (
          <View style={styles.advancedFilterContainer}>
            <View style={styles.datePickerContainer}>
              <Text>日期區間：</Text>
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => setStartDate(selectedDate || startDate)}
              />
              <Text> 至</Text>
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => setEndDate(selectedDate || endDate)}
              />
            </View>
            <TouchableOpacity style={styles.applyButton} onPress={applyAdvancedFilter}>
              <Text style={styles.applyButtonText}>篩選</Text>
            </TouchableOpacity>
          </View>
        )}
        {viewMode === 'card' ? (
          <FlatList
            data={filteredOrders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <OrderItem 
                order={{
                  id: item.id,
                  customerName: item.customer_name,
                  customerMobile: item.customer_mobile,
                  status: item.status,
                  order_date: item.order_date,
                  pickup_date: item.pickup_date,
                  items_count: item.items_count,
                  box_number: item.box_number ? item.box_number : '',
                  sales_period: item.sales_period ? item.sales_period.name : '未指定'
                }} 
                onPress={() => handlePress(item.id)} 
              />
            )}
            contentContainerStyle={styles.orderList}
          />
        ) : (
          <FlatList
            data={filteredOrders}
            renderItem={({ item }) => (
              <OrderListItem order={item} onPress={() => handlePress(item.id)} />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.orderList}
          />
        )}
        {showScanner && (
          <View style={StyleSheet.absoluteFillObject}>
            <QrCodeScanner
              onScan={(data) => {
                handleSearch(data);
                setShowScanner(false);
              }}
              onClose={() => setShowScanner(false)}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
  },
  fixedHeader: {
    backgroundColor: COLORS.bg,
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.small,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    paddingHorizontal: SIZES.small,
    ...SHADOWS.small,
  },
  searchIcon: {
    marginRight: SIZES.small,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  clearIcon: {
    marginLeft: SIZES.small,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
  },
  filterButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
    marginRight: SIZES.xSmall,
    ...SHADOWS.small,
  },
  filterButtonText: {
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
  selectedFilterButton: {
    backgroundColor: COLORS.primary,
  },
  selectedFilterButtonText: {
    color: COLORS.white,
  },
  advancedFilterButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  advancedFilterContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginBottom: SIZES.medium,
    marginHorizontal: SIZES.medium,
    ...SHADOWS.medium,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.small,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    padding: SIZES.small,
    marginBottom: SIZES.small,
    fontFamily: FONT.regular,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
    alignItems: 'center',
  },
  applyButtonText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
  orderList: {
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.medium,
  },
  sortButton: {
    padding: 5,
    color: COLORS.gray2,
    marginLeft: 5,
  },
  viewToggleButton: {
    padding: 5,
    color: COLORS.gray2,
    marginLeft: 5,
  },
});

export default OrderScreen;
