import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeProvider from "./Theme.provider";

type TProviderProps = {
  children: React.ReactNode;
};

export const ReactQueryProvider = ({ children }: TProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
