//http urls dont work on android must use liveHost to work

const liveHost = "https://us-central1-mezani-64ebd.cloudfunctions.net";
const localHost = "http://localhost:5001/mezani-64ebd/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = liveHost;
// if on IOS USE export const host = isDevelopment ? localHost : liveHost;
