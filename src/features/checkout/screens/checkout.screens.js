import React, { useContext, useState } from "react";
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
  PaymentProcessing,
} from "../components/checkout.styles";
import { payRequest } from "../../../services/checkout/checkout.services";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

import { Spacer } from "../../../components/Spacer/spacer.component";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("checkoutError", {
        error: "Please enter a valid card",
      });
      return;
    }

    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("checkoutSuccess");
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate("checkoutError", {
          error: e,
        });
      });
  };

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
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="large">
            <Text>Your Orders</Text>
          </Spacer>

          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - ${price / 100}`}
                />
              );
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
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("checkoutError", {
                  error: "Something went wrong processing your Card",
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xl" />
        <PayButton disabled={isLoading} icon="cash-usd" onPress={onPay}>
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton disabled={isLoading} icon="cart-off" onPress={clearCart}>
            Clear Cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};
