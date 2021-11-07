import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeAreaView } from "../../utils/safeArea.util.component";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screens";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings!</Text>
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
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
