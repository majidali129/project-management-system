import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
  className?: string;
};
const List = ({ children, className }: ListProps) => {
  return <ul className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`, className)}>{children}</ul>;
};
export default List;
