import { object, string } from "zod";
export const loginFormSchema = object({
  email: string({
    required_error: "Please enter your email",
  }).email("Please enter a valid email"),

  password: string({
    required_error: "Please enter your password",
  })
    .min(6)
    .max(16),
});
