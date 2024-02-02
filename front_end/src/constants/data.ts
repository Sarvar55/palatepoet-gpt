import {
  cook,
  bookmark,
  shoppingBasket,
  door,
  kitchen,
  settings,
  logo,
  HeroImage,
} from "../../public";
import { Meal } from "@/types/types";

export const ImageIcons = {
  cook,
  bookmark,
  shoppingBasket,
  door,
  kitchen,
  settings,
  logo,
  hero: HeroImage,
};

export const mealData: Meal[] = [
  {
    mealName: "Spaghetti Bolognese",
    ingredients: [
      { name: "Spaghetti", inList: true },
      { name: "Ground beef", inList: true },
      { name: "Tomato sauce", inList: true },
      { name: "Onion", inList: true },
      { name: "Garlic", inList: false },
    ],
  },
  {
    mealName: "Chicken Caesar Salad",
    ingredients: [
      { name: "Chicken breast", inList: true },
      { name: "Romaine lettuce", inList: true },
      { name: "Parmesan cheese", inList: true },
      { name: "Croutons", inList: false },
      { name: "Caesar dressing", inList: true },
    ],
  },
];

export const ingredients = [
  { value: "salt", label: "Salt" },
  { value: "pepper", label: "Pepper" },
  { value: "onion", label: "Onion" },
  { value: "garlic", label: "Garlic" },
  { value: "tomato", label: "Tomato" },
  { value: "olive oil", label: "Olive Oil" },
  { value: "sugar", label: "Sugar" },
  { value: "flour", label: "Flour" },
  { value: "butter", label: "Butter" },
  { value: "milk", label: "Milk" },
  { value: "egg", label: "Egg" },
  { value: "cheese", label: "Cheese" },
  { value: "chicken", label: "Chicken" },
  { value: "beef", label: "Beef" },
  { value: "rice", label: "Rice" },
  { value: "pasta", label: "Pasta" },
  { value: "lettuce", label: "Lettuce" },
  { value: "carrot", label: "Carrot" },
  { value: "bell pepper", label: "Bell Pepper" },
  { value: "cucumber", label: "Cucumber" },
  { value: "avocado", label: "Avocado" },
];

export const mealTimes = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snack", label: "Snack" },
];

export const chefModes = [
  { value: "novice", label: "Novice" },
  { value: "intermediate", label: "Intermediate" },
  { value: "expert", label: "Expert" },
];

export const kitchenItems = [
  { id: "StoveTop", name: "Stove Top" },
  { id: "Oven", name: "Oven" },
  { id: "Blender", name: "Blender" },
  { id: "Toaster", name: "Toaster" },
  { id: "Microwave", name: "Microwave" },
  { id: "CoffeeMaker", name: "Coffee Maker" },
  { id: "Dishwasher", name: "Dishwasher" },
  { id: "Refrigerator", name: "Refrigerator" },
  { id: "CookwareSet", name: "Cookware Set" },
  { id: "CuttingBoard", name: "Cutting Board" },
  { id: "KnifeSet", name: "Knife Set" },
  { id: "UtensilHolder", name: "Utensil Holder" },
];
