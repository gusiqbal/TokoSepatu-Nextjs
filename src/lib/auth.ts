"use server";

import { cookies } from "next/headers";
import { UserService } from "@/src/services/UserService";

const userService = new UserService();

export async function loginUser(email: string, password: string) {
  const maxAge = 60 * 60 * 24; // 1 day in seconds

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    (await cookies()).set("token", data.token.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: maxAge,
    });

    await userService.getUser(data.token.accessToken);

    return { success: true, usertoken: data.token.accessToken };
  }

  return { success: false, message: data.message || "Login failed" };
}
