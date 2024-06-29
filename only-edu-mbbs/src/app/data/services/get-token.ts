"use server"
import { cookies } from "next/headers";

export async function getAuthToken() {
  const authToken = cookies().get("_jwt")?.value;
  return authToken;
}

export async function getOtpSession(){
const otpSession = cookies().get("otp_session")?.value;
return otpSession;
}