import { AuthError } from "next-auth";

// Create a custom error by extending AuthError
class CredentialAuthError extends AuthError {
  constructor(message:string) {
    super(message);
    this.type = 'CredentialsSignin';
    this.name = "CredentialAuthError";
  }
}
