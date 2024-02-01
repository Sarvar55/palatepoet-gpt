import { signIn, useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { useRouter } from "@/navigation";
import { LoginPayload } from "@/types/types";

export function useAuthenticateUser() {
  const { data: session } = useSession();
  const { push } = useRouter();
  const locale = useLocale();

  const authenticateUser = (redirectPath = "/auth/login") => {
    if (!session?.user) {
      push(redirectPath, { locale });
      return;
    }
  };

  return authenticateUser;
}

export function signInHandler(
  body: LoginPayload,
  redirect: boolean = true,
  callBackUrl: string = "/",
  provider: string = "credentials",
) {
  const { email, password } = body;
  try {
    signIn(provider, {
      email,
      password,
      callbackUrl: callBackUrl,
      redirect: redirect,
    });
  } catch (error) {
    console.log(error);
  }
}
