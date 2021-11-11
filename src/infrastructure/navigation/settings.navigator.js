import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
// import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { FavouritesNavigator } from "./favourites.navigator";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: "Screen",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="camera"
        component={CameraScreen}
      />
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Favourites"
        component={FavouritesNavigator}
      />
    </SettingsStack.Navigator>
  );
};
