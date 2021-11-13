import React, { useState, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San francisco");

  const getLocation = async (searchKeyword) => {
    try {
      const data = await locationRequest(searchKeyword.toLowerCase());
      const locationData = locationTransform(data);
      setError(null);
      setLoading(false);
      setLocation(locationData);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  React.useEffect(() => {
    if (!keyword.length) {
      return;
    }
    getLocation(keyword);
  }, [keyword]);

  const onSearch = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };
  return (
    <LocationContext.Provider
      value={{ location, search: onSearch, loading, error, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
