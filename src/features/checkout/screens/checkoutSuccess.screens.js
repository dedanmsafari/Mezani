import React from "react";
import { SafeAreaView } from "../../../utils/safeArea.util.component";
import { Text } from "../../../components/Text/text.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { Spacer } from "../../../components/Spacer/spacer.component";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Spacer position="top" size="large" />
        <Text variant="label">Success</Text>
      </CartIconContainer>
    </SafeAreaView>
  );
};
