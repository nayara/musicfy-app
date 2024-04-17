import { FC } from "react";
import * as Style from "./Logo.styles";
import { useNavigate } from "react-router-dom";
import { rootPath } from "../../../routes";
import Button from "../../atoms/Button";

const Logo: FC = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(rootPath)}>
      <Style.Logo>MusicFy</Style.Logo>
    </Button>
  );
};

export default Logo;
