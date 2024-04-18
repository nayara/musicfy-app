import React from "react";
import ThemeProvider from "./Theme.provider";
import { ReactQueryProvider } from "./ReactQuery.provider";
import GoogleOAuthProvider from "./GoogleOAuth.provider";
import { UserContextProvider } from "../contexts/user/User.context";

type TProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: TProvidersProps) => {
  return (
    <GoogleOAuthProvider>
      <ThemeProvider>
        <ReactQueryProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};
