// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
import * as firebase from "firebase";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyALgkdZ_lFsTAz8TF4GGteZB92Ya59KkXE",
  authDomain: "mezani-64ebd.firebaseapp.com",
  projectId: "mezani-64ebd",
  storageBucket: "mezani-64ebd.appspot.com",
  messagingSenderId: "658798873742",
  appId: "1:658798873742:web:c010d444fbcf3a94a04ddf",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
