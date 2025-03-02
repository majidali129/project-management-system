import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import Button from "../../../ui/button";
import FormItem from "../../../ui/form-item";
import FormWrapper from "../../../ui/form-wrapper";
import InputErrorMessage from "../../../ui/input-error-message";

type VerifyEmailFormValues = {
  verifyCode: string;
};

const VerifyEmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyEmailFormValues>({
    mode: "onChange",
    defaultValues: {
      verifyCode: "",
    },
  });

  const onSubmit = (data: VerifyEmailFormValues) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <FormWrapper>
      <h2 className="md:text-4xl text-2xl font-semibold text-center">
        Verify Email
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 md:space-y-4"
      >
        {/* Email */}
        <FormItem label="Verification Code" name="verifyCode">
          <Input
            type="number"
            {...register("verifyCode", {
              required: "Verify Code is Required",
            })}
          />
          {errors.verifyCode && (
            <InputErrorMessage>{errors.verifyCode.message}</InputErrorMessage>
          )}
        </FormItem>

        <div className="flex justify-end">
          <Button type="submit">Verify</Button>
        </div>
      </form>
    </FormWrapper>
  );
};
export default VerifyEmailForm;
