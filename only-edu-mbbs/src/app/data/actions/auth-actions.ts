"use server"
import { IFormInput, Register } from "@/modules/account/components/register"
import { cookies } from "next/headers"
import {z} from "zod"
import { loginUserService, registerUserService } from "../services/auth-service"
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


const RegisterSchema = z.object( {
firstName:z.string().min(3,{
message:"first name is required"
}) ,   
lastName:z.string(),  
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

export async function registerUserAction(prevState:any,formData:IFormInput){

   
const validatedFields = RegisterSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
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


if (!responseData) {
  return {
    ...prevState,
    strapiErrors: null,
    zodErrors: null,
    message: "Ops! Something went wrong. Please try again.",
  };
}
if (responseData.error) {
  return {
    ...prevState,
    strapiErrors: responseData.error,
    zodErrors: null,
    message: "Failed to Register.",
  };
}
cookies().set("jwt", responseData.jwt, config);
redirect("/")
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

  console.log(responseData)



  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }
  cookies().set("jwt", responseData.jwt, config);
  redirect("/");
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/auth");
}