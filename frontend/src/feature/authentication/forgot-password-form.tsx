import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import FormItem from "../../components/form-item";
import FormWrapper from "../../components/form-wrapper";
import InputErrorMessage from "../../components/input-error-message";

type SignUpFormValues = {
  email: string;
};

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <FormWrapper>
      <h2 className="text-2xl md:text-4xl font-semibold">Forgot Password</h2>
      <p className="tracking-wide text-slate-900 dark:text-slate-100/70">We will send you an email with instructions on how to reset your password.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
        {/* Email */}
        <FormItem label="Provide your email" name="email">
          <Input
            type="email"
            placeholder="lora@gmail.com"
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

        <div className="flex justify-end">
          <Button type="submit">Email Me</Button>
        </div>
      </form>
    </FormWrapper>
  );
};
export default ForgotPasswordForm;
