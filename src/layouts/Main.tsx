import { FC, ReactNode } from "react";

type TMainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default MainLayout;
