import React, { createContext } from "react";
import { loginRequest } from "./authentication.service";
import * as firebase from "firebase";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

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

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        onLogin: login,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
