import React from "react";

import styled from "styled-components";
import Search from "../../../components/Search/search";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { StatusBar } from "react-native";

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-Top:${StatusBar.currentHeight}px`};
`;

export const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <SearchView>
        <Search placeHolder="Search" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeAreaView>
  );
};
