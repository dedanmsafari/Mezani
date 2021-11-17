import React, { useContext } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { MenuItems } from "../../../components/MenuItems/menuItems.component";
import { OrderButton } from "../components/restaurant-list-styles";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantsDetailsScreen = ({ route: { params }, navigation }) => {
  const { restaurant } = params;
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuItems />
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </>
  );
};
