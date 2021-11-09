// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import * as firebase from "firebase/app";
import * as firebase from "firebase";
// const auth = getAuth();
export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
