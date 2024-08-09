import axios from "axios";
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

  console.log("triggered");

  try {
    const response = await axios.post(
      "http://localhost:8000/api/submit-enquiry",
      {
        userId: userId,
        level: formData.level,
        specialization: formData.specialization,
        universityId: uniId,
      }
    );

    return {
      ...prevState,
      zodErrors: null,
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      ...prevState,
      zodErrors: null,
      success: false,
      message: "Failed to submit enquiry. Please try again later.",
    };
  }
};
