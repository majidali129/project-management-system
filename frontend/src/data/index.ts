import {
  Activity,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react";

const adminLinks = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Projects", path: "/admin/projects", icon: FolderKanban },
  { label: "Tasks", path: "/admin/tasks", icon: CheckSquare },
  { label: "Teams", path: "/admin/teams", icon: Users },
  { label: "Creativity", path: "/admin/creativity", icon: Activity },
  { label: "Profile", path: "/admin/profile", icon: User },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const userLinks = [
  { label: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
  { label: "Projects", path: "/user/projects", icon: FolderKanban },
  { label: "Tasks", path: "/user/tasks", icon: CheckSquare },
  { label: "Creativity", path: "/user/creativity", icon: Activity },
  { label: "Profile", path: "/user/profile", icon: User },
  { label: "Settings", path: "/user/settings", icon: Settings },
];

export { adminLinks, userLinks };
