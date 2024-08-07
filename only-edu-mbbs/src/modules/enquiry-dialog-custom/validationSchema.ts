// src/validationSchema.ts
import * as z from "zod";

export const step1Schema = z.object({
  fullName: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email address"),
});

export const step2Schema = z.object({
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
  city: z.string().nonempty("City is required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select your gender",
  }),
});

export const step3Schema = z.object({
  course: z.string().nonempty("Course is required"),
});

export const formSchema = step1Schema.merge(step2Schema).merge(step3Schema);
