import { LoginPayload } from "@/types/types";

export default async function authenticate(payload: LoginPayload) {
  let result = null;
  try {
    result = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  } catch (error) {
    console.log(error.messages);
  } finally {
    return result;
  }
}
