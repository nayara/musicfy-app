import Button from "../../../components/atoms/Button";
import * as Style from "./LoginButton.styles";

const handleLogin = () => {
  alert("to be implemented");
};

const LoginButton = () => {
  return (
    <Button onClick={handleLogin}>
      <Style.Label>Login</Style.Label>
    </Button>
  );
};

export default LoginButton;
