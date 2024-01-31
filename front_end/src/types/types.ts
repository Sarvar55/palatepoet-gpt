export interface Recipe {
  title: string;
  cooking_time: number;
  calories: number;
  difficulty: string;
  macros: {
    protein: number;
    fats: number;
    carbs: number;
  };
  ingredients: Array<{ name: string; amount: number | string }>;
  instructions: Array<{ step: number; description: string | string }>;
}

export interface RecipeForm {
  ingredients: Array<string>;
  cooking_time: number;
  difficulty: string;
  tools: string[];
  meal_time: string;
}

export interface SidebarLink {
  id: string;
  icon: string;
  text: string;
  href: string;
}

export interface CookBook {}

export interface Ingredient {
  ingredientName: string;
  inList: boolean;
}

export interface Meal {
  mealName: string;
  ingredients: [Ingredient];
}

export interface User {
  userId: string;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}
