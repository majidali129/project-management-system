import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const AppLayout = () => {
  return (
    <section className="min-h-screen h-full bg-inherit  grid grid-cols-[76px_1fr] md:grid-cols-[230px_1fr]  text-white ">
      <Sidebar />
      <div className="grid grid-rows-[80px_1fr] *:p-3.5 md:*:p-6">
        <Header />
        <main className=" max-h-[calc(100vh-80px)] overflow-y-auto h-full scroll-bar">
          <Outlet />
        </main>
      </div>
    </section>
  );
};
export default AppLayout;
