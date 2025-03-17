import { useUser } from "@/feature/authentication/use-user";
import { Activity, CheckSquare, FolderKanban, LayoutDashboard, LucideIcon, Settings, User, Users } from "lucide-react";
import { NavLink } from "react-router";
import Logout from "./logout";

type NavLinkType = {
  label: string;
  path: string;
  icon: LucideIcon;
};

const Sidebar = () => {
  const { session, isAdmin } = useUser();

  const dashboardPath = isAdmin ? "/dashboard/admin" : `/dashboard/${session?.data.userName}`;

  // Define links
  const links: NavLinkType[] = [
    { label: "Dashboard", path: dashboardPath, icon: LayoutDashboard },
    { label: "Projects", path: "/projects", icon: FolderKanban },
    { label: "Tasks", path: "/tasks", icon: CheckSquare },
    { label: "Teams", path: "/teams", icon: Users },
    { label: "Creativity", path: "/creativity", icon: Activity },
    { label: "Profile", path: "/profile", icon: User },
    { label: "Settings", path: "/settings", icon: Settings },
  ];
  return (
    <aside className="h-full max-h-screen py-1.5 bg-slate-50 md:pb-2 dark:bg-slate-900 grid grid-rows-[80px_1fr_50px] md:grid-rows-[80px_1fr_45px] *:px-3.5 dark:border-r  border-r-slate-500/50">
      <NavLink to={"/"} className="text-2xl font-bold max-sm:max-w-[76px] flex items-center justify-center gap-1.5">
        <h3 className="text-2xl  font-bold hidden md:block bg-gradient-to-r py-1.5 px-3 rounded  from-blue-800 to-amber-800">ProjectHub</h3>
        <h3 className="text-2xl font-bold md:hidden bg-gradient-to-r p-1 rounded  from-amber-800 to-blue-800">PH</h3>
      </NavLink>
      <ul className="flex flex-col items-start gap-3 py-4">
        {links.map((link: NavLinkType) => (
          <NavLink
            end
            key={link.label}
            to={link.path}
            className={({ isActive }) =>
              `dark:bg-slate-800 bg-slate-100 not-dark:hover:bg-slate-200 text-slate-950 dark:text-slate-50    py-2 text-lg px-4 flex items-center gap-3 max-sm:py-4  md:w-full rounded-xs  ${
                isActive ? "!text-slate-50 !bg-gradient-to-r dark:!from-blue-200/50 dark:!to-amber-300/50 !from-blue-700/90 !to-amber-400/90" : ""
              }`
            }
          >
            <span>{<link.icon className="w-4 h-4" />}</span>
            <span className="hidden md:block">{link.label}</span>{" "}
          </NavLink>
        ))}
      </ul>

      <Logout />
    </aside>
  );
};
export default Sidebar;
