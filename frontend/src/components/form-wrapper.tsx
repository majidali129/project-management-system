import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const FormWrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn(`p-6 md:p-8 space-y-6  text-text  bg-white dark:text-slate-100  dark:bg-slate-900 max-w-md  mx-auto w-full`, className)}>{children}</div>;
};
export default FormWrapper;
