import { type PropsWithChildren } from "react";

interface AuthorizationLayoutProps extends PropsWithChildren {}

const AuthorizationLayout = ({
  children,
}: AuthorizationLayoutProps): JSX.Element => {
  return <div className="w-full">{children}</div>;
};

export default AuthorizationLayout;
