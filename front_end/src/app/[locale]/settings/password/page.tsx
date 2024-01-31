import { Input } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const t = useTranslations("page.settings.passwordpage");

  return (
    <div className="flex justify-start items-start mt-16 ml-12">
      <div className="flex flex-col w-full space-y-7">
        <div className="top flex flex-col">
          <h1 className="text-base font-roboto font-semibold leading-7 dark:text-white text-black-primary">
            {t("password")}
          </h1>
          <p className="text-base font-roboto  dark:text-white text-black-primary">
            {t("descupdatepassword")}
          </p>
        </div>
        <div className="w-[90%] h-auto  border border-slate-500 rounded-lg">
          <div className="flex flex-col space-y-6 py-7 px-5">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="currpass"
                className="dark:text-white text-black-primary"
              >
                {t("currentpassword")}
              </label>
              <Input
                type="password"
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="currpass"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="repeatpass"
                className="dark:text-white text-black-primary"
              >
                {t("newpassword")}
              </label>
              <Input
                type="password"
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="repeatpass"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="newpassw"
                className="dark:text-white text-black-primary"
              >
                {t("password")}
              </label>
              <Input
                type="password"
                className="w-[90%] px-2 py-2 dark:bg-[#222222] dark:text-white"
                id="newpassw"
              />
            </div>
            <div className="">
              <button className="p-2 bg-green-secondary rounded-md hover:bg-[#24785c] transition-all duration-400">
                {t("btnupdtpassword")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
