import { FC, ReactNode } from "react";
import { GoogleOAuthProvider as GoogleOAuthProviderLib } from "@react-oauth/google";

type TGoogleOAuthProvider = {
  children: ReactNode;
};

const GoogleOAuthProvider: FC<TGoogleOAuthProvider> = ({
  children,
}: TGoogleOAuthProvider) => {
  return (
    <GoogleOAuthProviderLib clientId={process.env.GOOGLE_CLIENT_ID || ""}>
      {children}
    </GoogleOAuthProviderLib>
  );
};

export default GoogleOAuthProvider;
