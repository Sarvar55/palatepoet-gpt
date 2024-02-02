import { HTTP_METHODS, SERVER_ENDPOINT_V1 } from "@/constants/constants";
import { handleResponse } from "@/libs/mapper";
import { PasswordChangeLayload, UserPayload } from "@/types/payloads";
import { LoginPayload, RegisterPayload } from "@/types/payloads";

export default async function authenticate(payload: LoginPayload) {
  try {
    const response = await baseService(
      HTTP_METHODS.POST,
      SERVER_ENDPOINT_V1 + "/auth/login",
      payload,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function register(payload: RegisterPayload) {
  try {
    const response = await baseService(
      HTTP_METHODS.POST,
      SERVER_ENDPOINT_V1 + "/auth/register",
      payload,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function changeUserCredentials(
  userId: string,
  payload: UserPayload,
) {
  try {
    const response = await baseService(
      HTTP_METHODS.PUT,
      SERVER_ENDPOINT_V1 + "/users/".concat(userId),
      payload,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function changeUserEmail(userId: string, payload: UserPayload) {
  try {
    const response = await baseService(
      HTTP_METHODS.PUT,
      SERVER_ENDPOINT_V1 + "/user/email/" + userId,
      payload,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function changeUserPassword(userId: string, payload: any) {
  try {
    const response = await baseService(
      HTTP_METHODS.PUT,
      SERVER_ENDPOINT_V1 + "/user/password/" + userId,
      payload,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const baseService = async <T>(
  method: string = HTTP_METHODS.GET,
  path: string,
  body: any,
): Promise<T> => {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return handleResponse(response);
};
