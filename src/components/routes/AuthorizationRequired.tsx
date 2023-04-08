import { useIsAuthenticated } from "@azure/msal-react"
import { PATHS } from "../../configs/paths";
import { Navigate, Outlet } from "react-router-dom";


const AuthorizationRequired = () => {
    const isAuthenticated = useIsAuthenticated();
    return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
}

export default AuthorizationRequired