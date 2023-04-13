import React from "react";
import { Navigate } from "react-router-dom";

import { PATHS } from "../../configs/paths";

const AuthorizationRequired = () => {
  return <Navigate to={PATHS.AUTHORIZATION} />;
};

export default AuthorizationRequired;
