"use client";

import { Search, Heart, ShoppingBag, Users, Container } from "lucide-react";
import { useAuthModal } from "../helpers/auth-modal";
import { useAuthStore } from "../helpers/auth-store";

const Header = () => {
  const {IsloggedIn, User, login} = useAuthStore();
  const open = useAuthModal((state) => state.open);
  return (
      <header className="bg-white py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-4xl text-gray-800 font-bold tracking-tighter">
          Shome<span className="text-red-500">.</span>
        </div>
      
        <div className="flex-1 max-w-xl w-full">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full py-2.5 px-6 focus:outline-none focus:border-red-500 transition-colors"
            />
            <button className="absolute right-0 bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer group">
            <Heart size={24} className="text-gray-700 group-hover:text-red-500 transition-colors" />
            <span className="absolute p-2 -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <div className="relative cursor-pointer group">
            <ShoppingBag size={24} className="text-gray-700 group-hover:text-red-500 transition-colors" />
            <span className="absolute p-2 -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <div className="relative cursor-pointer group" onClick={open}>
            <Users size={24} className="text-gray-700 group-hover:text-red-500 transition-colors" />
            <span className="absolute p-2 -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
        {
          IsloggedIn && (
            <div className="absolute top-full right-50 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Orders</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">Logout</a>
            </div>
          )
        }
      </div>
      </header>
  )
};

export default Header;