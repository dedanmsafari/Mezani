import React, { useContext, useState } from "react";

import styled from "styled-components/native";
import { Search } from "../../../components/Search/search";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Text/text.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";
import { FavouritesBar } from "../../../components/Favourites/favouritesBar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";
import { FadeInView } from "../../../animations/fade.animation";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [toggle, setToggle] = useState(false);
  const hasError = !!error || !!locationError;
  return (
    <>
      <Search
        placeHolder="Search location"
        isFavouritesToggled={toggle}
        onFavouritesToggled={() => setToggle(!toggle)}
      />
      {toggle && (
        <FavouritesBar favourites={favourites} navigation={navigation} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">
            Something went wrong retrieving information
          </Text>
        </Spacer>
      )}
      {loading ? (
        <LoadingContainer>
          <LoadingIndicator />
        </LoadingContainer>
      ) : (
        !hasError && (
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("restaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <FadeInView>
                    <Spacer position="bottom" size="large">
                      <RestaurantInfoCard restaurant={item} />
                    </Spacer>
                  </FadeInView>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )
      )}
    </>
  );
};
