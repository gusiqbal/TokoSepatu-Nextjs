"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, UserCircle } from "lucide-react";
import { useAuthModal } from "@/src/features/auth/store/auth-modal";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { useCartStore } from "@/src/features/cart/store/cart-store";

const Header = () => {
  const { IsloggedIn } = useAuthStore();
  const { open: openAuth } = useAuthModal();
  const { openCart, itemCount } = useCartStore();
  const count = itemCount();

  return (
    <header className="bg-white py-4 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="text-4xl text-gray-800 font-bold tracking-tighter flex-shrink-0"
        >
          Shome<span className="text-red-500">.</span>
        </Link>

        <div className="flex-1 max-w-xl w-full">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for shoes..."
              className="w-full border border-gray-300 rounded-full py-2.5 px-6 focus:outline-none focus:border-red-500 transition-colors text-sm text-gray-700 "
            />
            <button className="absolute right-0 bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors hover:cursor-pointer">
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <button className="relative text-gray-600 hover:text-red-500 transition-colors">
            <Heart size={22} />
          </button>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative text-gray-600 hover:text-red-500 transition-colors hover:cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingBag size={22} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </button>

          {/* Account */}
          {IsloggedIn ? (
            <Link
              href="/profile"
              className="relative text-gray-600 hover:text-red-500 transition-colors "
              aria-label="My account"
            >
              <UserCircle size={22} />
            </Link>
          ) : (
            <button
              onClick={() => openAuth("login")}
              className="relative text-gray-600 hover:text-red-500 transition-colors hover:cursor-pointer"
              aria-label="Sign in"
            >
              <UserCircle size={22} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
