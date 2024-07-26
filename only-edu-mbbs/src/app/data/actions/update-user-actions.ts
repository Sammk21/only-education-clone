import { IEmailInput } from "@/modules/account/components/profile-email";
import * as zod from "zod";
import { mutateData } from "../services/mutate-data";
import qs from "qs"
import { flattenAttributes } from "@/utils/utils";
import { INameInput } from "@/modules/account/components/profile-name";
import { IPhoneInput } from "@/modules/account/components/profile-phone";
import { redirect } from "next/navigation";


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

// below is sarfraj code


export async function updatePasswordAction(prevState: any,data:string) {
  
}

export const updateNamesSchema = zod.object({
  id: zod.number(),
  firstName: zod.string().min(1, { message: "First name is required" }),
  lastName: zod.string().min(1, { message: "Last name is required" }),
});



export async function updateNamesAction(prevState: any, data: INameInput) {
  const validateNames = updateNamesSchema.safeParse({ 
    id: data.id, 
    firstName: data.firstName, 
    lastName: data.lastName 
  });

  if (!validateNames.success) {
    return {
      zodErrors: validateNames.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to update name.",
    };
  };

  const payload = {
    firstName: validateNames.data.firstName,
    lastName: validateNames.data.lastName
  };

  const userId = validateNames.data.id;
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
      message: "Failed to update name.",
    };
  }

  const flattenedData = flattenAttributes(responseData);

  return {
    ...prevState,
    data: flattenedData,
    strapiErrors: null,
    message: "Update successful",
  };
}



export const updatePhoneSchema = zod.object({
  id: zod.number(),
  phone: zod.string().min(10, { message: "Phone number is required" }).regex(/^\d{10,}$/, { message: "Phone number is invalid" }),
  last_phone_update: zod.date().nullable(),
});

// Action function to update phone and handle state
export async function updatePhoneAction(prevState: any, data: IPhoneInput) {
  // Validate and parse the phone data
  const validatePhone = updatePhoneSchema.safeParse({
    id: data.id,
    phone: data.phone,
    last_phone_update: data.last_phone_update || new Date(), // Use provided date or current date
  });

  // Handle validation errors
  if (!validatePhone.success) {
    return {
      zodErrors: validatePhone.error.flatten().fieldErrors,
      message: "Invalid Fields. Failed to update phone number.",
    };
  }

  // Prepare the payload with Date object
  const payload = {
    phone: validatePhone.data.phone,
    last_phone_update: validatePhone.data.last_phone_update, // Directly use the Date object
  };


  // Call the API with the payload
  const userId = validatePhone.data.id;
  const responseData = await mutateData(userId, payload);

  // Handle response
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
      message: "Failed to update phone number.",
    };
  }

  // Flatten the response data
  const flattenedData = flattenAttributes(responseData);

// redirect("/auth/profile") 

  return {
    ...prevState,
    data: flattenedData,
    strapiErrors: null,
    message: "Update successful",
  };
}




/*


// Define the schema for validation
export const updatePhoneSchema = zod.object({
  id: zod.number(),
  phone: zod.string().min(10, { message: "Phone number is required" }).regex(/^\d{10,}$/, { message: "Phone number is invalid" }),
  last_phone_update: zod.date().nullable(),
});

// Helper function to calculate date difference in days
function daysBetween(date1: Date, date2: Date): number {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Action function to update phone and handle state
export async function updatePhoneAction(prevState: any, data: IPhoneInput) {
  const currentDate = new Date();

  // Validate and parse the phone data
  const validatePhone = updatePhoneSchema.safeParse({
    id: data.id,
    phone: data.phone,
    last_phone_update: data.last_phone_update, // Use provided date or null
  });

  // Handle validation errors
  if (!validatePhone.success) {
    return {
      zodErrors: validatePhone.error.flatten().fieldErrors,
      message: "Invalid Fields. Failed to update phone number.",
    };
  }

  const lastUpdateDate = validatePhone.data.last_phone_update;

  // Check if the last phone update is not null and if 15 days have passed
  if (lastUpdateDate) {
    const daysSinceLastUpdate = daysBetween(currentDate, new Date(lastUpdateDate));
    if (daysSinceLastUpdate < 15) {
      return {
        ...prevState,
        strapiErrors: null,
        message: `You can only update your phone number once every 15 days. Please try again in ${15 - daysSinceLastUpdate} days.`,
      };
    }
  }

  // Prepare the payload with the current date
  const payload = {
    phone: validatePhone.data.phone,
    last_phone_update: currentDate, // Set to current date
  };

  console.log("Payload being sent:", payload); // Debugging line

  // Call the API with the payload
  const userId = validatePhone.data.id;
  const responseData = await mutateData(userId, payload);

  // Handle response
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
      message: "Failed to update phone number.",
    };
  }

  // Flatten the response data
  const flattenedData = flattenAttributes(responseData);

  return {
    ...prevState,
    data: flattenedData,
    strapiErrors: null,
    message: "Update successful",
  };
}

*/