"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { links, navKeys } from "@/constants/links";
import Logo from "@/components/ui/logo";
import { Icons } from "./icons";

type Props = {};

export default function LeftNavbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigations");

  return (
    <nav className="flex  items-center space-x-5 text-white">
      <div className="flex justify-center items-center space-x-2 cursor-pointer">
        <Logo />
      </div>
      <ul className="hidden md:flex md:space-x-12">
        {navKeys.map((key) => (
          <Link href={t(`${key}.href`)} key={key}>
            <li className="text-base font-medium leading-3  text-gray hover:text-white transition-colors">
              {t(`${key}.label`)}
            </li>
          </Link>
        ))}
      </ul>

      <p
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer md:hidden dark:fill-black-primary text-black-primary"
      >
        <Icons.menu></Icons.menu>
      </p>

      {isOpen && (
        <ul className="md:hidden flex flex-col absolute rounded-md top-20 bg-[#282828] w-[80%] h-auto">
          {navKeys.map((key) => (
            <Link href={t(`${key}.href`)} key={key}>
              <li
                className="w-full h-11 p-6 flex justify-start items-center 
                                text-base font-medium leading-3 text-gray hover:text-white transition-all
                                hover:bg-[#383838]
                                rounded-md
                            "
              >
                {t(`${key}.label`)}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}
