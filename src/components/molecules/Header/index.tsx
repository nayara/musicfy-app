import { FC } from "react";
import * as Style from "./Header.styles";
import Logo from "../Logo";
import LoginButton from "../LoginButton";

const Header: FC = () => {
  return (
    <Style.Container>
      <Logo />
      <LoginButton />
    </Style.Container>
  );
};

export default Header;
