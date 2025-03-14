import { useState } from "react";
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";

const Dashboard = () => {
  const [role] = useState("admin");
  const isAdmin = role === "admin";

  return <>{isAdmin ? <AdminDashboard /> : <UserDashboard />}</>;
};
export default Dashboard;
