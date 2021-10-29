import React from "react";
import {
  Address,
  RestaurantCard,
  CardCover,
  Icon,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { Text } from "../../../components/Text/text.component";

export const RestaurantInfoCard = ({ Restaurant = {} }) => {
  const {
    name = "Vegitel",
    address = "57th Street Avenue",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    rating = 4,
    isClosedTemporarily = true,
    isOpenNow = true,
    photos = ["https://picsum.photos/200/300"],
  } = Restaurant;

  const ratingArray = Array.from({ length: Math.floor(rating) });

  console.log(ratingArray);
  return (
    <RestaurantCard>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Temporarily Closed</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};