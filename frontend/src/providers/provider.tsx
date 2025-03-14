import { ReactNode } from "react";
import { Toaster } from "sonner";
import ReactQueryClientProvider from "./react-query-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      {children}
      <Toaster />
    </ReactQueryClientProvider>
  );
};
export default Providers;
