import React, { useContext } from "react";

import styled from "styled-components/native";
import Search from "../../../components/Search/search";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingIndicator } from "../../../components/ActivityIndicator/loadingIndicator.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RestaurantScreen = () => {
  const { restaurants, loading } = useContext(RestaurantsContext);
  return (
    <>
      <Search placeHolder="Search location" />
      {loading ? (
        <LoadingContainer>
          <LoadingIndicator />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
