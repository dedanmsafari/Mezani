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

  const saveCart = async (rst, crt, uid) => {
    try {
      await AsyncStorage.setItem(
        `@cart-${uid}`,
        JSON.stringify({ restaurant: rst, cart: crt })
      );
    } catch (error) {
      console.log("error Storing", error);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { restaurant: rst, cart: crt } = JSON.parse(value);
        setRestaurant(rst);
        setCart(crt);
      }
    } catch (error) {
      console.log("error loading", error);
    }
  };
  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadCart(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  return (
    <CartContext.Provider
      value={{ addToCart, clearCart: clear, restaurant, cart, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};
