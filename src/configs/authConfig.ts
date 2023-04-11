import { type Configuration } from "@azure/msal-browser";

export const authorities = {
  SignUp:
    "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Booky_SignUp_SignIn",
  SignIn:
    "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Booky_SignUp_SignUp",
};

export const authConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_CLIENT_ID,
    authority:
      "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Booky_SignUp_SignIn",
    knownAuthorities: ["bookyg2c.b2clogin.com"],
  },
  cache: {
    cacheLocation: "localStorage",
  },
};
