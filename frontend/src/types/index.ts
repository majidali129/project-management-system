export const enum UserRole {
  "Project-Manager" = "Project-Manager",
  "Developer" = "Developer",
}

export interface IUser {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  permissions: string[];
  isActive: boolean;
  profilePhoto?: string;
  experience?: string;
  skills?: string[];
  projects?: string[];
  tasks?: string[];
  teams?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeam {
  id: string;
  name: string;
  domain: string;
  teamLead: Pick<IUser, "userName" | "profilePhoto" | "id" | "fullName">;
  project: Pick<IProject, "title" | "id" | "assignedTeam" | "domain">;
  tasks: Pick<ITask, "title" | "assignee" | "id" | "status" | "dueDate">[];
  members: Pick<IUser, "userName" | "profilePhoto" | "id">[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const enum TaskStatus {
  "To-Do" = "To-Do",
  "In-Progress" = "In-Progress",
  "In-Review" = "In-Review",
  "Completed" = "Completed",
}

export const enum TaskPriority {
  "low" = "low",
  "medium" = "medium",
  "high" = "high",
  "urgent" = "urgent",
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  assignee: Pick<IUser, "userName" | "profilePhoto" | "id" | "fullName">;
  isPersonal: boolean;
  createdBy: string;
  completedAt: Date;
  project: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const enum ProjectStatus {
  "active" = "active",
  "completed" = "completed",
  "paused" = "paused",
  "at-risk" = "at-risk",
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  domain: string;
  assignee: string;
  startDate: Date;
  endDate: Date;
  isPersonal: boolean;
  createdBy: string;
  completedAt: Date;
  tags?: string[];
  tasks?: string[];
  assignedTeam: string;
  progress: [number, number];
  createdAt: Date;
  updatedAt: Date;
}

export interface ITableColumnsConfig<T> {
  key: keyof T | "action";
  header: string;
  render?: (value: T[keyof T] | null, row: T) => React.ReactNode;
  isAction?: boolean;
}
