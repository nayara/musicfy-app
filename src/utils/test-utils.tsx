import { RenderOptions, render } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";
import { Providers } from "src/providers";

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return <Providers>{children}</Providers>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
