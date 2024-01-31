"use client";
import React, { useEffect, useState, useTransition } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { ImageIcons } from "@/constants/data";
import { Icons } from "../icons";

const modes = [
  {
    id: 1,
    mode: "dark",
    icon: Icons.moon,
  },
  {
    id: 2,
    mode: "light",
    icon: Icons.sun,
  },
  {
    id: 3,
    mode: "system",
    icon: Icons.monitor,
  },
];

const DarkModeMenu = () => {
  const [activeId, setActiveId] = useState(1);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("modes");

  useEffect(() => {
    setMounted(true);
    handleTheme();
  }, [theme]);

  const handleTheme = () => {
    if (theme === "dark") {
      setActiveId(1);
    } else if (theme === "light") {
      setActiveId(2);
    } else {
      setActiveId(3);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-[140px] h-auto p-2 leading-8 dark:bg-[#282828] bg-slate-100/80 flex flex-col rounded-md shadow-xl">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => {
            setActiveId(mode.id);
            setTheme(mode.mode);
          }}
          className="dark:hover:bg-[#383838] hover:bg-[#ccf7e5] text-black-primary opacity-90 px-2 rounded-md dark:text-white flex justify-start items-center space-x-3 transition-colors"
        >
          <span
            className={`${activeId === mode.id ? "opacity-100" : "opacity-0"}`}
          >
            <Icons.checkCircle
              className="dark:text-green-300"
              size={"16"}
            ></Icons.checkCircle>
          </span>
          <span>
            <mode.icon size={"19"}></mode.icon>
          </span>
          <span className="font-roboto font-normal capitalize">
            {t(mode.mode)}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DarkModeMenu;
