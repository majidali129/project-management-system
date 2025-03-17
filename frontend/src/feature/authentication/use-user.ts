import { getSession } from "@/services/users";
import { UserRole } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const {
    data: session,
    isPending: loadingSession,
    error: sessionError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getSession,
  });

  return { session, isAdmin: session?.data?.role === UserRole["Project-Manager"], isAuthenticated: session?.data ? true : false, loadingSession, sessionError } as const;
};
