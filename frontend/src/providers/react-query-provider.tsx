import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

const client = new QueryClient({});

interface ReactQueryClientProviderProps {
  children: ReactNode;
}

const ReactQueryClientProvider = ({ children }: ReactQueryClientProviderProps) => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
export default ReactQueryClientProvider;
