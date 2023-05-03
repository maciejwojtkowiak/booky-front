import React from "react";
import { Outlet } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import Navbar from "./components/navbar/Navbar";
import { authConfig } from "./configs/authConfig";

function App(): JSX.Element {
  const msalInstance = new PublicClientApplication(authConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <div className="w-screen">
        <div className="h-screen grid grid-cols-12 grid-rows-2">
          <Navbar />
          <div className="row-start-2 row-end-3">
            <Outlet />
          </div>
        </div>
      </div>
    </MsalProvider>
  );
}

export default App;
