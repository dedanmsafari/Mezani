import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";
export const MapCallout = ({ restaurant, isMap }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
