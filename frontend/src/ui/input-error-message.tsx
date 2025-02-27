import { ReactNode } from "react";

const InputErrorMessage = ({ children }: { children: ReactNode }) => {
  return <span className="!text-red-500 text-sm">{children}</span>;
};
export default InputErrorMessage;
