import { LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { adminLinks, userLinks } from "../data";

const Sidebar = () => {
  const [role, setRole] = useState<"user" | "admin">("admin");

  const activeLinks = role === "admin" ? adminLinks : userLinks;
  return (
    <aside className="h-ful py-1.5 md:pb-2 bg-slate-900 relative grid grid-rows-[80px_1fr_50px] md:grid-rows-[80px_1fr_45px] *:px-3.5 border-r border-r-slate-500/50">
      <NavLink
        to={"/"}
        className="text-2xl font-bold max-sm:max-w-[76px] flex items-center justify-center gap-1.5"
      >
        <h3 className="text-2xl  font-bold hidden md:block bg-gradient-to-r py-1.5 px-3 rounded  from-blue-800 to-amber-800">
          ProjectHub
        </h3>
        <h3 className="text-2xl font-bold md:hidden bg-gradient-to-r p-1 rounded  from-amber-800 to-blue-800">
          PH
        </h3>
      </NavLink>
      <ul className="flex flex-col items-start gap-3 py-4">
        {activeLinks.map((link) => (
          <NavLink
            end
            key={link.label}
            to={link.path}
            className={({ isActive }) =>
              `bg-slate-800  py-2 text-lg px-4 flex items-center gap-3 max-sm:py-4  md:w-full rounded-xs  ${
                isActive
                  ? "text-slate-50 !bg-gradient-to-r !from-blue-200/50 !to-amber-300/50"
                  : ""
              }`
            }
          >
            <span>{<link.icon className="w-4 h-4" />}</span>
            <span className="hidden md:block">{link.label}</span>{" "}
          </NavLink>
        ))}
      </ul>

      <div className=" max-sm:max-w-[76px]">
        <button className=" bg-slate-800 w-full flex items-center max-sm:justify-center py-4 md:py-2 px-4  hover:!bg-gradient-to-r hover:!from-blue-200/50 hover:!to-amber-300/50">
          <LogOut className="h-5 w-5 " />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
