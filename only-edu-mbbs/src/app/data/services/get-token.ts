"use server"
import { cookies } from "next/headers";

export async function getAuthToken() {
  const authToken = cookies().get("_jwt")?.value;
  return authToken;
}

export async function getOtpSessionAndUserId(){
const otpSession = cookies().get("otp_session")?.value;
const userId = cookies().get("_usr_id_")?.value
return {
  otpSession,userId
};
}