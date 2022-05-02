import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PublicRoute: React.FC = ({ children }) => {
  const auth: any = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Navigate to="/" state={{ from: location }} />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
