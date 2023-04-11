import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import AuthorizationChoiceMenu from "./components/authorization/AuthorizationChoiceMenu/AuthorizationChoiceMenu";
import Home from "./components/home/Home";
import AuthorizationRequired from "./components/routes/AuthorizationRequired";
import PublicLayout from "./components/routes/PublicLayout";
import { authConfig } from "./configs/authConfig";
import { PATHS } from "./configs/paths";
import App from "./App";

const msalInstance = new PublicClientApplication(authConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: "/authorization", element: <AuthorizationChoiceMenu /> },
        ],
      },
      {
        element: <AuthorizationRequired />,
        children: [
          {
            path: PATHS.HOME,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>,
);
