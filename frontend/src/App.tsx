import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/app-layout";
import AuthGuard from "./components/auth-guard";
import AuthLayout from "./components/auth-layout";
import ProteceteRoute from "./components/protected-route";
import { useUser } from "./feature/authentication/use-user";
import CreativityPage from "./pages/creativity";
import DashboardPage from "./pages/dashboard";
import ForgotPasswordPage from "./pages/forgot-password";
import OnBoarding from "./pages/on-boarding";
import ProjectsPage from "./pages/projects";
import SettingsPage from "./pages/settings";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sing-up";
import TasksPage from "./pages/tasks";
import TeamsPage from "./pages/teams";
import UpdatePasswordPage from "./pages/update-password";
import UpdateProfilePage from "./pages/update-profile";
import VerifyEmailPage from "./pages/verify-email";
import VerifyPasswordResetOtpPage from "./pages/verify-otp";

const App = () => {
  const { session, isAdmin } = useUser();
  const userName = session?.data.userName;

  return (
    <Routes>
      <Route
        element={
          <ProteceteRoute>
            <AppLayout />
          </ProteceteRoute>
        }
      >
        {/* Redirect to the correct dashboard based on role */}
        <Route index element={<Navigate replace to={isAdmin ? "/dashboard/admin" : `/dashboard/${userName}`} />} />

        {/* Admin Dashboard */}
        <Route path="/dashboard/admin" element={<DashboardPage />} />

        {/* User Dashboard */}
        <Route path="/dashboard/:username" element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="creativity" element={<CreativityPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route element={<AuthLayout />}>
          <Route path="/users/sign-up" element={<SignUpPage />} />
          <Route path="/users/verify-email" element={<VerifyEmailPage />} />
          <Route path="/users/sign-in" element={<SignInPage />} />
          <Route path="/users/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/users/verify-otp" element={<VerifyPasswordResetOtpPage />} />
        </Route>
      </Route>
      <Route
        element={
          <ProteceteRoute>
            <AuthLayout />
          </ProteceteRoute>
        }
      >
        <Route path="/users/update-password" element={<UpdatePasswordPage />} />
        <Route path="/users/update-profile" element={<UpdateProfilePage />} />
      </Route>
      <Route path="/get-started" element={<OnBoarding />} />
    </Routes>
  );
};
export default App;
