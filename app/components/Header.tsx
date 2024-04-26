import { FC } from "react";
import NavBar from "./Nav-bar";

const Header: FC = (): JSX.Element => (
  <div className="rounded-x1 relative">
    <header className="p-6 mx-auto bg-purpleCustom shadow-lg flex items-center">
      <NavBar />
    </header>
  </div>
);

export default Header;
