import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import Button from "../../../ui/button";
import FormItem from "../../../ui/form-item";
import FormWrapper from "../../../ui/form-wrapper";
import InputErrorMessage from "../../../ui/input-error-message";
import FormContainer from "./form-container";

type SignUpFormValues = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onChange",
    defaultValues: {
      userName: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 md:space-y-4"
        >
          {/* Username */}
          <FormItem name="userName" label="Username">
            <Input
              type="text"
              {...register("userName", { required: "Username is required" })}
            />

            {errors.userName && (
              <InputErrorMessage>{errors.userName.message}</InputErrorMessage>
            )}
          </FormItem>

          <FormItem label="Your Full Name*" name="fullName">
            <Input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <InputErrorMessage>{errors.fullName.message}</InputErrorMessage>
            )}
          </FormItem>

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
            {errors.email && (
              <InputErrorMessage>{errors.email.message}</InputErrorMessage>
            )}
          </FormItem>

          {/* Password */}
          <FormItem label="Password*" name="password">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters long",
                  },
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-slate-900 dark:text-slate-200" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-slate-900 dark:text-slate-200" />
                )}
              </span>
            </div>
            {errors.password && (
              <InputErrorMessage>{errors.password.message}</InputErrorMessage>
            )}
          </FormItem>

          {/* Confirm Password */}
          <FormItem label="Confirm Password*" name="confirmPassword">
            <Input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <InputErrorMessage>
                {errors.confirmPassword.message}
              </InputErrorMessage>
            )}
          </FormItem>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Register</Button>
          </div>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignUpForm;
