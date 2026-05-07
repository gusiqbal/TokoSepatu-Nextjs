"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import User from "@/src/models/User";

export default function GoogleCallbackPage() {
  const { data: session, status } = useSession();
  const { login } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "authenticated" && session?.user) {
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
      router.push("/profile");
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [session, status, login, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-sm animate-pulse">Signing you in...</p>
    </div>
  );
}
