import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "../../../utils/safeArea.util.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../components/Text/text.component";
import { Spacer } from "../../../components/Spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[4]};
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = React.useState(null);

  const getProfilePicture = async (currentUser) => {
    try {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      if (photoUri !== null) {
        // We have data!!
        setPhoto(photoUri);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
  //only accepts one argument unlike ueseeffect from react,diverged from original
  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeAreaView>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="Favourite places"
          left={(props) => <List.Icon {...props} color="red" icon="heart" />}
          onPress={() => {
            navigation.navigate("Favourites");
          }}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="blue" icon="logout" />}
          onPress={onLogOut}
        />
      </List.Section>
    </SafeAreaView>
  );
};
