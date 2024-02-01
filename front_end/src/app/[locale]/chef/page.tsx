"use client";
import React, { useCallback, useState } from "react";

import Layout from "@/components/layout";
import RecipeForm from "@/components/recipe-form";
import { useCompletion } from "ai/react";
import { generatePrompt } from "@/libs/generate-prompt";
import { mapToRecipeForm, parseJsonFromMarkdown } from "@/libs/mapper";
import {
  Recipe as RecipeType,
  RecipeForm as RecipeFormType,
} from "@/types/types";
import Recipe from "@/components/recipe";
import { useLocale } from "next-intl";

//Todo: ilk olarak yapman gerek şey bu ki useCompletion hokunu burada kullanıp isLoading parametresini buradan digerine gondermek
// onsFinish methodu bu o zaman burada olmak zorunda kalıyor daha sonra ise
export default function Page() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [showNewForm, setShowNewForm] = useState<boolean>(false);
  const locale = useLocale();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  const { complete, isLoading } = useCompletion({
    api: "/api/completion",
  });

  const onSubmit = useCallback(
    async (recipe: RecipeFormType) => {
      const prompt = generatePrompt(recipe);
      const completion = await complete(prompt);
      if (!completion) throw new Error("Failed to completion");
      try {
        const json = parseJsonFromMarkdown(completion);
        if (json == null) return;
        const result = JSON.parse(json);
        setRecipe(result);
        setShowNewForm(true);
        console.log(result);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    },
    [complete],
  );

  const onFinish = (values: any) => {
    if (values == null || values == undefined) return;
    const recipe = mapToRecipeForm(values, locale);
    onSubmit(recipe);
  };

  return (
    <Layout>
      <div className="w-full flex justify-center items-center">
        <div className="flex w-full justify-center items-center my-16">
          <div className="w-[90%] flex flex-col justify-center items-start space-y-10">
            {!showNewForm ? (
              <RecipeForm
                setIsClick={setIsClick}
                onFinish={onFinish}
                isLoading={isLoading}
              />
            ) : (
              <Recipe recipe={recipe} /> // Yeni formu burada render edin
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
