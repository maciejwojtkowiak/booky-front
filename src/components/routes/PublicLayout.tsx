import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom"
import { PATHS } from "../../configs/paths";

const PublicLayout = () => {
    const isAuthenticated = useIsAuthenticated();
    return !isAuthenticated ? <Outlet /> : <Navigate to={PATHS.HOME} />
}

export default PublicLayout