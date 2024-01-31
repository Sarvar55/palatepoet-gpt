import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ImageIcons } from "@/constants/data";
type Props = {};

export default function page({}: Props) {
  return (
    <Layout>
      <EmptyRecipe />
    </Layout>
  );
}

const EmptyRecipe = () => {
  const t = useTranslations("page.cookbook");
  return (
    <div className="w-full h-[50%]">
      <div className="top flex justify-center items-center py-9">
        <button className="bg-green-secondary w-[80%] h-[40px] font-roboto text-base font-normal rounded-md shadow-sm dark:shadow-neutral-700 ease-in-out hover:shadow-md transition-all">
          {t("btn")}
        </button>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <Image src={ImageIcons.cook} width={200} height={200} alt="resim" />
          <p className="dark:text-white text-black-primary">
            {t("emptyRecipeDesc")}
          </p>
        </div>
      </div>
    </div>
  );
};
