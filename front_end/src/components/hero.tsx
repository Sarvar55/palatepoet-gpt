import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import LocalizedLink from "./localized-link";
import { ImageIcons } from "@/constants/data";

export default function Hero() {
  const t = useTranslations("page.home");
  return (
    <div className="w-[95%] h-screen container flex flex-row justify-between items-center">
      <div className="left flex flex-col w-[60%]">
        <h1 className="text-base font-bold leading-5 text-green-secondary">
          {t("greating")}👋
        </h1>
        <div className="content mt-6">
          <div className="text-8xl font-roboto capitalize flex flex-col leading-[80px] font-extrabold space-y-8">
            {t("title_1")}
            <span className="text-green-secondary capitalize">
              {t("title_2")}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <p className="font-roboto text-lg leading-7 text-gray w-[80%]">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col w-[30%]">
          <LocalizedLink href={"/auth/login"}>
            <button className="md:w-[250px] w-[150px] bg-green-secondary mt-6 p-5 rounded-md font-sans text-xl font-medium ">
              {t("getStartedButton")}
            </button>
          </LocalizedLink>
          <span className="text-xs text-gray self-center mt-2 font-roboto">
            {t("creditCardDesc")}
          </span>
        </div>
      </div>
      <div className="right w-[40%] h-[70%]">
        <Image
          src={ImageIcons.hero}
          width={700}
          height={700}
          alt="hero image"
        />
      </div>
    </div>
  );
}
