import React, { useEffect, useState, useRef, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../components/Text/text.component";
import { SafeAreaView } from "../../../utils/safeArea.util.component";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const ProfileSnapArea = styled.TouchableOpacity`
  flex: 1;
`;
export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <SafeAreaView />;
  }

  if (hasPermission === false) {
    return <Text variant="error">No access to camera</Text>;
  }
  return (
    <SafeAreaView>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
        ratio={"16:9"}
      >
        <ProfileSnapArea onPress={snap} />
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text variant="caption"> Flip </Text>
        </TouchableOpacity>
      </ProfileCamera>
    </SafeAreaView>
  );
};
