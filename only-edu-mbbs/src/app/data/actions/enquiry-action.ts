import { enquiryService } from "../services/enquiry-service";
import { EnquirySchema } from "../zod/zod-schema";

interface IEnquiryInput {
  level: string;
  specialization: string;
}

export const enquiryAction = async (
  prevState: any,
  formData: IEnquiryInput,
  userId: number | undefined,
  uniId: number
) => {
  console.log(formData);

  if (!userId)
    return {
      ...prevState,
      zodErrors: null,
      message: "Internal server error please try again later",
    };

  const validatedFields = EnquirySchema.safeParse({
    userId: userId,
    uniId: uniId,
    level: formData.level,
    specialization: formData.specialization,
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await enquiryService(
    validatedFields.data.userId,
    validatedFields.data.uniId,
    validatedFields.data.level,
    validatedFields.data.specialization
  );

  if (!responseData) {
    return {
      ...prevState,
      success: false,
      strapiErrors: responseData || "",
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      success: false,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }

  if (responseData.success) {
    return {
      success: true,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "success.",
    };
  }
};
