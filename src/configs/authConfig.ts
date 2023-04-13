import { type Configuration } from "@azure/msal-browser";

export const authorities = {
  SignUp: "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_Booky_Sign_Up",
  SignIn: "https://bookyg2c.b2clogin.com/BookyG2C.onmicrosoft.com/B2C_1_SignIn",
};

export const authConfig = {
  msalConfig: {
    auth: {
      clientId: import.meta.env.VITE_CLIENT_ID,
      authority: authorities.SignUp,
      knownAuthorities: ["bookyg2c.b2clogin.com"],
      redirectUri: "/"
    },
    cache: {
      cacheLocation: "localStorage",
    },
  } as Configuration,
};
