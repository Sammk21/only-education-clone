"use client";
import {
  BottomGradient,
  LabelInputContainer,
} from "@/modules/account/components/register";
import { Label } from "@/modules/account/components/ui/label";
import { Input } from "@/modules/account/components/ui/input";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { verifyOtpAction } from "@/app/data/actions/auth-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface IOtpInput {
  otp: string;
}
export interface OtpProps {
  otpSession: string | undefined;
  userId: string;
}

const Otp = ({ otpSession, userId }: OtpProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IOtpInput>();
  const router = useRouter();

  const onOtpSubmit: SubmitHandler<IOtpInput> = async (formData) => {
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
  };

  return (
    <div className="max-w-xs mx-auto border p-3 rounded-xl mb-12">
      <form className="my-8" onSubmit={handleSubmit(onOtpSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="otp">
            Enter OTP <span className="text-red-500">*</span>
          </Label>
          <p>Otp has been sent to the number ending </p>
          <Input
            id="otp"
            placeholder="Enter the OTP sent to your phone"
            type="text"
            className={`border ${errors.otp ? "border-error" : ""}`}
            {...register("otp", {
              required: true,
              minLength: 4,
              maxLength: 4,
            })}
            aria-invalid={errors.otp ? "true" : "false"}
          />
          {errors.otp?.type === "required" && (
            <p role="alert" className="text-error text-[10px] font-medium">
              OTP is required
            </p>
          )}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn bg-dark dark:bg-foreground w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Verify OTP &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default Otp;
