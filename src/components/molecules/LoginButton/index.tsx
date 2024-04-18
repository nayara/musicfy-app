import { useNavigate } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import * as Style from "./LoginButton.styles";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Button onClick={handleLogin}>
      <Style.Label>Login</Style.Label>
    </Button>
  );
};

export default LoginButton;
