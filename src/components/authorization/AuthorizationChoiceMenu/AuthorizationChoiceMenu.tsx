import { useMsal } from "@azure/msal-react";

import { authorities } from "../../../configs/authConfig";

import AuthorizationChoiceItem from "./AuthorizationChoiceItem";

const AuthorizationChoiceMenu = (): JSX.Element => {
  const { instance } = useMsal();
  const onSignInHandler = async (): Promise<void> => {
    void instance.loginPopup();
  };

  const onRegisterHandler = async (): Promise<void> => {
    void instance.acquireTokenRedirect({
      authority: authorities.SignUp,
      scopes: [],
    });
  };

  return (
    <div>
      <ul id="authorization-choide">
        <AuthorizationChoiceItem
          onClickHandler={onSignInHandler}
          title="Sign in"
        />
        <AuthorizationChoiceItem
          onClickHandler={onRegisterHandler}
          title="Register"
        />
      </ul>
    </div>
  );
};

export default AuthorizationChoiceMenu;
