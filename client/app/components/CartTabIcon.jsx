import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../styles/theme';
import { useCart } from '../../context/CartContext';

const CartTabIcon = ({ focused }) => {
  const { cartItemCount } = useCart();

  return (
    <View style={styles.container}>
      <Ionicons
        name={focused ? 'cart' : 'cart-outline'}
        size={SIZES.xLarge}
        color={focused ? COLORS.primary : COLORS.gray}
      />
      {cartItemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItemCount}hi</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: 'bold',
  },
});

export default CartTabIcon;
