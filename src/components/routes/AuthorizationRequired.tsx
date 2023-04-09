import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

import { PATHS } from "../../configs/paths";

const AuthorizationRequired = () => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />;
};

export default AuthorizationRequired;
