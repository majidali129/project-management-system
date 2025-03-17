import { useUser } from "@/feature/authentication/use-user";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";

const Dashboard = () => {
  const { isAdmin, session } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const exactPath = isAdmin ? "/dashboard/admin" : `/dashboard/${session?.data.userName}`;

    if (location.pathname !== exactPath) {
      navigate(exactPath, { replace: true });
    }
  }, [isAdmin, location.pathname, navigate, session]);

  return isAdmin ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;
