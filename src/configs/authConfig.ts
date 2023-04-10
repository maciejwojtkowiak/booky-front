import { Configuration } from "@azure/msal-browser";

export const authConfig = {
    MSAL_CONFIG: {
        auth: {
          clientId: "b9cf6f45-8afc-402e-9f03-f4658858f305",
          authority: "https://login.microsoftonline.com/192bc8a9-ed12-4901-901f-dc47c386e6a5",
          redirectUri: "http://localhost:5173/"
        }
    } as Configuration
}