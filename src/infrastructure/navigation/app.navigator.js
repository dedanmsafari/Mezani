import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";

import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from "../../features/map/screens/map.screens";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { CartContextProvider } from "../../services/cart/cart.context";
import { colors } from "../theme/colors";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutNavigator } from "./checkout.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Maps: "map",
  Checkout: "cart",
  Settings: "settings-outline",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    // tabBarIcon: tabBarIcon(route),
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.brand.muted,
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen name="Maps" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
