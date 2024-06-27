"use server"
import { IFormInput, IOtpInput, Register } from "@/modules/account/components/register"
import { cookies } from "next/headers"
import {z} from "zod"
import { loginUserService, registerUserService, sendOtp, sendOtpService, updateVerifiedUserService, verifyOtpService} from "../services/auth-service"
import { redirect } from "next/navigation"
import { ILoginFormInput } from "@/modules/account/components/login"


const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};


 const LoginSchema = z.object( {
identifier :z.string().email({
    message:"email is required"
}),
 password: z
    .string()
    .min(6, {
      message: "Password must have at least 6 or more characters",
    })
    .max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
})


const InitialvalidateSchema = z.object({
  firstName:z.string().min(3,{
message:"first name is required"
}) ,   
lastName:z.string(),  
phone:z.string().min(9,{
  message:"enter 10 digit phone number"
}),
username:z.string() || z.undefined() ,
email :z.string().email({
    message:"email is required"
}),
password: z.string().min(8,{
    message:"password is required"
}),
confirmPassword: z.string().min(8,{
    message:"password doesn't match"
}),

})

const RegisterSchema = z.object( {
firstName:z.string().min(3,{
message:"first name is required"
}) ,   
lastName:z.string(),  
phone:z.string().min(9,{
  message:"enter 10 digit phone number"
}),
username:z.string() || z.undefined() ,
email :z.string().email({
    message:"email is required"
}),
password: z.string().min(8,{
    message:"password is required"
}),
confirmPassword: z.string().min(8,{
    message:"password doesn't match"
})
})


const OtpSchema = z.object({
  otp :z.string().min(4,{
    message:"Enter 4 digit otp"
  })
})


export async function validateUserAction(prevState:any, formData:IFormInput){
  const validatedFields =InitialvalidateSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    email: formData.email,
    username:formData.email
  });

   if (!validatedFields.success) {
    return {
        ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }
  return validatedFields
}


export async function validateOtpAction(formData:IOtpInput){
  const validatedOtp = OtpSchema.safeParse({
    otp: formData.otp
  });
   if (!validatedOtp.success) {
    return {
      zodErrors: validatedOtp.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Missing Fields. Failed to Register.",
    };
  }
 return validatedOtp
}

export async function registerUserAction(prevState:any,formData:IFormInput){

 console.dir(formData)

const validatedFields = RegisterSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    password: formData.password,
    confirmPassword: formData.confirmPassword,
    email: formData.email,
    username:formData.email
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
      message: "Failed to Login.",
    };
  }

  cookies().set("_jwt", responseData.jwt, config); //save jwt token before verification
  const userId = responseData.user.id
  const phone = validatedFields.data.phone
  const success = true
  return {success,userId, phone}
}

export const getOtp = async (phone: string) => {
    //  const responseData = await sendOtpService(phone)
   const responseData ={
    Status:"success",
    Details:"58f7e814-3479-11ef-8b60-0200cd936042"
   }
     if(responseData.Status === 'success'){
      console.log("triggered")
      return responseData
     }
  
}
export const verifyOtpAction = async (otpSessionId: string, formData:IOtpInput, userId:string ) => { 

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
  // const responseData = await verifyOtpService(otpSessionId, validatedFields.data.otp)
const responseData ={
    Status:"success",
    Details:"Otp Matched"
   }
  

  if(responseData.Status === 'success'){
    console.log("verification triggered")
  const updatedUser = await updateVerifiedUserService(userId)
  if(updatedUser.success){
      // const authToken = cookies().get("_jwt_no_confirmed")?.value || "";
      // cookies().set("jwt", authToken, config);
    return {
      success : true,
      message: responseData.Details
    } 
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
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/auth");
}