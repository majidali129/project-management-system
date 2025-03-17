import { useUser } from "@/feature/authentication/use-user";
import { Bell, Moon, Search, SunMoon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const { session, isAdmin } = useUser();
  const handleThemeToggle = () => setIsLightMode((prevTheme) => !prevTheme);
  return (
    <header className="dark:border-b shadow z-20 border-b-slate-500/50 bg-slate-50 dark:bg-slate-900 flex justify-end md:justify-between items-center px-4 md:px-7">
      <form className="transition-all md:min-w-xs lg:min-w-md hidden  duration-200 ease-in-out focus-within:ring py-1 px-2 not-dark:ring-1  focus-within:ring-blue-400 rounded-xs w-fit  dark:bg-slate-800 bg-slate-200 md:flex items-center gap-1.5 group">
        <Search className="text-slate-600 dark:text-slate-200/80 dark:group-focus-within:text-slate-200" />
        <input type="text" name="query" id="query" placeholder="Search..." className=" dark:text-slate-100 text-slate-900 w-full focus:outline-0 py-1 not-dark:placeholder:text-slate-600  focus:border-0 focus:ring-0  " />
      </form>

      <div className="flex items-center space-x-2.5 ">
        <div
          className="bg-slate-300/80 dark:bg-slate-950 p-2 ring-slate-400 text-slate-800 dark:text-slate-50  dark:ring-slate-800 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:ring-1 dark:hover:ring-2"
          role="button"
          onClick={handleThemeToggle}
        >
          {isLightMode ? <Moon className="w-5 h-5" /> : <SunMoon className="w-5 h-5" />}
        </div>
        <div className="relative">
          <button className="text-gray-400 cursor-pointer p-1.5 dark:hover:text-slate-50 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
        </div>

        <div className="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-8 w-8 rounded-full border-2 border-blue-500" />
          <div className="ml-2 hidden sm:block">
            <p className="text-sm font-medium not-dark:text-slate-800">{session?.data.userName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{isAdmin ? "Admin" : "Developer"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
