import { Platform } from "react-native";

//http urls dont work on android must use liveHost to work

const liveHost = "https://us-central1-mezani-64ebd.cloudfunctions.net";
const localHost = "http://localhost:5001/mezani-64ebd/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
// export const host = liveHost;
export const isAndroid = Platform.OS === "android";

export const host = !isDevelopment || isAndroid ? liveHost : localHost;

export const isMock = false;
