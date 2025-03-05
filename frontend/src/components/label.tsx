import { ReactNode } from "react";
import { cn } from "../lib/utils";

const Lable = ({
  name,
  label,
  labelStyles,
  children,
}: {
  name?: string;
  label?: string;
  labelStyles?: string;
  children?: ReactNode;
}) => {
  return (
    <label htmlFor={name} className={cn(`block tracking-wide`, labelStyles)}>
      {label ? label : children}
    </label>
  );
};
export default Lable;
