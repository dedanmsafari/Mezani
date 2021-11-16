import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setSum(total);
  }, [cart]);

  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  // useEffect(() => {
  //   if (user) {
  //     const cart = localStorage.getItem(`cart_${user.id}`);
  //     if (cart) {
  //       setCart(JSON.parse(cart));
  //     }
  //   }
  // }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
  //   }
  // }, [cart, user]);

  return (
    <CartContext.Provider
      value={{ addToCart, clearCart: clear, restaurant, cart, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};
