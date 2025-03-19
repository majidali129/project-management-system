import { seededProjects } from "@/data";
import { CreateProject, Project, UpdateProject } from "@/types";
import { api, ApiResponse } from "./api";

export const createProject = async (project: CreateProject): Promise<ApiResponse<Project>> => {
  return api.post<Project, CreateProject>("/projects/", project);
};

export const getProjects = async (): Promise<ApiResponse<Project[]>> => {
  return api.get<Project[]>("/projects/");
};

export const getProjectInfo = async (projectId: string): Promise<ApiResponse<Project>> => {
  return api.get<Project>(`/projects/${projectId}`);
};

export const updateProject = async (projectId: string, project: UpdateProject): Promise<ApiResponse<Project>> => {
  return api.put<Project, UpdateProject>(`/projects/${projectId}`, project);
};

export const seedProjects = async (): Promise<ApiResponse<Project[]>> => {
  return api.post<Project[], Partial<CreateProject>[]>("/projects/seed-projects", seededProjects);
};
