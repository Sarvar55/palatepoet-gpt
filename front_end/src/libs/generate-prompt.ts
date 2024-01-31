import { RecipeForm } from "@/types/types";

export function generatePrompt(values: RecipeForm): string {
  return `
      You are an expert culinary chef who has cooked for the best restaurants in the world.
      Craft a delightful, creative and unique recipe with the following considerations:
  
      Rules:
        - Response must be in JSON format.
        - Recipe must have a creative Title.
        - Include detailed instructions with estimated cooking times for each step.
        - Utilize only the available ingredients (${values.ingredients}).
        - Tools to use in the kitchen (${values.tools})
        - Avoid incompatible ingredients based on the specified diet.
        - Ensure the cooking time is under ${values.cooking_time} minutes.
        - Evaluate the difficulty of execution as ${values.difficulty}.
        - The food you cook should be for (${values.meal_time}).
        - Be creative with the cooking techniques and flavor combinations
        - Feel free to incorporate herbs and spices for an extra burst of flavor
  
  
      The JSON object must include the following fields:
      - "title": [string]
      - "calories": [number],
      - "macros": {"protein": [number], "fats": [number], "carbs": [number]},
      - "ingredients": [{"name": [string], "amount": [string]}, ...] (based on the provided diet type and ingredients provided),
      - "instructions": [{"step": [number], "description": [string]}, ...]
      - "difficulty": [string] (based on the provided input)
      - "cooking_time": [number] (based on the provided input)
      
      Format the response as a valid JSON object with all fields filled. Here is the structure for reference:
      
      {
        "title": /* details */,
        "calories":  /* details */ ,
        "macros": { /* details */ },
        "ingredients": { /* details */ },
        "instructions": { /* details */ },
        "difficulty":  /* details */ ,
        "cooking_time":  /* details */ 
      }
      
      Respond only with the completed JSON object, without any additional explanatory or descriptive text. The JSON should be complete and ready for parsing. JSON.parse()
      It should not cause any errors when used and should be parsed directly.
    `;
}
