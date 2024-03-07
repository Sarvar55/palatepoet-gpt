import authenticate from "@/services/user-service";
import { User, LoginPayload } from "@/types/types";
import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // this way, if credentials is undifined , an error will be thrown and the excetion will stop preventing any potential runtime errors
        if (!credentials) throw new Error("Credentials are not provided");

        // create LoginPayload object for the send user-service method
        const { email, password } = credentials;

        const payload: LoginPayload = { email, password };

        const result = await authenticate(payload).then((res) => res.data);

        const user: User = result;

        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          userId: user.userId,
          name: user.username,
          email: user.email,
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = { ...token };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions);
