import { Recipe, RecipeForm } from "@/types/types";

const SERVER_ENDPOINT = "http://localhost:8000/api";

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

export async function apiGeminiResponse(prompt: string): Promise<Recipe> {
  try {
    const response = await fetch(`${SERVER_ENDPOINT}/completion`, {
      method: "POST",
      body: JSON.stringify(prompt),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return handleResponse<Recipe>(response);
  } catch (error) {
    console.log(error); // Hata durumunda hatayı yakalayıp konsolda göstermek için.
    throw error; // Hata durumunu yukarıdaki katmanlara iletmek için tekrar throw ediyoruz.
  }
}
