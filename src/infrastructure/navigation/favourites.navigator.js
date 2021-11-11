import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SafeAreaView } from "../../utils/safeArea.util.component";
import { RestaurantsDetailsScreen } from "../../features/restaurants/screens/restaurantsDetails.screen";

const FavouritesStack = createStackNavigator();

export const FavouritesNavigator = () => {
  return (
    <SafeAreaView>
      <FavouritesStack.Navigator
        screenOptions={{
          // headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <FavouritesStack.Screen
          name="favourites"
          component={FavouritesScreen}
        />
        <FavouritesStack.Screen
          name="restaurantDetails"
          component={RestaurantsDetailsScreen}
        />
      </FavouritesStack.Navigator>
    </SafeAreaView>
  );
};
