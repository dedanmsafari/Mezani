import * as React from "react";
import { Searchbar } from "react-native-paper";

const Search = ({ placeHolder }) => {
  const [search, setSearch] = React.useState("");

  return (
    <Searchbar
      placeholder={placeHolder}
      onChangeText={(text) => setSearch(text)}
      value={search}
    />
  );
};

export default Search;
