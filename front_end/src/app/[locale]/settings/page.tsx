"use client";
import React from "react";
import { Input } from "antd";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("page.settings.profilepage");

  return (
    <div className="flex justify-start items-start mt-16 ml-12">
      <div className="flex flex-col w-full space-y-7">
        <div className="top flex flex-col">
          <h1 className="text-base font-roboto font-semibold leading-7 dark:text-white text-black-primary">
            {t("mydetails")}
          </h1>
          <p className="text-base font-roboto  dark:text-white text-black-primary">
            {t("mngProfile")}
          </p>
        </div>
        <div className="w-[90%] h-auto  border border-slate-500 rounded-lg">
          <div className="flex flex-col space-y-6 py-7 px-5">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="name"
                className="dark:text-white text-black-primary"
              >
                {t("name")}
              </label>
              <Input
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="dark:text-white text-black-primary"
              >
                {t("email")}
              </label>
              <Input
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="dark:text-white text-black-primary"
              >
                {t("phone")}
              </label>
              <Input
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="phone"
              />
            </div>
            <div className="">
              <button className="p-2 bg-green-secondary rounded-md hover:bg-[#24785c] transition-all duration-400">
                {t("btnupdate")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
