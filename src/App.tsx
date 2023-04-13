import { PublicClientApplication } from "@azure/msal-browser";
import React from "react";
import { Outlet } from "react-router-dom";
import { authConfig } from "./configs/authConfig";
import { MsalProvider } from "@azure/msal-react";

function App(): JSX.Element {
  const msalInstance = new PublicClientApplication(authConfig.msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <div className="w-screen h-screen">
          <Outlet />
      </div>
    </MsalProvider>
  );
}

export default App;
