"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useRef, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { resendOtp } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/types";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";
import { maskPhoneNumber } from "@/utils/utils";
import { updateVerifiedUserService } from "@/app/data/services/auth-service";

export interface IOtpInput {
  pin: string;
}
export interface OtpProps {
  otpSession: string | undefined;
  user: UserType;
}

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const Otp = ({ user }: OtpProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const router = useRouter();
  const [otpErrorMessage, setOtpErrorMessage] = useState<
    string | undefined | null
  >(null);

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const user = await getUserMeLoader();
    const id = user.data?.id;



    const otpVerificationResponse = {
      success: true, //mock test unit
    };

    if (otpVerificationResponse?.success) {
      const updateVerifiedUserData = await updateVerifiedUserService(id);
      toast.success("OTP verified successfully");
      router.back();
    } else {
      toast.error("OTP verification failed");
      setOtpErrorMessage("You entered the wrong OTP.");
    }
  }

  return (
    <div className="min-w-80 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex justify-center items-center flex-col"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="text-center text-dark">
                <FormLabel className="pb-4">
                  Please enter your 4 digit code
                </FormLabel>
                <p className="text-xs my-3">
                  Sent on {maskPhoneNumber(user.data?.phone)}
                </p>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {otpErrorMessage && (
        <p className="text-red-500 font-medium text-xs pt-2 text-center">
          {otpErrorMessage}
        </p>
      )}
      <ExpirationTimer />
    </div>
  );
};

export default Otp;

const ExpirationTimer = () => {
  const handleResendOtp = async () => {
    const response = await resendOtp();
    setTimeLeft(expirationTime);
    console.log(response);
  };

  const expirationTime = 60;
  const [timeLeft, setTimeLeft] = useState(expirationTime);

  let id: any = null;

  useEffect(() => {
    if (timeLeft > 0) {
      id = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [timeLeft]);

  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <button
          className="text-blue-500 text-sm underline disabled:text-blue-300  disabled:cursor-not-allowed"
          onClick={handleResendOtp}
          disabled={timeLeft > 0}
        >
          Resend OTP
        </button>
        <p className="text-sm mt-2 text-accent font-medium">
          {timeLeft > 0 ? `Resend otp in ${timeLeft} seconds` : ""}
        </p>
      </div>
    </>
  );
};
