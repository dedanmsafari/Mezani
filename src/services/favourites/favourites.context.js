import React, { createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
  };

  const removeFavourite = (favourite) => {
    setFavourites(favourites.filter((f) => f.placeId !== favourite.placeId));
  };

  const storeFavourites = async () => {
    try {
      const favouritesStorage = JSON.stringify(favourites);
      await AsyncStorage.setItem("favourites", favouritesStorage);
    } catch (e) {
      console.log("An Error Occured while saving Favourites", e);
    }
  };

  const retrieveFavourites = async () => {
    try {
      const favouriteItems = await AsyncStorage.getItem("favourites");
      if (favouriteItems !== null) {
        const foundfavourites = JSON.parse(favouriteItems);
        return setFavourites(foundfavourites);
      }
      return null;
    } catch (e) {
      console.log("An Error Occured while retrieving  Favourites", e);
    }
  };
  useEffect(() => {
    retrieveFavourites();
  }, []);

  useEffect(() => {
    storeFavourites(favourites);
  }, [favourites]);
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
