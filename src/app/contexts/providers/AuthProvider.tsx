/* eslint react-hooks/rules-of-hooks: 0 */
import React, { useMemo, useState } from "react";
import AuthContext from "../auth";

const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    () => !!localStorage.getItem("fake-token")
  );

  const logIn = (token: number) => {
    localStorage.setItem("fake-token", JSON.stringify(token));
    setLoggedIn(true);
  };
  const logOut = () => {
    localStorage.removeItem("fake-token");
    setLoggedIn(false);
  };

  const memoContextValue = useMemo(
    () => ({ loggedIn, logIn, logOut }),
    [loggedIn]
  );

  return (
    <AuthContext.Provider value={memoContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
