import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../Spacer/spacer.component";
import { Card } from "react-native-paper";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info.component";
import { Text } from "../Text/text.component";
const FavouritesView = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, navigation }) => {
  if (!favourites.length) {
    return (
      <FavouritesView>
        <Spacer position="left" size="large">
          <Text variant="error">
            No available favourites. Click the heart icons to add.
          </Text>
        </Spacer>
      </FavouritesView>
    );
  }

  return (
    <FavouritesView elevation={3}>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((favourite) => {
          const key = favourite.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("restaurantDetails", {
                    restaurant: favourite,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={favourite} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesView>
  );
};
