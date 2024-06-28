"use server"
import { cookies } from "next/headers"
import {z} from "zod"
import { loginUserService, registerUserService, sendOtp, sendOtpService, updateVerifiedUserService, verifyOtpService} from "../services/auth-service"
import { redirect } from "next/navigation"
import { ILoginFormInput } from "@/modules/account/components/login"
import { IFormInput } from "@/modules/account/components/register"
import { IOtpInput } from "@/modules/account/components/otp"
import { LoginSchema, OtpSchema, registerSchema } from "../zod/zod-schema"


const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};


export async function registerUserAction(prevState:any,formData:IFormInput){

const validatedFields = registerSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    email: formData.email,
    username:formData.email
  });

  console.log(validatedFields)

  if (!validatedFields.success) {
    return {
        ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  console.log(responseData)

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }
  const params = new URLSearchParams();
  const userId = responseData.user.id
   if (userId){
  params.append('verify', userId)
   }
  cookies().set("_jwt", responseData.jwt, config);
  const otpResponseData = await sendOtpService(validatedFields.data.phone)
    if(otpResponseData.Status === "Success") {
        cookies().set("otp_session",otpResponseData.Details , config);
        const lastFourDigits = responseData.user.phone;
      return {
        phone:lastFourDigits,
        userId: responseData.user.id,
        success:true,
        details:otpResponseData.Details
      }
    }
}


export const verifyOtpAction = async (otpSession: string | undefined, formData:IOtpInput, userId:string ) =>{

  if(!otpSession) return
  
const validatedFields = OtpSchema.safeParse({
   otp: formData.otp
})
 if (!validatedFields.success) {
    return {
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }
  const responseData = await verifyOtpService(otpSession, validatedFields.data.otp)

  if(responseData.Status === 'Success'){
  const updatedUser = await updateVerifiedUserService(userId)
  if(updatedUser.success){
      cookies().set("otp_session", "", {...config, maxAge: 0});
    return {
      success : true,
      message: responseData.Details
    } 
  }
  }else{
    return{
    success : false,
   message: responseData.Details
    }
     
  }
  
}

export async function loginUserAction(prevState: any, formData: ILoginFormInput) {

  const validatedFields = LoginSchema.safeParse({
    identifier: formData.email,
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



function getLastFourLetters(str:string) {
  return str.slice(-4);
}