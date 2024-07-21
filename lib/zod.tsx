import { object, string, z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type signInCard = z.infer<typeof signInSchema>;

export const ProfileSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  name: string({ required_error: "Name required" })
    .min(1, "Name is required")
    .max(32, "Name must be less than 32 characters."),
});

export type ProfileSchemaCard = z.infer<typeof ProfileSchema>;
