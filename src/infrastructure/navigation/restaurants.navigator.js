import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import { RestaurantsDetailsScreen } from "../../features/restaurants/screens/restaurantsDetails.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="restaurantDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
