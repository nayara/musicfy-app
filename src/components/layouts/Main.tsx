import { FC, ReactNode } from "react";
import Header from "../molecules/Header";

type TMainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<TMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
