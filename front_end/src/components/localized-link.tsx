import { useLocale } from "next-intl";
import React, { ReactNode } from "react";
import { Link } from "@/navigation";
import { LocaleType } from "@/i18n";

type Props = {
  href: string;
  children: ReactNode;
  className?: string | undefined;
};

export default function LocalizedLink({
  href,
  children,
  className,
  ...props
}: Props) {
  const locale = useLocale() as LocaleType;
  return (
    <Link locale={locale} href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
