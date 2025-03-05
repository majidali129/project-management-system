import { ReactNode } from "react";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" p-6 md:p-8 space-y-6  bg-white text-slate-900 dark:text-slate-100  dark:bg-slate-900 max-w-md mx-auto w-full">
      {children}
    </div>
  );
};
export default FormWrapper;
