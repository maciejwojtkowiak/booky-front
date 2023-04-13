import React from "react";
import { useMsal } from "@azure/msal-react";

import MicrosoftSignIn from "../../assets/microsoft-signin.svg";

import AuthorizationLayout from "./AuthorizationLayout";

const Login = (): JSX.Element => {
  const { instance } = useMsal();
  const microsoftLoginHandler = async (
    event: React.MouseEvent<HTMLInputElement>,
  ): Promise<void> => {
    event.preventDefault();
    try {
      await instance.loginPopup();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthorizationLayout>
      <div className="text-3xl font-bold underline h-full w-full">
        <form
          className="text-3xl font-bold underline text-center grid h-full w-full place-items-center"
          id="login"
        >
          <ul>
            <li>
              <input
                type="image"
                src={MicrosoftSignIn}
                onClick={(event) => {
                  void microsoftLoginHandler(event);
                }}
              />
            </li>
          </ul>
        </form>
      </div>
    </AuthorizationLayout>
  );
};

export default Login;
