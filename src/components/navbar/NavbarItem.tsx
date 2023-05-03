import { type PropsWithChildren } from "react";

export interface NavbarItemProps extends PropsWithChildren {}

const NavbarItem = ({ children }: NavbarItemProps): JSX.Element => {
  return <li className="cursor-pointer">{children}</li>;
};

export default NavbarItem;
