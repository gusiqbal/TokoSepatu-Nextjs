"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useOrderStore } from "@/src/features/profile/store/order-store";
import OrderCard from "./OrderCard";

export default function OrderHistory() {
  const { orders } = useOrderStore();

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 flex flex-col items-center text-center gap-4">
        <ShoppingBag size={52} strokeWidth={1} className="text-gray-300" />
        <div>
          <p className="font-semibold text-gray-600">No orders yet</p>
          <p className="text-sm text-gray-400 mt-1">Your completed orders will appear here</p>
        </div>
        <Link
          href="/"
          className="mt-2 px-6 py-2.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-semibold"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">Order History</h2>
        <span className="text-sm text-gray-400">{orders.length} order{orders.length > 1 ? "s" : ""}</span>
      </div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
