"use client";

import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { useAuthModal } from "@/src/features/auth/store/auth-modal";
import ProfileInfo from "@/src/features/profile/components/ProfileInfo";
import OrderHistory from "@/src/features/profile/components/OrderHistory";
import Header from "@/src/components/layout/Header";
import TopBar from "@/src/features/home/components/TopBar";
import Footer from "@/src/components/layout/Footer";
import { UserCircle } from "lucide-react";

export default function ProfilePage() {
  const { IsloggedIn } = useAuthStore();
  const { open } = useAuthModal();

  return (
    <>
      <TopBar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">My Account</h1>

        {!IsloggedIn ? (
          <div className="flex flex-col items-center justify-center gap-5 py-24 text-gray-400">
            <UserCircle size={64} strokeWidth={1} />
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-600">Sign in to view your account</p>
              <p className="text-sm mt-1">Access your profile, orders, and more</p>
            </div>
            <button
              onClick={() => open("login")}
              className="px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-semibold"
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
            <div className="lg:sticky lg:top-24">
              <ProfileInfo />
            </div>
            <OrderHistory />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
