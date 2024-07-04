"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useRef } from "react";
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
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { resendOtp, verifyOtpAction } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

  const startTimer = (duration: number) => {
    let remainingTime = duration;
    setTimer(remainingTime);
    setIsResendDisabled(true);

    timerRef.current = setInterval(() => {
      remainingTime -= 1;
      setTimer(remainingTime);
      if (remainingTime <= 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        setIsResendDisabled(false);
      }
    }, 1000);
  };

  const handleResendOtp = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await resendOtp(phone); // Pass the phone number as an argument
    if (response.success) {
      toast.success("OTP resent successfully.");
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      startTimer(60); // 1 minute timer
    } else {
      toast.error(`Failed to resend OTP: ${response.message}`);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-dark">One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
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
        className="my-2 w-full flex justify-center items-center"
        onSubmit={handleResendOtp}
      >
        <button
          type="submit"
          className="text-blue-500"
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
