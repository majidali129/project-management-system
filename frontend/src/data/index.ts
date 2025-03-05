import {
  Activity,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  Settings,
  User,
  Users,
} from "lucide-react";

// Dashboard data for charts
export const dashboardData = {
  projectProgress: {
    labels: [
      "Website Redesign",
      "Mobile App",
      "CRM Integration",
      "Marketing Campaign",
      "Database Migration",
    ],
    datasets: [
      {
        label: "Progress (%)",
        data: [75, 60, 45, 90, 30],
        backgroundColor: [
          "#4F46E5",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#6366F1",
        ],
      },
    ],
  },
  taskCompletionTrend: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Completed Tasks",
        data: [42, 58, 65, 61, 78, 85],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
      },
    ],
  },
  teamDistribution: {
    labels: ["Development", "Design", "Marketing", "Management"],
    datasets: [
      {
        label: "Team Members",
        data: [12, 8, 5, 3],
        backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"],
      },
    ],
  },
};

// Projects data
export const projectsData = [
  {
    name: "Website Redesign",
    description: "Redesign the company website with modern UI/UX",
    progress: 75,
    status: "In Progress",
    dueDate: "Aug 15, 2023",
    team: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Mike Johnson",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ],
  },
  {
    name: "Mobile App Development",
    description: "Create iOS and Android apps for customers",
    progress: 60,
    status: "In Progress",
    dueDate: "Sep 30, 2023",
    team: [
      {
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        name: "David Brown",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        name: "Lisa Davis",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],
  },
  {
    name: "CRM Integration",
    description: "Integrate new CRM system with existing tools",
    progress: 45,
    status: "At Risk",
    dueDate: "Jul 20, 2023",
    team: [
      {
        name: "Robert Wilson",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "Emily Taylor",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      },
    ],
  },
  {
    name: "Marketing Campaign",
    description: "Q3 digital marketing campaign for new product",
    progress: 90,
    status: "Completed",
    dueDate: "Jun 30, 2023",
    team: [
      {
        name: "Michael Anderson",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        name: "Jennifer Thomas",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Christopher Martinez",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    ],
  },
  {
    name: "Database Migration",
    description: "Migrate from legacy database to new cloud solution",
    progress: 30,
    status: "Delayed",
    dueDate: "Oct 15, 2023",
    team: [
      {
        name: "Jessica Robinson",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Daniel Clark",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      },
    ],
  },
];

// Teams data
export const teamsData = [
  {
    name: "Development Team",
    role: "Frontend & Backend",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    taskCompletion: 85,
    activeProjects: 3,
  },
  {
    name: "Design Team",
    role: "UI/UX & Graphics",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    taskCompletion: 92,
    activeProjects: 2,
  },
  {
    name: "Marketing Team",
    role: "Digital & Content",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    taskCompletion: 78,
    activeProjects: 1,
  },
  {
    name: "Management",
    role: "Project Management",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    taskCompletion: 95,
    activeProjects: 4,
  },
  {
    name: "Management",
    role: "Task Management",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    taskCompletion: 95,
    activeProjects: 4,
  },
];

// Tasks data
export const tasksData = [
  {
    title: "Design homepage mockup",
    project: "Website Redesign",
    completed: false,
    priority: "High",
    dueDate: "Today",
    isToday: true,
    assignee: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    title: "Fix navigation bug",
    project: "Mobile App",
    completed: true,
    priority: "Medium",
    dueDate: "Today",
    isToday: true,
    assignee: {
      name: "David Brown",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  },
  {
    title: "API integration for user profiles",
    project: "CRM Integration",
    completed: false,
    priority: "High",
    dueDate: "Today",
    isToday: true,
    assignee: {
      name: "Robert Wilson",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  },
  {
    title: "Create social media assets",
    project: "Marketing Campaign",
    completed: false,
    priority: "Medium",
    dueDate: "Today",
    isToday: true,
    assignee: {
      name: "Jennifer Thomas",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  },
  {
    title: "Database schema review",
    project: "Database Migration",
    completed: false,
    priority: "Low",
    dueDate: "Tomorrow",
    isToday: false,
    assignee: {
      name: "Daniel Clark",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    },
  },
  {
    title: "User testing for new features",
    project: "Mobile App",
    completed: false,
    priority: "Medium",
    dueDate: "Jul 18, 2023",
    isToday: false,
    assignee: {
      name: "Lisa Davis",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  },
  {
    title: "Content writing for blog",
    project: "Marketing Campaign",
    completed: false,
    priority: "Low",
    dueDate: "Jul 20, 2023",
    isToday: false,
    assignee: {
      name: "Michael Anderson",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  },
];

// Activities data
export const activitiesData = [
  {
    type: "task",
    content: "Jane Smith completed task",
    project: "Design homepage mockup",
    date: "2023-07-15",
    time: "2 hours ago",
  },
  {
    type: "comment",
    content: "David Brown commented on",
    project: "Fix navigation bug",
    date: "2023-07-15",
    time: "4 hours ago",
  },
  {
    type: "project",
    content: "New project created",
    project: "Database Migration",
    date: "2023-07-14",
    time: "Yesterday",
  },
  {
    type: "task",
    content: "Robert Wilson assigned to",
    project: "API integration",
    date: "2023-07-14",
    time: "Yesterday",
  },
  {
    type: "comment",
    content: "Jennifer Thomas commented on",
    project: "Social media assets",
    date: "2023-07-13",
    time: "2 days ago",
  },
  {
    type: "project",
    content: "Project status updated",
    project: "Marketing Campaign",
    date: "2023-07-13",
    time: "2 days ago",
  },
];

// Upcoming events/deadlines
export const upcomingData = [
  {
    date: "2023-07-15",
    time: "10:00 AM",
    title: "Team Standup Meeting",
    description: "Daily standup to discuss progress and blockers",
    project: "All Projects",
    assignees: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Mike Johnson",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ],
  },
  {
    date: "2023-07-15",
    time: "2:00 PM",
    title: "Client Review",
    description: "Review website redesign progress with client",
    project: "Website Redesign",
    assignees: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
  },
  {
    date: "2023-07-16",
    time: "11:00 AM",
    title: "Database Schema Review",
    description: "Review and finalize database schema for migration",
    project: "Database Migration",
    assignees: [
      {
        name: "Jessica Robinson",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        name: "Daniel Clark",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      },
    ],
  },
  {
    date: "2023-07-17",
    time: "9:00 AM",
    title: "Sprint Planning",
    description: "Plan tasks for the upcoming sprint",
    project: "All Projects",
    assignees: [
      {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Jane Smith",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Mike Johnson",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
  },
  {
    date: "2023-07-18",
    time: "3:00 PM",
    title: "Marketing Strategy Meeting",
    description: "Discuss Q3 marketing strategy and campaign results",
    project: "Marketing Campaign",
    assignees: [
      {
        name: "Michael Anderson",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      },
      {
        name: "Jennifer Thomas",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      },
    ],
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

export { adminLinks, userLinks };
