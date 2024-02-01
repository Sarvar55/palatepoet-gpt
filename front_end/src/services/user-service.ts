import { LoginPayload, RegisterPayload } from "@/types/types";

export default async function authenticate(payload: LoginPayload) {
  let result = null;
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    result = await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
}

export async function register(payload: RegisterPayload) {
  let result = null;
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Register failed");
    }
    result = await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
}
