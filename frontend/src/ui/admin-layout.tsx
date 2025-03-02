import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const AdminLayout = () => {
  return (
    <section className="min-h-screen bg-inherit grid grid-cols-[200px_1fr] text-white">
      <Sidebar />
      <div className="grid grid-rows-[80px_1fr]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
};
export default AdminLayout;
