import { FC, ReactNode } from "react";
import Header from "../components/Header";

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
