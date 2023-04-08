import { Configuration } from "@azure/msal-browser";

export const authConfig = {
    MSAL_CONFIG: {
        auth: {
          clientId: "b9cf6f45-8afc-402e-9f03-f4658858f305"
        },
        cache: {
          cacheLocation: "localStorage"
        }
    } as Configuration
}