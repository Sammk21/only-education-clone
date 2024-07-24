import { IEmailInput } from "@/modules/account/components/profile-email";
import * as zod from "zod";
import { mutateData } from "../services/mutate-data";
import qs from "qs"
import { flattenAttributes } from "@/utils/utils";


export const updateEmailSchema = zod.object({
    id: zod.number(),
    email: zod.string().email({
      message: "email is required",
    }),
  });

export async function updateEmailAction( prevState: any,data:IEmailInput) {
    const validateEmail = updateEmailSchema.safeParse({id:data.id,email:data.email})
    if (!validateEmail.success) {
        return {
          zodErrors: validateEmail.error.flatten().fieldErrors,
          message: "Missing Fields. Failed to update email.",
        };
      };


      const payload = {
        email:validateEmail.data.email
      }


        const userId  = validateEmail.data.id
        const responseData = await mutateData(
            userId,
            payload
          );
          if (!responseData) {
            return {
              ...prevState,
              strapiErrors: null,
              message: "Ops! Something went wrong. Please try again.",
            };
          }
        
          if (responseData.error) {
            return {
              ...prevState,
              strapiErrors: responseData.error,
              message: "Failed to Register.",
            };
          }
        
          const flattenedData = flattenAttributes(responseData);
        
          return {
            ...prevState,
            data: flattenedData,
            strapiErrors: null,
            message:"update sucessfull"
          };
  
}
export async function updatePasswordAction(prevState: any,data:string) {
  
}

export async function updateNamesAction(prevState: any,data:string) {
  
}

export async function updatePhoneAction(prevState: any,data:string) {
  
}