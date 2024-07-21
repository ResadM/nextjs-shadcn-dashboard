import {   AuthError, NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { signInSchema } from './lib/zod';

const authConfig = {
  providers: [
    CredentialProvider({
       name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
        async authorize(credentials, req) {
          const { email, password } = await signInSchema.parseAsync(credentials); 
          if (email !== "example@example.com" || password !== '987654321') {
            throw new AuthError();
          }    
        //Create dummy user
        const user = {
          id: '1',
          name: 'Rashad Mammadov',
          email: email
        };
         
        if (user) {         
          return user;
        } else {          
          return null;      
        }
      }
    })
  ],
  pages: {
    signIn: '/signin' 
  }
} satisfies NextAuthConfig;

export default authConfig;
