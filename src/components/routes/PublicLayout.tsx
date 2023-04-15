import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";

import { PATHS } from "../../configs/paths";

const PublicLayout = (): JSX.Element => {
  const isAuthenticated = useIsAuthenticated();
  return !isAuthenticated ? <Outlet /> : <Navigate to={PATHS.HOME} />;
};

export default PublicLayout;
