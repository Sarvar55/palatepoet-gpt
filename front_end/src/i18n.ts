import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "tr", "az"] as const;

export type LocaleType = "en" | "tr" | "en";

export const defaultLocale = "en";

export const publicPages = ["/chef", "/cookbook", "/auth/login"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = new Intl.Locale(locale).baseName as LocaleType;

  if (!locales.includes(baseLocale)) notFound();

  return {
    messages: (await import(`./messages/${baseLocale}.json`)).default,
  };
});
