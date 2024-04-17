import { FC } from "react";
import * as Style from "./Logo.styles";
import { useNavigate } from "react-router-dom";
import { rootPath } from "../../routes";

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <Style.Button onClick={() => navigate(rootPath)}>
      <Style.Logo>MusicFy</Style.Logo>
    </Style.Button>
  );
};

export default Logo;
