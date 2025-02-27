import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ButtonProps {
  children: ReactNode;
  onclick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({
  type = "button",
  children,
  onclick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={() => onclick?.()}
      disabled={disabled}
      className={cn(
        `bg-amber-600 cursor-pointer px-5 py-2 disabled:cursor-not-allowed disabled:bg-amber-600/80 text-white border-0 focus:outline-0 `,
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
