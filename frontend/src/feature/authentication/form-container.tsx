import { ReactNode } from "react";

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" min-h-screen flex items-center justify-center max-sm:px-4">
      {children}
    </div>
  );
};

export default FormContainer;
