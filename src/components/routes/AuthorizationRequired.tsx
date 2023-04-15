import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

import { PATHS } from "../../configs/paths";

const AuthorizationRequired = (): JSX.Element => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.AUTHORIZATION} />;
};

export default AuthorizationRequired;
