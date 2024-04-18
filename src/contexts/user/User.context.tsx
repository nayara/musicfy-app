import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";

type TUser = {
  imgUrl: string;
  fullName: string;
  firstName: string;
  email: string;
};

type IDecodedToken = {
  name: string;
  given_name: string;
  email: string;
  picture: string;
};

export type TUserContext = {
  me?: TUser;
  onSuccessLogin: (userToken: string) => void;
  onLogout: () => void;
};

const UserContext = createContext<TUserContext>({} as TUserContext);

type Props = {
  children: ReactNode;
};

const LOCAL_STORAGE_KEY = "auth-token";

const UserContextProvider: FC<Props> = ({ children }) => {
  const [me, setMe] = useState<TUser>();

  const setMeFromToken = (tokenJwt: string) => {
    const me = jwtDecode<IDecodedToken>(tokenJwt);

    setMe({
      fullName: me.name,
      firstName: me.given_name,
      email: me.email,
      imgUrl: me.picture,
    });
  };

  const onSuccessLogin = (userToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, userToken);
    setMeFromToken(userToken);
  };

  const onLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setMe(undefined);
  };

  useEffect(() => {
    const userJwt = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!userJwt) return;

    setMeFromToken(userJwt);
  }, []);

  return (
    <UserContext.Provider
      value={{
        me,
        onSuccessLogin,
        onLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { useUserContext, UserContext, UserContextProvider };
