import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../../ui/button";
import FormItem from "../../../ui/form-item";
import FormWrapper from "../../../ui/form-wrapper";
import Input from "../../../ui/Input";
import FormContainer from "./form-container";

const VerifyPasswordResetOtpForm = () => {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 4) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 5) return;
    console.log(code);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2 className="text-xl md:text-3xl font-semibold">
          Enter Verification Code
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
          {/* OTP */}
          <FormItem name="otp" className="">
            {otp.map((digit, index) => (
              <Input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(index, e)}
                className=" w-10 h-10 md:w-12 md:h-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring focus:ring-blue-400 not-first:mx-2"
              />
            ))}
          </FormItem>

          <div className="flex justify-end">
            <Button type="submit">Submit OTP</Button>
          </div>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};
export default VerifyPasswordResetOtpForm;
