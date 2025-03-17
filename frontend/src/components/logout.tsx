import { useLogout } from "@/feature/authentication/use-logout";
import { LogOut } from "lucide-react";

const Logout = () => {
  const { logout, loggingOut } = useLogout();
  return (
    <div className=" max-sm:max-w-[76px]">
      <button
        disabled={loggingOut}
        onClick={() => logout()}
        className=" bg-slate-800 w-full flex items-center max-sm:justify-center py-4 md:py-2 px-4  hover:!bg-gradient-to-r hover:!from-blue-200/50 hover:!to-amber-300/50 cursor-pointer disabled:cursor-not-allowed"
      >
        <LogOut className="h-5 w-5 " />
        <span className="hidden md:block">Logout</span>
      </button>
    </div>
  );
};
export default Logout;
