import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router";
import OnboardingPage from "./feature/auth/components/on-boarding-form";
import ForgotPassword from "./pages/forgot-password";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sing-up";
import UpdatePassword from "./pages/update-password";
import VerifyOtp from "./pages/verify-otp";

// const queryClient = new QueryClient({
//   defaultOptions: {},
// });
const App = () => {
  return (
    <section className="min-h-screen w-full ">
      {/* <QueryClientProvider client={queryClient}> */}
      <Routes>
        <Route path="/users/sign-up" element={<SignUp />} />
        <Route path="/users/sign-in" element={<SignIn />} />
        <Route path="/users/forgot-password" element={<ForgotPassword />} />
        <Route path="/users/verify-otp" element={<VerifyOtp />} />
        <Route path="/users/update-password" element={<UpdatePassword />} />
        <Route path="/get-started" element={<OnboardingPage />} />
      </Routes>
      {/* </QueryClientProvider> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </section>
  );
};
export default App;
