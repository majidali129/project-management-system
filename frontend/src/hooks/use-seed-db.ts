import { MutationFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSeedDB = (key: string, action: MutationFunction) => {
  const queryClient = useQueryClient();
  const {
    mutate: seedDB,
    isPending: seedingDB,
    error: seedError,
  } = useMutation({
    mutationFn: action,
    mutationKey: [key],
    onSuccess: () => {
      console.log("Database seeded successfully");
      toast.success("Database seeded successfully");
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (error) => {
      console.error("Error seeding database", error);
      toast.error(`${error.name}: ${error.message}`);
    },
  });

  return { seedDB, seedingDB, seedError } as const;
};
