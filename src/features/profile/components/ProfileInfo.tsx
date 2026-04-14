"use client";

import { Mail, Calendar, LogOut } from "lucide-react";
import { useAuthStore } from "@/src/features/auth/store/auth-store";

export default function ProfileInfo() {
  const { User, logout } = useAuthStore();

  if (!User) return null;

  const initials = `${User.firstName[0] ?? ""}${User.lastName?.[0] ?? ""}`.toUpperCase();

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold select-none flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-gray-800 truncate">{User.fullName}</h2>
          <span className="inline-block text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
            Active Member
          </span>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Details */}
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-sm text-gray-600">
          <Mail size={16} className="text-gray-400 flex-shrink-0" />
          <span className="truncate">{User.email}</span>
        </li>
        <li className="flex items-center gap-3 text-sm text-gray-600">
          <Calendar size={16} className="text-gray-400 flex-shrink-0" />
          <span>Joined {User.joinedDate}</span>
        </li>
      </ul>

      <hr className="border-gray-100" />

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
      >
        <LogOut size={16} /> Sign Out
      </button>
    </div>
  );
}
