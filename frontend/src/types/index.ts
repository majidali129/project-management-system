export const enum UserRole {
  "Project-Manager" = "Project-Manager",
  "Developer" = "Developer",
}

export type Session = {
  id: string;
  userName: string;
  role: string;
  isActive: string;
  avatar?: string;
};

export type User = {
  _id: string;
  userName: string;
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  permissions: string[];
  isActive: boolean;
  profilePhoto: string;
  experience: string;
  skills: string[];
  projects: Project[];
  tasks: Task[];
  teams: Team[];
  lastLoggedIn: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type SignUp = Pick<User, "userName" | "fullName" | "email" | "password" | "role" | "permissions">;
export type SignIn = Pick<User, "email" | "password">;

export type AllUsers = Pick<User, "_id" | "userName" | "fullName" | "role" | "isActive" | "profilePhoto" | "skills" | "lastLoggedIn" | "createdAt" | "updatedAt">;

export type Team = {
  _id: string;
  name: string;
  domain: string;
  description: string;
  createdBy: Pick<User, "_id" | "userName">;
  teamLead: Pick<User, "_id" | "userName" | "profilePhoto">;
  project: Pick<Project, "_id" | "title" | "assignee" | "domain">;
  tasks?: Pick<Task, "_id" | "title" | "assignee" | "status">[];
  members: Pick<User, "_id" | "userName" | "profilePhoto">[];
  createdAt: Date;
  updatedAt: Date;
};

export type CreateTeam = Pick<Team, "name" | "domain" | "teamLead" | "project" | "description" | "createdBy">;
export type AllTeams = Team[];
export type TeamInfo = Required<Team>;

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

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  assignee: Pick<User, "userName" | "profilePhoto" | "_id" | "fullName">;
  isPersonal: boolean;
  createdBy: string;
  completedAt: Date;
  project: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const enum ProjectStatus {
  "pending" = "pending",
  "active" = "active",
  "completed" = "completed",
  "paused" = "paused",
  "at-risk" = "at-risk",
}

export type Project = {
  _id: string;
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
  assignedTeam: Pick<Team, "_id" | "name" | "domain" | "members">;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateProject = Pick<Project, "title" | "description" | "domain" | "startDate" | "endDate" | "tags" | "createdBy">;
export type AllProjects = Project[];
export type ProjectInfo = Required<Project>;
export type UpdateProject = Partial<Project>;

export interface ITableColumnsConfig<T> {
  key: keyof T | "action";
  header: string;
  render?: (value: T[keyof T] | null, row: T) => React.ReactNode;
  isAction?: boolean;
}
