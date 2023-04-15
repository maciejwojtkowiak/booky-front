import React from "react";
import { Outlet } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { authConfig } from "./configs/authConfig";

function App(): JSX.Element {
  const msalInstance = new PublicClientApplication(authConfig);
  console.log(msalInstance);
  return (
    <MsalProvider instance={msalInstance}>
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </MsalProvider>
  );
}

export default App;
