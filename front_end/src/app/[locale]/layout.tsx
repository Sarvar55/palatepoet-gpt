import type { Metadata } from "next";

import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";

import "@/styles/globals.css";
import { fontSans } from "@/libs/fonts";
import { siteConfig } from "@/config/site";
import CustomThemeProvider from "@/providers/theme-provider";
import TopLoader from "@/components/ui/top-loader";
import NextAuthProvider from "@/providers/session-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://chef-gpt"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Chef GPT",
    "Chef Genie",
    "Recipe Generator",
    "Recipe ChatGPT",
    "Recipe AI",
    "Chef AI",
    "Meal generator",
    "Cook GPT",
    "Cooking generator",
  ],
  authors: [
    {
      name: "Sarvar55",
      url: "https://github.com/Sarvar55",
    },
  ],
  creator: "Sarvar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Sarvar",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type Params = {
  children: ReactNode;
  params: {
    locale: "en" | "tr" | "az";
  };
};

export default function RootLayout({ children, params: { locale } }: Params) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={fontSans.variable}>
        <NextIntlClientProvider messages={messages}>
          <CustomThemeProvider>
            <TopLoader />
            <NextAuthProvider>{children}</NextAuthProvider>
          </CustomThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
