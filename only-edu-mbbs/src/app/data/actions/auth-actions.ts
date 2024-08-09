"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  enquiryService,
  loginUserService,
  putOtpSession,
  putPhoneUserService,
  registerUserService,
  sendOtpService,
  updateVerifiedUserService,
  verifyOtpService,
} from "../services/auth-service";
import { ILoginFormInput } from "@/modules/account/components/login";
import { IFormInput } from "@/modules/account/components/register";
import { IOtpInput } from "@/modules/account/components/otp";
import {
  EnquirySchema,
  LoginSchema,
  OtpSchema,
  registerSchema,
} from "../zod/zod-schema";
import { getUserMeLoader } from "../services/get-user-loader";
import { StrapiErrorsProps } from "@/modules/custom/StrapiErrors";
import { recentlyViewed } from "@/types/types";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: ".onlyeducation.co.in", // Set to parent domain
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const, // Use lowercase "lax"
};

interface IActionResult {
  success?: boolean;
  message?: string;
  zodErrors?: Record<string, any>;
  strapiErrors?: StrapiErrorsProps;
  phone?: string;
  userId?: number;
  details?: string;
}

interface IEnquiryInput {
  level: string;
  specialization: string;
}

export async function registerUserAction(
  prevState: any,
  formData: IFormInput
): Promise<IActionResult> {
  const validatedFields = registerSchema.safeParse({
    ...formData,
    username: formData.phone,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register.",
    };
  }

  try {
    const responseData = await registerUserService(validatedFields.data);
    cookies().set("_jwt", responseData.jwt, config);

    const otpResponseData = await sendOtpService(validatedFields.data.phone);
    await putOtpSession(otpResponseData.Details, responseData.user.id);

    return {
      phone: validatedFields.data.phone.slice(-4),
      userId: responseData.user.id,
      success: true,
      details: otpResponseData.Details,
    };
  } catch (error) {
    console.error("Register User Action Error:", error);
    return {
      ...prevState,
      message: "Failed to register user. Please try again later.",
    };
  }
}

export async function resendOtp(): Promise<IActionResult> {
  try {
    const user = await getUserMeLoader();
    await sendOtpService(user.data.phone);
    return {
      success: true,
    };
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return {
      success: false,
      message: "Failed to resend OTP. Please try again later.",
    };
  }
}

export const sendAndVerifyOtpAction = async (
  userId: number,
  phone: string
): Promise<IActionResult> => {
  try {
    await putPhoneUserService(userId, phone);
    const otpResponseData = await sendOtpService(phone);
    await putOtpSession(otpResponseData.Details, userId);

    return {
      success: otpResponseData.Status,
      details: otpResponseData.Details,
    };
  } catch (error) {
    console.error("Send and Verify OTP Action Error:", error);
    return {
      success: false,
      message: "Failed to send and verify OTP. Please try again later.",
    };
  }
};

export const verifyOtpAction = async (
  otpSession: string | undefined,
  formData: IOtpInput,
  userId: number | undefined
): Promise<IActionResult> => {
  if (!otpSession || !userId) {
    return {
      success: false,
      message: "Invalid session or user ID.",
    };
  }

  const validatedFields = OtpSchema.safeParse({ otp: formData.pin });

  if (!validatedFields.success) {
    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to verify OTP.",
    };
  }

  try {
    const responseData = await verifyOtpService(
      otpSession,
      validatedFields.data.otp
    );

    if (responseData.Status === "Success") {
      const updatedUser = await updateVerifiedUserService(userId);
      return updatedUser.success
        ? { success: true, message: responseData.Details }
        : { success: false, message: "Failed to update user." };
    }

    return { success: false, message: responseData.Details };
  } catch (error) {
    console.error("Verify OTP Action Error:", error);
    return {
      success: false,
      message: "Failed to verify OTP. Please try again later.",
    };
  }
};

export async function loginUserAction(
  prevState: any,
  formData: ILoginFormInput
): Promise<IActionResult> {
  const validatedFields = LoginSchema.safeParse({
    identifier: formData.phone,
    password: formData.password,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData || responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData?.error,
      message: responseData?.error,
    };
  }

  cookies().set("_jwt", responseData.jwt, config);
  return { success: true };
}

export async function logoutAction(): Promise<void> {
  console.log("logging out");
  cookies().set("_jwt", "", { ...config, maxAge: 0 });
  redirect("/auth");
}

export const enquiryAction = async (
  prevState: any,
  formData: IEnquiryInput,
  userId: number | undefined,
  uniId: number
) => {
  if (!userId)
    return {
      ...prevState,
      zodErrors: null,
      message: "Internal server error please try again later",
    };

  const validatedFields = EnquirySchema.safeParse({
    userId: userId,
    uniId: uniId,
    level: formData.level,
    specialization: formData.specialization,
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await enquiryService({
    userId: validatedFields.data.userId,
    uniId: validatedFields.data.uniId,
    level: validatedFields.data.level,
    specialization: validatedFields.data.specialization,
  });

  if (!responseData) {
    return {
      ...prevState,
      success: false,
      strapiErrors: responseData || "",
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      success: false,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }

  if (responseData.success) {
    return {
      success: true,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "success.",
    };
  }
};

