import { useIsAuthenticated } from "@azure/msal-react"
import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "../../configs/paths";

const AuthorizationRequired = () => {
    const isAuthenticated = useIsAuthenticated();
    return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
}

export default AuthorizationRequired