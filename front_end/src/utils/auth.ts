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

// Örnek usePrivateRoute fonksiyonu
export function usePrivateRoute() {
  const { data: sessionData } = useSession();
  const { push: navigate } = useRouter();
  const pathname = usePathname();
  const localeValue = useLocale();

  const authPages = (pathnameV: string) => {
    const pathnameIsMissingLocale = locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    console.log(pathname);
    console.log(pathnameIsMissingLocale);

    if (
      pathnameIsMissingLocale &&
      !sessionData?.user &&
      !publicPages
        .flatMap((p) => (p === "/" ? ["", "/"] : p))
        .includes(pathname)
    ) {
      console.log("burdayım");

      return navigate("/auth/login", { locale: localeValue });
    }
  };
  return authPages;
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
