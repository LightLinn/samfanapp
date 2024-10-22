import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCartItemCount, addToCart, updateCartItem, deleteCartItem, clearCart } from '../api/cartApi';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetchCartItemCount();
  }, []);

  const fetchCartItemCount = async () => {
    try {
      const { count } = await getCartItemCount();
      setCartItemCount(count);
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

  const addItemToCart = async (productId, quantity, note) => {
    try {
      const { count } = await addToCart(productId, quantity, note);
      setCartItemCount(count);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const updateItemInCart = async (cartItemId, quantity, note) => {
    try {
      const { count } = await updateCartItem(cartItemId, quantity, note);
      setCartItemCount(count);
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  const removeItemFromCart = async (cartItemId) => {
    try {
      const response = await deleteCartItem(cartItemId);
      if (response && response.count !== undefined) {
        setCartItemCount(response.count);
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const clearAllCart = async () => {
    try {
      const { count } = await clearCart();
      setCartItemCount(count);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItemCount,
      addItemToCart,
      updateItemInCart,
      removeItemFromCart,
      clearAllCart,
      fetchCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Statistic
