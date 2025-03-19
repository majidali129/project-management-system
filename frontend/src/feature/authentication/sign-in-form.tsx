import { Button } from "@/components/ui/button";
import { SignIn } from "@/types";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import FormItem from "../../components/form-item";
import FormWrapper from "../../components/form-wrapper";
import InputErrorMessage from "../../components/input-error-message";
import { useSignIn } from "./use-sign-in";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loggingUser } = useSignIn();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignIn>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignIn) => {
    login(data, {
      onSettled: () => reset(),
    });
  };

  return (
    <FormWrapper>
      <h2 className="md:text-4xl text-2xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
        {/* Email */}
        <FormItem label="Email*" name="email">
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
        </FormItem>

        {/* Password */}
        <FormItem label="Password*" name="password">
          <div className="relative">
            <Input type={showPassword ? "text" : "password"} {...register("password", { required: "Password is required" })} />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
              {showPassword ? <EyeOff className="w-5 h-5 text-slate-900 dark:text-slate-200" /> : <EyeIcon className="w-5 h-5 text-slate-900 dark:text-slate-200" />}
            </span>
          </div>
          {errors.password && <InputErrorMessage>{errors.password.message}</InputErrorMessage>}
        </FormItem>

        <div className="flex justify-end">
          <Button disabled={loggingUser} type="submit">
            {loggingUser ? "Wait..." : "Login"}
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};
export default SignInForm;
