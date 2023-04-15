import { type Configuration } from "@azure/msal-browser";

export const authorities = {
  SignUp:
    "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Booky_Sign_Up",
  SignIn:
    "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Sign_In",
};

export const authConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_CLIENT_ID,
    authority: authorities.SignIn,
    knownAuthorities: ["bookyg2c.b2clogin.com"],
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
  },
};
