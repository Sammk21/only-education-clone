"use server";
import { cookies } from "next/headers";
import {
  loginUserService,
  putOtpSession,
  putPhoneUserService,
  registerUserService,
  sendOtpService,
  updateVerifiedUserService,
  verifyOtpService,
  verifyPhoneUserService,
} from "../services/auth-service";
import { redirect } from "next/navigation";
import { ILoginFormInput } from "@/modules/account/components/login";
import { IFormInput } from "@/modules/account/components/register";
import { IOtpInput } from "@/modules/account/components/otp";
import { LoginSchema, OtpSchema, registerSchema } from "../zod/zod-schema";
import { getOtpSession, getResendOtpSession } from "../services/get-token";
import { getUserMeLoader } from "../services/get-user-loader";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  // secure: process.env.NODE_ENV === "production",
};

const OTP_RESEND_INTERVAL = 2 * 60 * 1000;
const otpConfig = {
  maxAge: OTP_RESEND_INTERVAL / 1000, // Match the same interval as OTP session cookie
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
    Status: true,
    Details: "ufhdujnfidnidnfni",
  };

  const { Details } = otpResponseData;

  if (otpResponseData.Status) {
    const putOtpSessionResponse = await putOtpSession(
      Details,
      responseData.user.id
    );
    // cookies().set("otp_session", otpResponseData.Details, otpConfig);
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

export async function resendOtp() {
  try {
    const user = await getUserMeLoader();
    const { last_otp_request, resend_attempts, id, phone } = user.data;

    console.log(user.data);
    if (!last_otp_request || resend_attempts === undefined) {
      // Send OTP if last_otp_request is null
      await sendOtpService(phone);
      const res = await verifyPhoneUserService(id, {
        last_otp_request: new Date(),
        resend_attempts: 2,
      });
      return res;
    }

    const lastRequestTime = new Date(last_otp_request);
    const currentTime = new Date();
    const timeDiff = (currentTime.getTime() - lastRequestTime.getTime()) / 1000; // Time difference in seconds

    if (timeDiff < 90) {
      // If less than 90 seconds since last OTP request
      return {
        message: `Please wait ${Math.ceil(
          90 - timeDiff
        )} seconds before requesting a new OTP.`,
      };
      return;
    }

    if (resend_attempts <= 0) {
      // If no resend attempts left
      console.log("Cannot verify, please contact support.");
      redirect("/");
      return;
    }

    // Send OTP if conditions are met
    await sendOtpService(phone);
    await verifyPhoneUserService(id, {
      last_otp_request: new Date(),
      resend_attempts: resend_attempts - 1,
    });
  } catch (error) {
    console.error("Error in resendOtp function:", error);
  }
}

export const sendAndVerifyOtpAction = async (userId: number, phone: string) => {
  const phoneUpdateResponse = await putPhoneUserService(userId, phone);
  const updatedPhone = phoneUpdateResponse?.data.phone;
  // const otpResponse = sendOtpService(updatedPhone);
  const otpResponseData = {
    Status: true,
    Details: "ufhdujnfidnidnfni",
  };
  const putOtpSessionResponse = await putOtpSession(
    otpResponseData.Details,
    userId
  );
  return putOtpSessionResponse;
};

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
  // const responseData = await verifyOtpService(
  //   otpSession,
  //   validatedFields.data.otp
  // );
  const responseData = {
    Status: "Success",
    Details: "ufhdujnfidnidnfni",
  };

  if (responseData.Status === "Success") {
    const updatedUser = await updateVerifiedUserService(userId);
    if (updatedUser.success) {
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
