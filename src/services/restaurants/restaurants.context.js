import React, { useEffect, useMemo, useState, createContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = async () => {
    try {
      setLoading(true);
      await setTimeout(async () => {
        const response = await restaurantsRequest();
        setRestaurants(restaurantsTransform(response));
        setLoading(false);
      }, 2000);
    
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const contextValue = useMemo(
    () => ({
      restaurants,
      loading,
      error,
      retrieveRestaurants,
    }),
    [restaurants, loading, error]
  );

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
