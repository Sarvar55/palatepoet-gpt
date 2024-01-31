import { ingredients } from "@/constants/data";
import { Recipe } from "@/types/types";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  recipe: Recipe;
};

export default function Recipe({ recipe }: Props) {
  const t = useTranslations("page.chef.recipe");

  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-[60%]  border border-indigo-600  rounded-lg py-14 px-7">
        <h2 className="mt-4  mb-4 text-2xl font-bold text-center">
          {recipe.title}
        </h2>
        <div className="flex flex-col space-y-4">
          <h3 className=" ">
            {t("preparationTime")}:
            <span className="px-1 font-normal text-base">
              {recipe.cooking_time}
            </span>
          </h3>
          <h3 className="mt-4 text-lg font-bold sm:text-lg">
            {t("difficulty")}:
            <span className="px-1 font-normal text-base">
              {recipe.difficulty}
            </span>
          </h3>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg">
            {t("ingredients")}:
          </h3>
          <ul className="list-inside list-disc">
            {recipe.ingredients.map((ingredient) => (
              <li className="space-x-1">
                <span>{ingredient.amount}</span>
                <span>{ingredient.name}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg">
            {" "}
            {t("instructions")}:
          </h3>
          <ul className="list-inside list-none">
            {recipe.instructions.map((instruction) => (
              <li>
                <span>{instruction.step}.</span>
                <span>{" " + instruction.description}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-lg font-bold  sm:text-lg">
            {" "}
            {t("macros")}:
          </h3>
          <div>
            <p>
              {t("totalCalories")}: {recipe.calories}{" "}
            </p>
            <p>
              {t("carbs")}: {recipe.macros.carbs}{" "}
            </p>
            <p>
              {t("proteins")}: {recipe.macros.protein}{" "}
            </p>
            <p>
              {t("fats")}: {recipe.macros.fats}{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
