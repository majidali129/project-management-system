import { ReactNode } from "react";
import { cn } from "../lib/utils";

const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        `inline-block  px-3 py-1 bg-green-500 text-green-50 text-xs font-medium rounded-full`,
        className
      )}
    >
      {children}
    </span>
  );
};
export default Badge;
