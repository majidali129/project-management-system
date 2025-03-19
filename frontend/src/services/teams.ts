import { AllTeams, CreateTeam, Team, TeamInfo } from "@/types";
import { api, ApiResponse } from "./api";

export const createTeam = async (team: CreateTeam): Promise<ApiResponse<Team>> => {
  return api.post<Team, CreateTeam>("/teams/", team);
};

export const getTeams = async (): Promise<ApiResponse<AllTeams>> => {
  return api.get<AllTeams>("/teams/");
};

export const getTeamInfo = async (teamId: string): Promise<ApiResponse<TeamInfo>> => {
  return api.get<TeamInfo>(`/teams/${teamId}`);
};
