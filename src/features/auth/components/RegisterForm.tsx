"use client";

import { useState } from "react";
import { useAuthModal } from "@/src/features/auth/store/auth-modal";
import { UserService } from "@/src/services/UserService";
import { Eye, EyeOff } from "lucide-react";
import SuccessRegister from "./SuccessRegister";

export default function RegisterForm() {
  const { isOpen, mode, close, switchMode } = useAuthModal();
  const userService = new UserService();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen || mode !== "register") return null;

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const rePassword = (
      form.elements.namedItem("re-password") as HTMLInputElement
    ).value;

    if (password !== rePassword) {
      setError("Password tidak cocok");
      return;
    }

    try {
      setLoading(true);
      await userService.registerUser({
        username,
        email,
        password,
        name: username,
        is_active: true,
      });
      setShowSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess)
    return (
      <SuccessRegister
        onContinue={() => {
          setShowSuccess(false);
          switchMode();
        }}
      />
    );

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
          Create Your Account
        </h2>

        {error && (
          <p className="text-sm text-center text-red-600 bg-red-50 border border-red-200 rounded-md py-2 px-3">
            {error}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 mt-1 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 mt-1 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
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
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 mt-1 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-10 top-74 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div>
            <label
              htmlFor="re-password"
              className="block text-sm font-medium text-gray-700"
            >
              Re-enter Password
            </label>
            <input
              type={showRePassword ? "text" : "password"}
              id="re-password"
              name="re-password"
              required
              className="w-full px-3 py-2 mt-1 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowRePassword((s) => !s)}
            className="absolute right-10 top-94.5 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-red-500 rounded-md hover:cursor-pointer hover:bg-red-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={switchMode}
            className="text-red-500 hover:cursor-pointer hover:underline font-medium"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
