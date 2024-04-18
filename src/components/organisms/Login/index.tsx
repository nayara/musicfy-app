import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/user/User.context";
import { rootPath } from "../../../routes";

const Login = () => {
  const { me, onSuccessLogin } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!me) return;

    navigate(rootPath);
  }, [me, navigate]);

  return (
    <div>
      {me ? (
        <h1>User already logged... redirecting to home</h1>
      ) : (
        <>
          <h1>Welcome to Musicfy!</h1>
          <GoogleLogin
            onSuccess={({ credential }: CredentialResponse) => {
              if (!credential) return;

              onSuccessLogin(credential);
            }}
            useOneTap
          />
        </>
      )}
    </div>
  );
};

export default Login;
