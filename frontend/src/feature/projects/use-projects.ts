import { getProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  const {
    data,
    isPending: loadingProjects,
    error: projectsFetchError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return {
    projects: data?.data || [],
    loadingProjects,
    projectsFetchError,
  } as const;
};
