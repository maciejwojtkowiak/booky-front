import { useMsal } from "@azure/msal-react";

import { authorities } from "../../../configs/authConfig";

import AuthorizationChoiceItem from "./AuthorizationChoiceItem";
import AuthorizationChoiceLayout from "./AuthorizationChoiceLayout";

const AuthorizationChoiceMenu = (): JSX.Element => {
  const { instance } = useMsal();
  const onSignInHandler = async (): Promise<void> => {
    void instance.loginPopup({
      authority: authorities.SignIn,
      scopes: [],
    });
  };

  const onRegisterHandler = async (): Promise<void> => {
    void instance.acquireTokenRedirect({
      authority: authorities.SignUp,
      scopes: [],
    });
  };

  return (
    <AuthorizationChoiceLayout>
      <div>
        <ul id="authorization-choice" className="list-none grid gap-8 ">
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
    </AuthorizationChoiceLayout>
  );
};

export default AuthorizationChoiceMenu;
