"use client";

import { useState } from "react";
import { useAuthModal } from "@/src/features/auth/store/auth-modal";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { UserService } from "@/src/services/UserService";

export default function LoginForm() {
  const { isOpen, mode, close, switchMode } = useAuthModal();
  const login = useAuthStore((state) => state.login);
  const userService = new UserService();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen || mode !== "login") return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const email = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      setLoading(true);
      const user = await userService.loginAPI(email, password);
      login(user, user.tokenValue);
      close();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        {error && (
          <p className="text-sm text-center text-red-600 bg-red-50 border border-red-200 rounded-md py-2 px-3">
            {error}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-red-500 rounded-md hover:cursor-pointer hover:bg-red-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={switchMode}
            className="text-red-500 hover:underline font-medium hover:cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
