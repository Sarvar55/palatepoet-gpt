import { ingredients } from "@/constants/data";
import { Recipe } from "@/types/types";
import { useTranslations } from "next-intl";
import React from "react";
import { Icons } from "./icons";

type Props = {
  recipe: Recipe | null;
  isShow?: boolean;
};

export default function Recipe({ recipe, isShow }: Props) {
  const t = useTranslations("page.chef.recipe");

  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-[60%]  border border-indigo-600  rounded-lg py-14 px-7">
        <h2 className="mt-4  mb-4 text-2xl font-bold text-center text-black-primary dark:text-white">
          {recipe?.title}
        </h2>
        <div className="flex flex-col space-y-4">
          <h3 className="mt-4 text-lg font-bold sm:text-lg text-black-primary dark:text-white">
            {t("preparationTime")}:
            <span className="px-1 font-normal text-base text-black-primary dark:text-white">
              {recipe?.cookingTime}
            </span>
          </h3>
          <h3 className="mt-4 text-lg font-bold sm:text-lg text-black-primary dark:text-white">
            {t("difficulty")}:
            <span className="px-1 font-normal text-base text-black-primary dark:text-white">
              {recipe?.difficulty}
            </span>
          </h3>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg text-black-primary dark:text-white">
            {t("ingredients")}:
          </h3>
          <ul className="list-inside list-disc">
            {recipe?.ingredients.map((ingredient) => (
              <li className="space-x-1 text-black-primary dark:text-white">
                <span>{ingredient.amount}</span>
                <span>{ingredient.name}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg text-black-primary dark:text-white">
            {" "}
            {t("instructions")}:
          </h3>
          <ul className="list-inside list-none">
            {recipe?.instructions.map((instruction) => (
              <li className="text-black-primary dark:text-white">
                <span>{instruction.step}.</span>
                <span>{" " + instruction.description}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg text-black-primary dark:text-white">
            {" "}
            {t("macros")}:
          </h3>
          <div className="text-black-primary dark:text-white">
            <p>
              {t("totalCalories")}: {recipe?.calories}{" "}
            </p>
            <p>
              {t("carbs")}: {recipe?.macros.carbs}{" "}
            </p>
            <p>
              {t("proteins")}: {recipe?.macros.protein}{" "}
            </p>
            <p>
              {t("fats")}: {recipe?.macros.fats}{" "}
            </p>
          </div>
        </div>
        {isShow && (
          <button className="mt-4 py-1 px-1 w-full flex justify-center items-center group dark:bg-slate-600 dark:hover:bg-neutral-600 hover:bg-neutral-800 bg-black-primary rounded-md">
            Save
            <Icons.heart
              size={19}
              className="ml-2 group-hover:text-red-600 duration-150 transition-colors"
            />
          </button>
        )}
      </div>
    </main>
  );
}
