import { FC, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { defaultTheme } from "../themes/default.theme";

type TThemeProvider = {
  children: ReactNode;
};

const ThemeProvider: FC<TThemeProvider> = ({ children }) => {
  return (
    <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
