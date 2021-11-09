import React, { createContext } from "react";
import { loginRequest } from "./authentication.service";
import * as firebase from "firebase";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(email, password);
      setUser(response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };
  const register = async (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      setUser(response);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  const logout = () => {
    firebase.auth().signOut();
    setUser(null);
    setError(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin: login,
        onRegister: register,
        onLogOut: logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
