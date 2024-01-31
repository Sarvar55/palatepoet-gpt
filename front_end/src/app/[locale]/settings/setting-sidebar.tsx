"use client";
import { Link, usePathname } from "@/navigation";
import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const links = [
  {
    id: "mydetails",
    text: "My Details",
    href: "/settings",
  },
  {
    id: "email",
    text: "Email",
    href: "/settings/email",
  },
  {
    id: "password",
    text: "Password",
    href: "/settings/password",
  },
];

export default function SettingSidebar() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("page.settings");

  return (
    <div className="bg-transparent w-[200px] h-full mt-12">
      <nav className=" px-2 py-1">
        <ul className="py-2 space-y-7 ">
          {links.map((link) => (
            <Link
              className={classNames(
                "dark:text-white flex dark:hover:bg-[#282828] hover:bg-[#f0f3f4] px-2 py-2 rounded-md transition-all duration-200",
                {
                  ["dark:bg-[#282828]"]: pathname == link.href,
                  ["bg-[#f0f3f4]"]: pathname == link.href,
                },
              )}
              key={link.id}
              href={link.href}
              locale={locale}
            >
              <li
                className={classNames(
                  "text-black-primary dark:text-white font-roboto text-base font-medium",
                )}
              >
                {t(link.id)}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
