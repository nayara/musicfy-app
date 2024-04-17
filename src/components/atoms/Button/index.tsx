import { FC, ReactNode } from "react";
import * as Style from "./Button.styles";

type TButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<TButtonProps> = ({ children, onClick }) => {
  return <Style.Button onClick={onClick}>{children}</Style.Button>;
};

export default Button;
