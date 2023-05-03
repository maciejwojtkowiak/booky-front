import { AiFillHome } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import { colorConfig } from "../../configs/colorConfig";

import NavbarItem from "./NavbarItem";

const Navbar = (): JSX.Element => {
  return (
    <div className="justify-self-center bg-white drop-shadow-xl rounded-b-full w-full col-start-6 col-end-8 px-4 py-2">
      <ul className="flex justify-center gap-16">
        <NavbarItem>
          <AiFillHome color={colorConfig.navbarColors.homeColor} size={30} />
        </NavbarItem>
        <NavbarItem>
          <GoPlus color={colorConfig.navbarColors.addBookIconColor} size={30} />
        </NavbarItem>
      </ul>
    </div>
  );
};

export default Navbar;
