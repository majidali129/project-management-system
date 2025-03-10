import {
  Activity,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react";

// Teams data
export const teamsData = [
  {
    name: "Development Team",
    role: "Frontend & Backend",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    taskCompletion: 85,
    activeProjects: 3,
  },
];

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

const projectSortOptions = [
  { label: "Date Created (Newest First)", value: "date_created_desc" },
  { label: "Date Created (Oldest First)", value: "date_created_asc" },
  { label: "Deadline (Closest First)", value: "deadline_asc" },
  { label: "Deadline (Farthest First)", value: "deadline_desc" },
  { label: "Priority (High to Low)", value: "priority_desc" },
  { label: "Priority (Low to High)", value: "priority_asc" },
  { label: "Project Status (A-Z)", value: "status_asc" },
  { label: "Project Status (Z-A)", value: "status_desc" },
  { label: "Budget (High to Low)", value: "budget_desc" },
  { label: "Budget (Low to High)", value: "budget_asc" },
  { label: "Number of Team Members (Most First)", value: "team_size_desc" },
  { label: "Number of Team Members (Least First)", value: "team_size_asc" },
  { label: "Client Name (A-Z)", value: "client_asc" },
  { label: "Client Name (Z-A)", value: "client_desc" },
];

const projectFilterOptions = {
  status: [
    { label: "Active", value: "active" },
    { label: "In Progress", value: "in_progress" },
    { label: "Completed", value: "completed" },
    { label: "On Hold", value: "on_hold" },
    { label: "Archived", value: "archived" },
  ],
  priority: [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ],
  dueDate: {
    from: "", // Set dynamically via date picker
    to: "",
  },
  budgetRange: {
    min: 1000,
    max: 50000,
  },
};

export { adminLinks, projectFilterOptions, projectSortOptions, userLinks };
