import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import Button from "../../../ui/button";
import FormItem from "../../../ui/form-item";
import FormWrapper from "../../../ui/form-wrapper";
import InputErrorMessage from "../../../ui/input-error-message";
import FormContainer from "./form-container";

type SignUpFormValues = {
  oldPassword: string;
  newPassword: string;
};

const UpdatePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onChange",
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2 className="md:text-3xl text-xl font-semibold">Update Password</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 md:space-y-4"
        >
          {/* Old Password */}
          <FormItem label="Old Password" name="oldPassword">
            <Input
              type="password"
              {...register("oldPassword", {
                required: "Old password is required",
              })}
            />
            {errors.oldPassword && (
              <InputErrorMessage>
                {errors.oldPassword.message}
              </InputErrorMessage>
            )}
          </FormItem>

          {/* New Password */}
          <FormItem label="New Password" name="newPassword">
            <Input
              type="password"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "New password must be 8 characters long",
                },
              })}
            />
            {errors.oldPassword && (
              <InputErrorMessage>
                {errors.oldPassword.message}
              </InputErrorMessage>
            )}
          </FormItem>

          <div className="flex justify-end">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};
export default UpdatePasswordForm;
