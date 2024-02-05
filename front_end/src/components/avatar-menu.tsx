"use client";

import Avatar from "./ui/avatar";
import React, { useState, useEffect, useRef, use } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ImageIcons } from "@/constants/data";
import { Icons } from "./icons";
import DarkMode from "./ui/darkmode-switch";
import DarkModeMenu from "./ui/darkmode-menu";
import { signOut, useSession } from "next-auth/react";
import { User } from "next-auth";
import LocalizedLink from "./localized-link";
import { getUserById } from "@/services/user-service";
import { date } from "zod";

type Params = {
  user: User;
};

export default function AvatarMenu() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [user, setUser] = useState<User | null>();
  const { data: session } = useSession();

  const ref = useRef(null);

  const onClick = () => {
    setIsClick(!isClick);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {session?.user ? (
        <div className="flex flex-col relative">
          <Avatar username={session?.user.name} onClick={onClick} />
          <div ref={ref} className="absolute top-16 right-10">
            {isClick && isOpen && <AuthMenu user={session.user} />}
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center space-x-3">
          <DarkMode />
          <UnAuthMenu />
        </div>
      )}
    </>
  );
}

function AuthMenu({ user }: Params) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const locale = useLocale();

  return (
    <div className="relative z-30  dark:bg-[#242424]  bg-white shadow-lg h-auto rounded-md">
      <div
        className="w-[240px] flex flex-col relative py-2 px-3
    "
      >
        <div className="header mb-3">
          <span className="text-[#6b7280] text-xs font-medium">
            Signed in as <p className="text-gray">{user.email}</p>
          </span>
          <hr className="h-1/2 text-[#454545]" />
        </div>
        <div className="space-y-3">
          <div className="option flex  border-b  border-blue-100 hover:bg-[#d7ece2] w-[97%] hover: dark:hover:bg-[#383838] cursor-pointer py-1 rounded-md transition-colors space-x-3 font-roboto">
            <LocalizedLink
              href={"/chef"}
              className="flex h-full w-full items-center space-x-2"
            >
              <Image
                className="cursor-pointer"
                src={ImageIcons.kitchen}
                alt="kitchen"
                width={20}
                height={20}
              ></Image>
              <span className="font-medium text-sm leading-5 dark:text-[#F1f2f3] text-black-primary">
                Kitchen
              </span>
            </LocalizedLink>
          </div>
          <div className="option flex border-b  border-blue-100 hover:bg-[#d7ece2] w-[97%] hover: dark:hover:bg-[#383838] cursor-pointer py-1 rounded-md transition-colors space-x-3 font-roboto">
            <LocalizedLink
              href={"/settings"}
              locale={locale}
              className="flex h-full w-full items-center space-x-2"
            >
              <Image
                className="cursor-pointer"
                src={ImageIcons.settings}
                alt="kitchen"
                width={20}
                height={20}
              ></Image>
              <span className="font-medium text-sm leading-5 dark:text-[#F1f2f3] text-black-primary">
                Settings
              </span>
            </LocalizedLink>
          </div>
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            className="option  border-b  border-blue-100 hover:bg-[#d7ece2] relative hidden md:flex w-[97%] dark:hover:bg-[#383838] cursor-pointer py-1 rounded-md transition-colors space-x-3 font-roboto"
          >
            <LocalizedLink
              href={"/"}
              className="flex h-full w-full items-center space-x-2"
            >
              <span className="dark:text-white text-black-primary">
                <Icons.pencil />
              </span>
              <span className="font-medium text-sm leading-5 dark:text-[#F1f2f3] text-black-primary">
                Theme
              </span>
            </LocalizedLink>
          </div>
          <div
            onMouseLeave={() => setIsMouseOver(false)}
            className="option  border-b  border-blue-100 hover:bg-[#d7ece2] relative hidden md:flex  w-[97%] dark:hover:bg-[#383838] cursor-pointer py-1 rounded-md transition-colors space-x-3 font-roboto"
          >
            <LocalizedLink
              href={"/"}
              onClick={() => signOut()}
              className="flex h-full w-full items-center space-x-2"
            >
              <Image
                className="cursor-pointer"
                src={ImageIcons.door}
                alt="kitchen"
                width={25}
                height={25}
              ></Image>
              <span className="font-medium text-sm leading-5 dark:text-[#F1f2f3] text-black-primary">
                Sign Out
              </span>
            </LocalizedLink>
          </div>
          <div
            onMouseLeave={() => setIsMouseOver(false)}
            className="absolute top-[50%] right-[99%]"
          >
            {isMouseOver && <DarkModeMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnAuthMenu() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center space-x-3">
        <LocalizedLink
          href={"/auth/login"}
          className="dark:bg-green-300 font-roboto bg-slate-100 text-gray hover:bg-slate-100 duration-150 transition-colors p-2 rounded-lg"
        >
          Sign In
        </LocalizedLink>
        <LocalizedLink
          href={"/auth/register"}
          className="bg-green-500 font-roboto  hover:bg-green-600 duration-150 transition-colors p-2 rounded-lg"
        >
          Sign Up
        </LocalizedLink>
      </div>
    </div>
  );
}
