import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      let newCart;
      
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('cart', JSON.stringify(newCart));
      Cookies.set('cartCount', String(newCart.length));
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(newCart));
      Cookies.set('cartCount', String(newCart.length));
      return newCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart => {
      const newCart = prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};