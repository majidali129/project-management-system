import { useUser } from "@/feature/authentication/use-user";
import { Outlet, useNavigate } from "react-router";

const AuthGuard = () => {
  const navigate = useNavigate();
  const { session, isAuthenticated } = useUser();

  if (session?.data || isAuthenticated) navigate("/", { replace: true });

  return <Outlet />;
};
export default AuthGuard;
