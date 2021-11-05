import React, { createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);

  const addFavourite = (favourite) => {
    setFavourites([...favourites, favourite]);
  };

  const removeFavourite = (favourite) => {
    setFavourites(favourites.filter((f) => f.placeId !== favourite.placeId));
  };

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
