import { ITask, ITeam, TaskPriority, TaskStatus } from "@/types";

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

const taskSortOptions = [
  { label: "Due Date", value: "due-date" },
  { label: "Priority", value: "priority" },
  { label: "Status", value: "status" },
  { label: "Title", value: "title" },
  { label: "Created At", value: "created at" },
  { label: "Due Date", value: "due-date" },
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

const tasks: ITask[] = [
  {
    id: "task-1",
    title: "Implement Authentication",
    description: "Set up JWT-based authentication and role-based access control.",
    status: TaskStatus["In-Progress"],
    priority: TaskPriority["high"],
    dueDate: new Date("2025-03-10"),
    assignee: {
      id: "user-2",
      userName: "jane_smith",
      fullName: "Jane Smith",
      profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    isPersonal: false,
    createdBy: "user-1",
    completedAt: new Date("2025-03-12"),
    project: "project-1",
    tags: ["auth", "security", "backend"],
    createdAt: new Date("2025-02-25"),
    updatedAt: new Date("2025-03-05"),
  },
  {
    id: "task-2",
    title: "Fix Payment Gateway Issue",
    description: "Investigate and resolve Stripe payment failures.",
    status: TaskStatus["To-Do"],
    priority: TaskPriority["urgent"],
    dueDate: new Date("2025-03-12"),
    assignee: {
      id: "user-3",
      userName: "mike_ross",
      fullName: "Mike Ross",
      profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    isPersonal: false,
    createdBy: "user-1",
    completedAt: new Date("2025-03-15"),
    project: "project-2",
    tags: ["payments", "bugfix", "stripe"],
    createdAt: new Date("2025-02-28"),
    updatedAt: new Date("2025-03-07"),
  },
  {
    id: "task-3",
    title: "Optimize Database Queries",
    description: "Improve the efficiency of MongoDB queries for faster response times.",
    status: TaskStatus["In-Review"],
    priority: TaskPriority["medium"],
    dueDate: new Date("2025-03-15"),
    assignee: {
      id: "user-6",
      userName: "lisa_brown",
      fullName: "Lisa Brown",
      profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    isPersonal: false,
    createdBy: "user-5",
    completedAt: new Date("2025-03-18"),
    project: "project-3",
    tags: ["database", "optimization", "backend"],
    createdAt: new Date("2025-02-26"),
    updatedAt: new Date("2025-03-08"),
  },
  {
    id: "task-4",
    title: "Revamp Landing Page UI",
    description: "Redesign the main landing page for better user engagement.",
    status: TaskStatus["To-Do"],
    priority: TaskPriority["low"],
    dueDate: new Date("2025-03-20"),
    assignee: {
      id: "user-4",
      userName: "emma_johnson",
      fullName: "Emma Johnson",
      profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    isPersonal: false,
    createdBy: "user-1",
    completedAt: new Date("2025-03-25"),
    project: "project-1",
    tags: ["UI/UX", "frontend"],
    createdAt: new Date("2025-02-22"),
    updatedAt: new Date("2025-03-06"),
  },
];

const teams: ITeam[] = [
  {
    id: "team-1",
    name: "Frontend Wizards",
    domain: "Web Development",
    teamLead: {
      id: "user-1",
      userName: "john_doe",
      fullName: "John Doe",
      profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    project: {
      title: "LMS Platform",
      id: "project-1",
      assignedTeam: "Frontend Wizards",
      domain: "EdTech",
    },
    tasks: [
      {
        id: "task-1",
        title: "Implement Authentication",
        assignee: {
          id: "user-2",
          userName: "jane_smith",
          fullName: "Jane Smith",
          profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        status: TaskStatus["In-Progress"],
        dueDate: new Date("2025-03-10"),
      },
      {
        id: "task-2",
        title: "Fix Payment Gateway Issue",
        assignee: {
          id: "user-3",
          userName: "mike_ross",
          fullName: "Mike Ross",
          profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        status: TaskStatus["To-Do"],
        dueDate: new Date("2025-03-12"),
      },
    ],
    members: [
      {
        id: "user-2",
        userName: "jane_smith",
        profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        id: "user-3",
        userName: "mike_ross",
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        id: "user-4",
        userName: "emma_johnson",
        profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
    description: "Frontend development team specializing in UI/UX and React.js.",
    createdAt: new Date("2025-02-01"),
    updatedAt: new Date("2025-02-15"),
  },
  {
    id: "team-2",
    name: "Backend Masters",
    domain: "Backend Development",
    teamLead: {
      id: "user-5",
      userName: "will_smith",
      fullName: "Will Smith",
      profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    project: {
      title: "API Development for LMS",
      id: "project-3",
      assignedTeam: "Backend Masters",
      domain: "EdTech",
    },
    tasks: [
      {
        id: "task-3",
        title: "Optimize Database Queries",
        assignee: {
          id: "user-6",
          userName: "lisa_brown",
          fullName: "Lisa Brown",
          profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
        },
        status: TaskStatus["In-Review"],
        dueDate: new Date("2025-03-15"),
      },
    ],
    members: [
      {
        id: "user-6",
        userName: "lisa_brown",
        profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        id: "user-7",
        userName: "david_miller",
        profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
      },
    ],
    description: "Expert team handling backend APIs and database management.",
    createdAt: new Date("2025-01-20"),
    updatedAt: new Date("2025-02-10"),
  },
];

export { projectFilterOptions, projectSortOptions, tasks, taskSortOptions, teams };
