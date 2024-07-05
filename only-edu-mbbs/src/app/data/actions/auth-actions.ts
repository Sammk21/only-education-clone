"use server"
import { cookies } from "next/headers"
import {
  loginUserService,
  registerUserService,
  sendOtpService,
  updateVerifiedUserService,
  verifyOtpService,
} from "../services/auth-service";
import { redirect } from "next/navigation";
import { ILoginFormInput } from "@/modules/account/components/login";
import { IFormInput } from "@/modules/account/components/register";
import { IOtpInput } from "@/modules/account/components/otp";
import { LoginSchema, OtpSchema, registerSchema } from "../zod/zod-schema";
import { getResendOtpSession } from "../services/get-token";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  // secure: process.env.NODE_ENV === "production",
};
const otpConfig = {
  maxAge: 60 * 2, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  // secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(prevState: any, formData: IFormInput) {
  const validatedFields = registerSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    password: formData.password,
    email: formData.email,
    username: formData.phone,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Register.",
    };
  }
  cookies().set("_jwt", responseData.jwt, config);
  // const otpResponseData = await sendOtpService(validatedFields.data.phone);

  const otpResponseData = {
    Status: "true",
    Details: "djnsjnsdnsd",
  };
  if (otpResponseData.Status) {
    console.log("troggered");
    cookies().set("otp_session", otpResponseData.Details, otpConfig);
    const lastFourDigits = validatedFields.data.phone.slice(-4);

    return {
      phone: lastFourDigits,
      userId: responseData.user.id,
      success: true,
      details: otpResponseData.Details,
    };
  } else {
    return {
      ...prevState,
      message: "Failed to send OTP.",
    };
  }
}

export async function resendOtp(phone: string | undefined) {
  const resendOtpSessionResponse = await getResendOtpSession();

  if (resendOtpSessionResponse.resendOtpSession === undefined) {
    console.log("triggered");
    let r = (Math.random() + 1).toString(36).substring(7);
    cookies().set("ROS", r, { expires: Date.now() + 60 * 1000 });
  } else {
    return {
      error: {
        resendError: true,
        noPhoneError: false,
      },
      success: false,
      message: "please wait till the timer's over",
    };
  }

  if (!phone)
    return {
      error: {
        resendError: false,
        noPhoneError: true,
      },
      success: false,
    };

  try {
    // const otpResponseData = await sendOtpService(phone);

    const otpResponseData = {
      Status: "true",
      Details: "djnsjnsdnsd",
    };

    if (otpResponseData.Status) {
      cookies().set("otp_session", otpResponseData.Details, otpConfig); // 1 minute
      return {
        success: true,
        details: otpResponseData.Details,
      };
    } else {
      throw new Error("Failed to resend OTP.");
    }
  } catch (error) {
    console.error("Resend OTP Error:", error);
    return {
      success: false,
      message: "couldnt send otp now please try again later",
    };
  }
}

export const verifyOtpAction = async (
  otpSession: string | undefined,
  formData: IOtpInput,
  userId: string | undefined
) => {
  if (!otpSession || !userId) return;

  const validatedFields = OtpSchema.safeParse({
    otp: formData.pin,
  });
  if (!validatedFields.success) {
    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to verify otp.",
    };
  }
  const responseData = await verifyOtpService(
    otpSession,
    validatedFields.data.otp
  );

  if (responseData.Status === "Success") {
    const updatedUser = await updateVerifiedUserService(userId);
    if (updatedUser.success) {
      cookies().set("otp_session", "", { ...config, maxAge: 0 });
      cookies().set("_usr_id", "", { ...config, maxAge: 0 });
      cookies().set("_phn_", "", { ...config, maxAge: 0 });
      return {
        success: true,
        message: responseData.Details,
      };
    }
  } else {
    return {
      success: false,
      message: responseData.Details,
    };
  }
};

export async function loginUserAction(
  prevState: any,
  formData: ILoginFormInput
) {
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

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }
  cookies().set("_jwt", responseData.jwt, config);
}

export async function logoutAction() {
  cookies().set("_jwt", "", { ...config, maxAge: 0 });
  redirect("/auth");
}

export async function getLastFourLetters() {
  const phone = cookies().get("_phn_")?.value;
  if (phone) return phone.slice(-4);
  else return null;
}