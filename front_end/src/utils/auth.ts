import { signIn, useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";
import { locales, publicPages } from "@/i18n";
import { LoginPayload } from "@/types/payloads";

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
export function useCustomRouter() {
  const { push } = useRouter();
  const locale = useLocale();

  const pushTo = (path: string) => {
    push(path, { locale });
  };
  return pushTo;
}

export function signInHandler(
  body: LoginPayload,
  redirect: boolean = true,
  callbackUrl: string = "/",
  provider: string = "credentials",
) {
  const { email, password } = body;
  try {
    signIn(provider, {
      email,
      password,
      callbackUrl,
      redirect,
    });
  } catch (error) {
    console.log(error);
  }
}
