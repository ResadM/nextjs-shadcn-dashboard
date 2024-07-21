"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { signInCard, signInSchema } from "../zod";

export const login = async (values: signInCard) => {
  const validatedFields = signInSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { 
      email,
      password,
      redirectTo: "/dashboard",
    })
  } catch (error: any) {     
    console.log("error type is  " + error.type);  
    if (error instanceof AuthError) {
      switch (error.type.toString()) {       
        case "AuthError":
          return { error: "Username or password is incorrect!" };
        case "CredentialsSignin":
          return { error: "Username or password is incorrect!" };
        case "CallbackRouteError":
            return { error: "User not found!" };       
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }  
};