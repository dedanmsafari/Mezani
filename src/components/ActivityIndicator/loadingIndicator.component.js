import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoadingIndicator = () => (
  <ActivityIndicator animating={true} size="large" color={Colors.red800} />
);
