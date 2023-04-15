import { type PropsWithChildren } from "react";

interface AuthorizationLayoutProps extends PropsWithChildren {}

const AuthorizationLayout = ({
  children,
}: AuthorizationLayoutProps): JSX.Element => {
  return (
    <div className="h-full w-full bg-authorization bg-no-repeat bg-cover bg-center bg-fixed grid place-items-center">
      <ul className="flex flex-col gap-8 justify-center items-center bg-white h-1/3 w-1/6 drop-shadow rounded-lg">
        <li>
          <h1 className="text-7xl font-pacifico mb-12">Booky</h1>
        </li>
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default AuthorizationLayout;
