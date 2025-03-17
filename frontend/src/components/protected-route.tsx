import { useUser } from "@/feature/authentication/use-user";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Loader from "./loader";

const ProteceteRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  // 1:  load user from db
  const { isAuthenticated, loadingSession, sessionError } = useUser();

  // 2: if there is no user, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !loadingSession) {
      navigate("/users/sign-in", { replace: true });
      toast.error(sessionError?.message);
    }
  }, [isAuthenticated, loadingSession, sessionError?.message, navigate]);

  // 3: if user loading , show spinner
  if (loadingSession) return <Loader />;

  // 4: if user is authenticated,then go to app
  if (isAuthenticated) return children;
};
export default ProteceteRoute;
