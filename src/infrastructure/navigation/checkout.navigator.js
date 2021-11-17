import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screens";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkoutSuccess.screens";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkoutError.screens";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        headerMode: "none",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CheckoutStack.Screen name="checkout" component={CheckoutScreen} />
      <CheckoutStack.Screen
        name="checkoutSuccess"
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name="checkoutError"
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  );
};
