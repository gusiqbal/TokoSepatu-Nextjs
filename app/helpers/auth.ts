"user server";

import { cookies } from "next/headers";

export async function loginUser(email: string, password: string) {

    const maxAge = 60 * 60 * 24; // 1 day in seconds

    const response = await fetch("https://api.example.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        (await cookies()).set("token", data.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: maxAge,
        });
        return { success: true };
    }

    return { success: false, message: data.message || "Login failed" };
}