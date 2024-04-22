import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Verifica se o produto já está no carrinho
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Se o produto já estiver no carrinho, aumenta a quantidade em 1
      const updatedItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      // Se o produto ainda não estiver no carrinho, adiciona-o com quantidade 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Remove o produto do carrinho
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
  };

  const increaseQuantity = (productId) => {
    // Aumenta a quantidade de um produto no carrinho
    const updatedItems = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const decreaseQuantity = (productId) => {
    // Diminui a quantidade de um produto no carrinho, desde que a quantidade seja maior que 1
    const updatedItems = cartItems.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
