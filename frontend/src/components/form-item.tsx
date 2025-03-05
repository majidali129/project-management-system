import { ReactNode } from "react";
import { cn } from "../lib/utils";
import Lable from "./label";

interface FormItemProps {
  label?: string;
  name: string;
  className?: string;
  children: ReactNode;
  labelStyles?: string;
}

const FormItem = ({
  children,
  name,
  label,
  className,
  labelStyles,
}: FormItemProps) => {
  return (
    <div
      className={cn(
        `w-full space-y-1 relative  *:text-slate-950 dark:*:text-slate-100`,
        className
      )}
    >
      {label && <Lable name={name} label={label} labelStyles={labelStyles} />}
      {children}
    </div>
  );
};
export default FormItem;

// dark-main-bg =
