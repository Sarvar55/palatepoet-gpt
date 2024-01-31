"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import Image from "next/image";
import { ImageIcons } from "@/constants/data";
import LanguageSelector from "./ui/language-selector";
import AvatarMenu from "./avatar-menu";

export default function TopBar() {
  const pathname = usePathname();

  const getPathNameInfo = useMemo(() => {
    if (pathname.includes("cookbook")) {
      return {
        icon: ImageIcons.bookmark,
        text: "Your CookBook",
      };
    } else if (pathname.includes("chef")) {
      return {
        icon: ImageIcons.cook,
        text: "MasterChef",
      };
    } else if (pathname.includes("shoplist")) {
      return {
        icon: ImageIcons.shoppingBasket,
        text: "Your ShopList",
      };
    } else if (pathname.includes("settings")) {
      return {
        icon: ImageIcons.settings,
        text: "Settings",
      };
    }
  }, [pathname, ImageIcons]);

  const { icon, text } = getPathNameInfo;

  return (
    <header className="border-b border-slate-400">
      <nav className="h-[50px] flex justify-between items-center">
        <div className="left">
          <h1 className="flex items-center space-x-3">
            <Image src={icon} width={25} height={25} alt="resim" />
            <span className="capitalize text-lg leading-5 font-medium text-black-primary dark:text-white">
              {text}
            </span>
          </h1>
        </div>
        <div className="right flex items-center space-x-4">
          <LanguageSelector />
          <AvatarMenu />
        </div>
      </nav>
    </header>
  );
}
