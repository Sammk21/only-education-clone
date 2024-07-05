"use server"
import axios from "axios";
import { cookies } from "next/headers";

export async function getAuthToken() {
  const authToken = cookies().get("_jwt")?.value;
  return authToken;
}

export async function getOtpSession() {
  const otpSession = cookies().get("otp_session")?.value;
  return {
    otpSession,
  };
}

export async function getResendOtpSession() {
  const resendOtpSession = cookies().get("ROS")?.value;
  return {
    resendOtpSession,
  };
}