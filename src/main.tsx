import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MsalProvider } from '@azure/msal-react'
import { authConfig } from './configs/authConfig'
import { PublicClientApplication } from '@azure/msal-browser'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicLayout from './components/routes/PublicLayout'
import Login from './components/authorization/Login'
import AuthorizationRequired from './components/routes/AuthorizationRequired'
import { PATHS } from './configs/paths'
import Home from './components/home/Home'

const msalInstance = new PublicClientApplication(authConfig.MSAL_CONFIG);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [{
      element: <PublicLayout />,
      children: [
        {path: "login", element: <Login /> }
      ]
    }, 
    {
      element: <AuthorizationRequired />,
      children: [{
        path: PATHS.HOME,
        element: <Home />
      }]
    }
  ]
  }
])


root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>,
)
