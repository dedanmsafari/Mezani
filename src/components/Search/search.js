import * as React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/location.context";

const SearchView = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Search = ({ placeHolder }) => {
  const { search, keyword } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);


  return (
    <SearchView>
      <Searchbar
        placeholder={placeHolder}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        value={searchKeyword}
      />
    </SearchView>
  );
};

export default Search;
