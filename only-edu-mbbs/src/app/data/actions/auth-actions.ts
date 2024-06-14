"use server"

import { IFormInput } from "@/modules/account/components/register"

import {z} from "zod"


 const LoginSchema = z.object( {
email :z.string().email({
    message:"email is required"
}),
password: z.string().min(1,{
    message:"password is required"
})
})
const RegisterSchema = z.object( {
name:z.string().min(3,{
message:"first name is required"
}) ,   
lastName:z.string(),  
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


export async function registerUserAction(formData:IFormInput){


    
    const validatedFields = RegisterSchema.safeParse(formData)

     if(!validatedFields.success){
        return{error: "Invalid fields!"}
    }


  return "ok"
}