import { RecipeForm } from "@/types/types";

const mapToRecipeForm = (json: any): RecipeForm => {
  const { cooking_time, difficulty, ingredients, meal_time, tools } =
    json.recipe;

  const recipeForm: RecipeForm = {
    cooking_time,
    difficulty,
    ingredients,
    meal_time,
    tools,
  };

  return recipeForm;
};

const parseJsonFromMarkdown = (markdownString: string): string | null => {
  var pattern = /```json([\s\S]*?)```/;
  var match = markdownString.match(pattern);

  if (match) {
    var parsedJson = match[1].trim();
    return parsedJson;
  } else {
    return null;
  }
};

export { parseJsonFromMarkdown, mapToRecipeForm };
