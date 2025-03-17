import { loginUser } from "@/services/users";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useSignIn = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending: loggingUser,
    error: loginError,
  } = useMutation({
    mutationFn: loginUser,
    mutationKey: ["user"],
    onSuccess: (data) => {
      navigate("/");
      toast.success(data.message);
      localStorage.removeItem("role");
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, loggingUser, loginError } as const;
};
