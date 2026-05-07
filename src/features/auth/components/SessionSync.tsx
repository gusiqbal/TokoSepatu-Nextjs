"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import User from "@/src/models/User";

export default function SessionSync() {
  const { data: session, status } = useSession();
  const { IsloggedIn, login } = useAuthStore();

  useEffect(() => {
    if (status === "authenticated" && session?.user && !IsloggedIn) {
      const googleUser = new User({
        id: 0,
        name: session.user.name || "",
        username: session.user.email || "",
        email: session.user.email || "",
        is_active: true,
        created_at: new Date().toISOString(),
        avatar: session.user.image ?? undefined,
      });
      login(googleUser, "google");
    }
  }, [session, status, IsloggedIn, login]);

  return null;
}
