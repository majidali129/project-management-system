import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MyLineChart } from "@/feature/dashboard/line-chart";
import { MyPieChart } from "@/feature/dashboard/pi-chart";

import DashboardStats from "./dashboard-stats";
import RecentActivities from "./recent-activities";
import TodaysTasks from "./todays-tasks";

const AdminDashboard = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <DashboardStats />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  ">
        <MyPieChart title="Task Overview" />
        <MyLineChart title="Project Overview" />
      </div>
      <div className="grid  grid-cols-1 gap-4 lg:grid-cols-2 ">
        <Card className="max-h-[450px] h-full scroll-bar overflow-y-auto">
          <CardHeader className=" px-3 md:px-5 text-text">
            <CardTitle>Today's Tasks</CardTitle>
          </CardHeader>
          <CardContent className="px-1.5 md:px-3">
            <TodaysTasks />
          </CardContent>
        </Card>

        <Card className="max-h-[450px] h-full scroll-bar overflow-y-auto">
          <CardHeader className="px-3 md:px-5 text-text">
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivities />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default AdminDashboard;
