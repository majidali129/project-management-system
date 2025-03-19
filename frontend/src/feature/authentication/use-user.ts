import { getSession } from "@/services/users";
import { UserRole } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const {
    data,
    isPending: loadingSession,
    error: sessionError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getSession,
  });

  return { session: data?.data, isAdmin: data?.data?.role === UserRole["Project-Manager"], isAuthenticated: data?.data ? true : false, loadingSession, sessionError } as const;
};
