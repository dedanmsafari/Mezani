import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/Text/text.component";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const FavouritesView = styled.View`
  padding: 10px;
  align-items: center;
  align-self: center;
  text-align: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return !favourites.length ? (
    <FavouritesView>
      <Spacer>
        <Text variant="error">
          No available favourites. Please add some restaurants to your
          favourites
        </Text>
      </Spacer>
    </FavouritesView>
  ) : (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("restaurantDetails", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
