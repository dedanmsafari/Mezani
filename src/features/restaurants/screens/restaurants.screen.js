import React from "react";

import styled from "styled-components/native";
import Search from "../../../components/Search/search";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StatusBar, FlatList } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-Top:${StatusBar.currentHeight}px`};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Search placeHolder="Search" />
      </SearchView>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};
