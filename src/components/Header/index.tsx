import { FC } from "react";
import * as Style from "./Header.styles";
import Logo from "../Logo";

const Header: FC = () => {
  return (
    <Style.Container>
      <Logo />
    </Style.Container>
  );
};

export default Header;
