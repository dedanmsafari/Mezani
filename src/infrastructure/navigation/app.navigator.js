import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeAreaView } from "../../utils/safeArea.util.component";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screens";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { onLogOut } = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <Text>Settings!</Text>
      <Button title="LogOut" onPress={() => onLogOut()} />
    </SafeAreaView>
  );
}

const TAB_ICON = {
  Restaurants: "restaurant",
  Maps: "map",
  Settings: "settings-outline",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    // tabBarIcon: tabBarIcon(route),
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
