import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthorizationChoiceMenu from "./components/authorization/authorizationChoice/AuthorizationChoiceMenu";
import Home from "./components/home/Home";
import AuthorizationRequired from "./components/routes/AuthorizationRequired";
import PublicLayout from "./components/routes/PublicLayout";
import { PATHS } from "./configs/paths";
import App from "./App";

import "./index.css";

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
          { path: PATHS.AUTHORIZATION, element: <AuthorizationChoiceMenu /> },
        ],
      },
      {
        element: <AuthorizationRequired />,
        children: [{ path: PATHS.HOME, element: <Home /> }],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
