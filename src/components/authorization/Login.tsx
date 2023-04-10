import React from "react";
import MicrosoftSignIn from "../../assets/microsoft-signin.svg";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";

const Login = (): JSX.Element => {
  const { instance } = useMsal();

  const microsoftLoginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("HI");
    instance.loginPopup();
  }

  return (<div className="text-3xl font-bold underline">
    <form className="text-3xl font-bold underline text-center" id="login">
      <ul>
        <li>
          <input></input>
        </li>
        <li>
          <input></input>
        </li>
        <li>
          <input></input>
        </li>
        <button onClick={(event) => microsoftLoginHandler(event)} />
      </ul>
    </form>
  </div>
  )
  
}

export default Login;
