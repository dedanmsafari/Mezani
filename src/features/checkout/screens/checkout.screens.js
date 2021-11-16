import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../../components/Text/text.component";
import { SafeAreaView } from "../../../utils/safeArea.util.component";
import { CreditCardInput } from "../components/credit-card.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { Spacer } from "../../../components/Spacer/spacer.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  if (cart.length === 0 || !restaurant) {
    return (
      <SafeAreaView>
        <CartIconContainer>
          <CartIcon icon="cart-off" />

          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="large">
            <Text>Your Orders</Text>
          </Spacer>

          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total:{sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <Spacer position="top" size="xl" />
        <PayButton icon="cash-usd">Pay</PayButton>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};
