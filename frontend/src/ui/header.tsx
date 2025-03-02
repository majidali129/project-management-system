import { Bell, Moon, Search, SunMoon } from "lucide-react";
import { useState } from "react";

// const notifications = [
//   { id: 1, message: "New task assigned to you", time: "5 min ago" },
//   {
//     id: 2,
//     message: 'Project "E-commerce App" deadline tomorrow',
//     time: "1 hour ago",
//   },
//   { id: 3, message: "Team meeting at 3:00 PM", time: "2 hours ago" },
// ];
const Header = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const handleThemeToggle = () => setIsLightMode((prevTheme) => !prevTheme);
  return (
    <header className="border-b border-b-slate-500/50 bg-slate-900 flex justify-end md:justify-between items-center px-4 md:px-7">
      <form className="transition-all md:min-w-xs lg:min-w-md hidden  duration-200 ease-in-out focus-within:ring py-1 px-2 focus-within:ring-blue-400 rounded-xs w-fit bg-slate-800 md:flex items-center gap-1.5 group">
        <Search className="text-slate-200/80 group-focus-within:text-slate-200" />
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search..."
          className=" text-slate-100 w-full focus:outline-0 py-1  focus:border-0 focus:ring-0  "
        />
      </form>

      <div className="flex items-center space-x-2.5 ">
        <div
          className="bg-slate-950 p-2  ring-slate-800 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:ring-2"
          role="button"
          onClick={handleThemeToggle}
        >
          {isLightMode ? (
            <Moon className="w-5 h-5" />
          ) : (
            <SunMoon className="w-5 h-5" />
          )}
        </div>
        <div className="relative">
          <button className="text-gray-400 cursor-pointer p-1.5 hover:text-white relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-blue-500"
          />
          <div className="ml-2 hidden sm:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
