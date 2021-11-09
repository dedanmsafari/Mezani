import React, { createContext, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);
  const { user } = useContext(AuthenticationContext);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
  };

  const removeFavourite = (favourite) => {
    setFavourites(favourites.filter((f) => f.placeId !== favourite.placeId));
  };

  const storeFavourites = async (value, uid) => {
    try {
      const favouritesStorage = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, favouritesStorage);
    } catch (e) {
      console.log("An Error Occured while saving Favourites", e);
    }
  };

  const retrieveFavourites = async (uid) => {
    try {
      const favouriteItems = await AsyncStorage.getItem(`@favourites-${uid}`);
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
    if (user && user.uid) {
      retrieveFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      storeFavourites(favourites, user.uid);
    }
  }, [favourites, user]);
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
