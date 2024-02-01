import { RecipeForm } from "@/types/types";

const mapToRecipeForm = (json: any, locale: string): RecipeForm => {
  const { cooking_time, difficulty, ingredients, meal_time, tools } =
    json.recipe;

  const recipeForm: RecipeForm = {
    cooking_time,
    difficulty,
    ingredients,
    meal_time,
    tools,
    locale,
  };

  return recipeForm;
};

const parseJsonFromMarkdown = (markdownString: string): string | null => {
  const pattern = /```json([\s\S]*?)```/;
  const match = markdownString.match(pattern);

  if (match) {
    const parsedJson = match[1].trim();
    return parsedJson;
  } else {
    return null;
  }
};

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

export { parseJsonFromMarkdown, mapToRecipeForm, handleResponse };
