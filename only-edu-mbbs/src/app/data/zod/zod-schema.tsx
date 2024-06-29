import { z } from "zod";

export const LoginSchema = z.object({
  identifier: z.string().min(9, {
    message: "enter 10 digit phone number",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must have at least 6 or more characters",
    })
    .max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
});

export const registerSchema = z.object({
  firstName: z.string().min(3, {
    message: "first name is required",
  }),
  lastName: z.string(),
  phone: z.string().min(9, {
    message: "enter 10 digit phone number",
  }),
  username: z.string(),
  email: z.string().email({
    message: "email is required",
  }),
  password: z.string().min(8, {
    message: "password is required",
  }),
  confirmPassword: z.string().min(8, {
    message: "password doesn't match",
  }),
});

export const OtpSchema = z.object({
  otp: z.string().min(4, {
    message: "Enter 4 digit otp",
  }),
});

export const EnquirySchema = z.object({
  id: z.number(),
  slug: z.string(),
  level: z.string(),
  specialization: z.string(),
});
