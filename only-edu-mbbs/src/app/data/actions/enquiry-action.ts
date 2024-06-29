import { enquiryService } from "../services/enquiry-service";
import { EnquirySchema } from "../zod/zod-schema";

interface IEnquiryInput {
  id: number;
  slug: string;
  level: string;
  specicalization: string;
}

const enquiryAction = async (prevState: any, formData: IEnquiryInput) => {
  const validatedFields = EnquirySchema.safeParse({
    id: formData.id,
    slug: formData.id,
    level: formData.level,
    specicalization: formData.specicalization,
  });
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const { id, slug, level, specialization } = validatedFields.data;

  const responseData = await enquiryService(id, slug, level, specialization);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData || "",
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
};
