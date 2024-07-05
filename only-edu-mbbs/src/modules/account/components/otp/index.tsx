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
import DateTime from "@/modules/blog-components/ui/time";
import { getResendOtpSession } from "@/app/data/services/get-token";

export interface IOtpInput {
  pin: string;
}
export interface OtpProps {
  otpSession: string | undefined;
  userId: string | undefined;
  phone: string | undefined; // Add phone as a prop
}

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const Otp = ({ otpSession, userId, phone }: OtpProps) => {
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
  const [otpErrorMessage, setOtpErrorMessage] = useState<string | null>(null);

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const otpVerificationResponse = await verifyOtpAction(
      otpSession,
      formData,
      userId
    );

    if (otpVerificationResponse?.success) {
      toast.success("OTP verified successfully");
      router.push("/");
    } else {
      toast.error("OTP verification failed");
      setOtpErrorMessage("You entered the wrong OTP.");
    }
  }

  const handleResendOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your OTP resend API
    const resendResponse = await resendOtp(phone);
    if (resendResponse?.success) {
      toast.success("OTP resent successfully");
      startTimer();
    } else {
      resendResponse.error?.noPhoneError &&
        setOtpErrorMessage("no phone number found please try again later");
      resendResponse.error?.resendError &&
        setOtpErrorMessage("cannot resend otp until countdown persist");
    }
  };

  const startTimer = () => {
    setIsResendDisabled(true);
    setTimer(30); // Set your timer duration here
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled]);

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
        <p className="text-red-500 font-medium text-xs">{otpErrorMessage}</p>
      )}
      <form
        className="my-2 w-full flex justify-center items-center text-xs flex-col"
        onSubmit={handleResendOtp}
      >
        <button
          type="submit"
          className={`text-blue-500 disabled:text-gray-500 `}
          disabled={isResendDisabled}
        >
          Resend OTP
        </button>
        {isResendDisabled && <p>Resend available in {timer} seconds</p>}
      </form>
    </div>
  );
};

export default Otp;
