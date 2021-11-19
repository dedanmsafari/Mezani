import React, { useState } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

export const MenuItems = () => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView>
      <List.Section title=" Menu ">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Toast Sandwitch" />
          <List.Item title="Milk and Cereals" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
        >
          <List.Item title="Rice and Beans" />
          <List.Item title="Orange Blend Juice" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Brocolli and Spinatch" />
          <List.Item title="Chicken soup" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="Fresh Mango Juice" />
          <List.Item title="Red Wine" />
        </List.Accordion>
        <Divider />
      </List.Section>
    </ScrollView>
  );
};
