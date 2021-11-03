import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { MenuItems } from "../../../components/MenuItems/menuItems.component";
export const RestaurantsDetailsScreen = ({ route: { params }, navigation }) => {
  const { restaurant } = params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <MenuItems />
    </>
  );
};
