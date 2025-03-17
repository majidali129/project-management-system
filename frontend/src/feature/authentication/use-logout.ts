import { logoutUser } from "@/services/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: logout,
    isPending: loggingOut,
    error: logoutError,
  } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/users/sign-in");
      toast.success("Logout successfully");
    },
    onError: (error) => toast.error(error.message),
  });

  return { logout, loggingOut, logoutError } as const;
};
