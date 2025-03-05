// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/app-layout";
import AuthLayout from "./components/auth-layout";
import AdminActivityPage from "./pages/admin/creativity";
import AdminDashboardPage from "./pages/admin/dashboard";
import AdminProfilePage from "./pages/admin/profile";
import AdminProjectsPage from "./pages/admin/projects";
import AdminSettingsPage from "./pages/admin/settings";
import AdminTasksPage from "./pages/admin/tasks";
import AdminTeamsPage from "./pages/admin/teams";
import ForgotPassword from "./pages/forgot-password";
import OnBoarding from "./pages/on-boarding";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sing-up";
import UpdatePassword from "./pages/update-password";
import UserCreativityPage from "./pages/user/creativity";
import UserDashboardPage from "./pages/user/dashboard";
import UserProfilePage from "./pages/user/profile";
import UserProjectsPage from "./pages/user/projects";
import UserSettingsPage from "./pages/user/settings";
import UserTasksPage from "./pages/user/tasks";
import VerifyEmail from "./pages/verify-email";
import VerifyPasswordResetOtp from "./pages/verify-otp";

// const queryClient = new QueryClient({
//   defaultOptions: {},
// });
const App = () => {
  return (
    <section className="min-h-screen w-full ">
      {/* <QueryClientProvider client={queryClient}> */}
      <Routes>
        {/* 🔹 Admin Routes (Nested inside AdminLayout) */}
        <Route path="admin">
          <Route element={<AppLayout />}>
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" index element={<AdminDashboardPage />} />
            <Route path="projects" element={<AdminProjectsPage />} />
            <Route path="tasks" element={<AdminTasksPage />} />
            <Route path="teams" element={<AdminTeamsPage />} />
            <Route path="creativity" element={<AdminActivityPage />} />
            <Route path="profile" element={<AdminProfilePage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>
        </Route>

        {/* 🔹 User Routes (Nested inside UserLayout) */}
        <Route path="user">
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<UserDashboardPage />} />
            <Route path="projects" element={<UserProjectsPage />} />
            <Route path="tasks" element={<UserTasksPage />} />
            <Route path="creativity" element={<UserCreativityPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="settings" element={<UserSettingsPage />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/users/sign-up" element={<SignUp />} />
          <Route path="/users/sign-in" element={<SignIn />} />
          <Route path="/users/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/users/verify-otp"
            element={<VerifyPasswordResetOtp />}
          />
          <Route path="/users/update-password" element={<UpdatePassword />} />
          <Route path="/users/verify-email" element={<VerifyEmail />} />
        </Route>
        <Route path="/get-started" element={<OnBoarding />} />
      </Routes>
      {/* </QueryClientProvider> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </section>
  );
};
export default App;
