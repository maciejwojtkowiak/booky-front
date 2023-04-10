import React from "react";
import MicrosoftSignIn from "../../assets/microsoft-signin.svg";
import { useMsal  } from "@azure/msal-react";

const Login = (): JSX.Element => {
  const { instance } = useMsal();

  const microsoftLoginHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      instance.loginPopup();
    } catch (error) {
      console.log(error);
    }

  }
  console.log(import.meta.env.VITE_CLIENT_ID);
  return (<div className="text-3xl font-bold underline h-full w-full">
    <form className="text-3xl font-bold underline text-center grid h-full w-full place-items-center" id="login">
      <ul>
        <li><input type="image" src={MicrosoftSignIn} onClick={(event) => microsoftLoginHandler(event)} /></li>
      </ul>
    </form>
  </div>
  )
  
}

export default Login;
