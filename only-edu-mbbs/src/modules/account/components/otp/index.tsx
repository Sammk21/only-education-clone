"use client";
// import {
//   BottomGradient,
//   LabelInputContainer,
// } from "@/modules/account/components/register";
// import { Label } from "@/modules/account/components/ui/label";
// import { Input } from "@/modules/account/components/ui/input";
// import React, { useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { verifyOtpAction } from "@/app/data/actions/auth-actions";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

export interface IOtpInput {
  pin: string;
}
export interface OtpProps {
  otpSession: string | undefined;
  userId: string | undefined;
}

// const Otp = ({ otpSession, userId }: OtpProps) => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<IOtpInput>();
//   const router = useRouter();

//   const onOtpSubmit: SubmitHandler<IOtpInput> = async (formData) => {
//     const otpVerificationResponse = await verifyOtpAction(
//       otpSession,
//       formData,
//       userId
//     );

//     if (otpVerificationResponse?.success) {
//       toast.success("OTP verified successfully");
//       router.push("/");
//     } else {
//       toast.error("OTP verification failed");
//     }
//   };

//   const handleResendOtp = () => {};

//   return (
//     <div className="max-w-xs mx-auto border p-3 rounded-xl mb-12">
//       <form className="my-8" onSubmit={handleSubmit(onOtpSubmit)}>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="otp">
//             Enter OTP <span className="text-red-500">*</span>
//           </Label>
//           <p>Otp has been sent to the number ending </p>
//           <Input
//             id="otp"
//             placeholder="Enter the OTP sent to your phone"
//             type="text"
//             className={`border ${errors.otp ? "border-error" : ""}`}
//             {...register("otp", {
//               required: true,
//               minLength: 4,
//               maxLength: 4,
//             })}
//             aria-invalid={errors.otp ? "true" : "false"}
//           />
//           {errors.otp?.type === "required" && (
//             <p role="alert" className="text-error text-[10px] font-medium">
//               OTP is required
//             </p>
//           )}
//         </LabelInputContainer>
//         <button
//           className="bg-gradient-to-br relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
//           type="submit"
//         >
//           Verify OTP &rarr;
//           <BottomGradient />
//         </button>
//       </form>
//       <form action="">
//         <button className="text-blue-500 text-sm" type="submit">
//           Resend otp
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Otp;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { verifyOtpAction } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const Otp = ({ otpSession, userId }: OtpProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const router = useRouter();

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
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
  );
};

export default Otp;
