import { useMsal } from "@azure/msal-react";
import React from "react";
import { Outlet } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default App;
