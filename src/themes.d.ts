import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      terciary: string;
      neutral: {
        black: string;
        white: string;
        grey: string;
      };
    };
  }
}
