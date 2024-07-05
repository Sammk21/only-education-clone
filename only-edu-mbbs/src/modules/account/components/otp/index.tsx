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
import { resendOtp, verifyOtpAction } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getResendOtpSession } from "@/app/data/services/get-token";
import { UserType } from "@/types/types";
import { getUserMeLoader } from "@/app/data/services/get-user-loader";

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

const Otp = ({ otpSession, user }: OtpProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const router = useRouter();
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [otpErrorMessage, setOtpErrorMessage] = useState<
    string | undefined | null
  >(null);

  useEffect(() => {
    if (isResendDisabled) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timerRef.current!);
            setIsResendDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isResendDisabled]);

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const user = await getUserMeLoader();

    const id = user.data?.id;
    const otpSession = user.data?.otp_session;

    console.log(id, otpSession);

    const otpVerificationResponse = await verifyOtpAction(
      otpSession,
      formData,
      id
    );

    if (otpVerificationResponse?.success) {
      toast.success("OTP verified successfully");
      router.push("/");
    } else {
      toast.error("OTP verification failed");
      setOtpErrorMessage("You entered the wrong OTP.");
    }
  }

  const phone = user.data?.phone;

  const handleResendOtp = async (data: any) => {
    console.log(data);
    // if (isResendDisabled) return;
    const resendResponse = await resendOtp(phone);
    if (resendResponse?.success) {
      toast.success("OTP resent successfully");
      setTimer(60); // 1 minute in seconds
      setIsResendDisabled(true);
    } else {
      resendResponse.error?.noPhoneError &&
        setOtpErrorMessage("No phone number found, please try again later.");
      resendResponse.error?.resendError &&
        setOtpErrorMessage(resendResponse.message);
    }
  };

  return (
    <div>
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
      <form
        className="my-2 w-full flex justify-center items-center text-xs flex-col"
        onSubmit={handleResendOtp}
      >
        <button
          type="submit"
          className={`text-blue-500 disabled:text-gray-500`}
        >
          Resend OTP
        </button>
      </form>
    </div>
  );
};

export default Otp;
