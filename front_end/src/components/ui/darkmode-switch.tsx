"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeMenu from "./darkmode-menu";
import { Icons } from "../icons";
type Props = {};

export default function DarkMode({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isThemeChange, setIsThemeChange] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsThemeChange(true);
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }
  const onClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      {
        <button
          onClick={() => onClick()}
          className="bg-transparent h-10 w-10
                flex items-center justify-center dark:focus:ring-primary-500/70
                ring-primary-200 transition-all outline-none
                focus:ring-2 border border-black-primary  dark:border-slate-300/30 hover:border hover:border-gray
                disabled:cursor-not-allowed disabled:opacity-50
                active:bg-gray-100 dark:active:bg-black-primary
                transition-all 
                      duration-300 placeholder:text-gray-400 hover:bg-gray-50
                      flex items-center !rounded-full border-transparent shadow-sm transition-shadow !bg-transparent hover:shadow-md
                      "
        >
          {theme == "light" ? (
            <Icons.moon className="dark:text-white text-black-primary" />
          ) : (
            <Icons.sun className="dark:text-white text-black-primary" />
          )}
        </button>
      }
      <div
        onMouseLeave={() => setIsThemeChange(false)}
        className="absolute top-11 right-3"
      >
        {isThemeChange && <DarkModeMenu />}
      </div>
    </div>
  );
}
