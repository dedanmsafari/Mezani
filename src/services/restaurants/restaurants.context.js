import React, { useEffect, useState, createContext, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = async (loc) => {
    try {
      setLoading(true);
      setRestaurants([]);
      const response = await restaurantsRequest(loc);
      const result = restaurantsTransform(response);
      setRestaurants(result);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      // console.log(location);
      const locationString = `${location.lat},${location.lng}`;

      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
