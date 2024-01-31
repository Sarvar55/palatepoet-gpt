import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";
import { JWT } from "next-auth/jwt";

//add next auth module augmentation to help typescript intellisense know that our User type has userId,accessToken,refreshToken attribute.
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      userId: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
  }
}
