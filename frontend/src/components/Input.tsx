import React, { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      {...props}
      className={cn(
        "w-full dark:bg-slate-950 bg-slate-100 border border-slate-500/10 dark:border-slate-400/70 focus-within:dark:border-slate-400 focus-within:border-slate-500 p-2 text-slate-900 dark:text-slate-100   focus:outline-0  focus:ring-0 disabled:bg-slate-900/70 tracking-wide",
        className
      )}
    />
  );
});

Input.displayName = "Input";
export default Input;
