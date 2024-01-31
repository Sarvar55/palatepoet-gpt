"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Checkbox } from "antd";
import classNames from "classnames";
import { Ingredient, Meal } from "@/types/types";
import { ImageIcons, mealData } from "@/constants/data";
interface Params {
  meal: Meal;
}

export default function page() {
  const isEmpty = mealData.length > 0 ? true : false; //this here will come from api

  return (
    <Layout>
      {!isEmpty ? (
        <EmptyList />
      ) : (
        mealData.map((meal) => (
          <div
            key={meal.mealName}
            className="w-full flex justify-center items-center"
          >
            <div className="my-5">
              <List meal={meal} />
            </div>
          </div>
        ))
      )}
    </Layout>
  );
}

const EmptyList = () => {
  const t = useTranslations("page.shoplist");

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <Image src={ImageIcons.cook} width={200} height={200} alt="resim" />
        <p className="text-lg font-roboto leading-5 font-medium dark:text-white text-black-primary">
          {t("emptyListDesc")}
        </p>
      </div>
    </div>
  );
};

const List: React.FC<Params> = ({ meal }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    meal.ingredients,
  );

  useEffect(() => {
    setIngredients(meal.ingredients);
  }, [meal]);

  const onChange = (ingredientName: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((item) =>
        item.name === ingredientName ? { ...item, inList: !item.inList } : item,
      ),
    );
  };

  return (
    <div className="box border border-[#f3f4f6] w-[750px] h-[250px] rounded-md p-5">
      <div className="top flex justify-between items-center">
        <h4 className="text-lg font-bold leading-7 font-roboto capitalize dark:text-white text-neutral-900">
          Spiced Anchovy Avocado Salad
        </h4>
        <button className="w-[30%] border border-[#f87171] text-[#f87171] py-2 px-4 rounded-md flex items-center justify-center ">
          Delete
        </button>
      </div>
      <ul>
        {ingredients.map((item: Ingredient) => (
          <li key={item.name}>
            <Checkbox
              checked={!item.inList}
              onChange={() => onChange(item.name)}
            >
              <span
                className={classNames(
                  "pl-2 dark:text-white text-black-primary",
                  {
                    ["line-through"]: !item.inList,
                  },
                )}
              >
                {item.name}
              </span>
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
