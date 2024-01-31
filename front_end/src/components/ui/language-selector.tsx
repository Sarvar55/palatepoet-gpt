"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/navigation";

const languages = [
  { value: "en", label: "En" },
  { value: "tr", label: "Tr" },
  { value: "az", label: "Az" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef(null);
  const locale = useLocale();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !ref.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function handlePath(lang: string): void {
    router.push(pathname, { locale: lang });
  }

  return (
    <div className="relative flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-transparent h-10 w-10
                flex items-center justify-center dark:focus:ring-primary-500/70
                ring-primary-200 transition-all outline-none
                focus:ring-2 border border-black-primary  dark:border-slate-300/30 hover:border hover:border-gray
                active:bg-gray-100 dark:active:bg-black-primary
                duration-300 placeholder:text-gray-400 hover:bg-gray-50
                border-transparent shadow-sm hover:shadow-md capitalize dark:text-white text-black-primary"
      >
        {locale}
      </button>
      {isOpen && (
        <ul
          ref={ref}
          className="absolute top-4 right-10 rounded-md px-2 py-2 leading-6 bg-white dark:text-white text-black-primary dark:bg-[#202020] w-36 shadow-md"
        >
          {languages.map((lang) => (
            <li
              onClick={(e) => handlePath(lang.value)}
              key={lang.label}
              className="dark:hover:bg-[#383838] hover:bg-green-hover transition-all duration-700 px-2 py-2 rounded-sm cursor-pointer"
              value={lang.value}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
