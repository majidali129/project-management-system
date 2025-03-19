import { createProject as createProjectApi } from "@/services/projects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createProject,
    isPending: creatingProject,
    error: projectCreateError,
  } = useMutation({
    mutationFn: createProjectApi,
    mutationKey: ["projects"],
    onSuccess: () => {
      toast.success("Project created successfully");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.log("Error creating project", error);
      toast.error(`${error.name}: ${error.message}`);
    },
  });

  return { createProject, creatingProject, projectCreateError };
};
