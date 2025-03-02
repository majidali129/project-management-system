import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const AppLayout = () => {
  return (
    <section className="min-h-screen bg-inherit grid grid-cols-[76px_1fr] md:grid-cols-[230px_1fr]  text-white ">
      <Sidebar />
      <div className="grid grid-rows-[80px_1fr] md:*:p-6">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
};
export default AppLayout;
