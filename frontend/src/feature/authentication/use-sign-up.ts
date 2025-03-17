import { registerUser } from "@/services/users";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: createUser,
    isPending: creatingUser,
    error: signUPError,
  } = useMutation({
    mutationKey: ["users"],
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/users/sign-in");
      localStorage.removeItem("role");
    },
    onError: (error) => toast.error(error.message),
  });

  return { createUser, creatingUser, signUPError } as const;
};
