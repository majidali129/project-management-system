import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/app-layout";
import AuthLayout from "./components/auth-layout";
import ProteceteRoute from "./components/protected-route";
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
import Providers from "./providers/provider";

const App = () => {
  const [role] = useState("admin");
  return (
    <Providers>
      <Routes>
        <Route
          element={
            <ProteceteRoute>
              <AppLayout />
            </ProteceteRoute>
          }
        >
          {/* Redirect to the correct dashboard based on role */}
          <Route index element={<Navigate replace to={role === "admin" ? "/dashboard/admin" : `/dashboard/${"majid"}`} />} />

          {/* Admin Dashboard */}
          <Route path="/dashboard/admin" element={role === "admin" ? <DashboardPage /> : <Navigate to={`/dashboard/${"majid"}`} />} />

          {/* User Dashboard */}
          <Route path="/dashboard/:username" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="creativity" element={<CreativityPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/users/sign-up" element={<SignUpPage />} />
          <Route path="/users/sign-in" element={<SignInPage />} />
          <Route path="/users/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/users/verify-otp" element={<VerifyPasswordResetOtpPage />} />
          <Route path="/users/verify-email" element={<VerifyEmailPage />} />
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
    </Providers>
  );
};
export default App;
