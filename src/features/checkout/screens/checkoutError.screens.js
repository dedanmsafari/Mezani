import React from "react";
import { SafeAreaView } from "../../../utils/safeArea.util.component";
import { Text } from "../../../components/Text/text.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/Spacer/spacer.component";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="large" />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeAreaView>
  );
};
