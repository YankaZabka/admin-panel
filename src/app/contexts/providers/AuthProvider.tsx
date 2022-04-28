/* eslint react-hooks/rules-of-hooks: 0 */
import React, { useEffect, useState } from "react";
import AuthContext from "../auth";

const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("fake-token")
  );

  useEffect(() => {
    if (localStorage.getItem("fake-token")) {
      setLoggedIn(true);
    }
  }, []);

  const logIn = (token: number) => {
    localStorage.setItem("fake-token", JSON.stringify(token));
    setLoggedIn(true);
  };
  const logOut = () => {
    localStorage.removeItem("fake-token");
    setLoggedIn(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
