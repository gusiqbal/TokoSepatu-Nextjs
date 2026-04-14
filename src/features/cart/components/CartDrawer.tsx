"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/src/features/cart/store/cart-store";
import CartItemCard from "./CartItemCard";

export default function CartDrawer() {
  const { items, isOpen, closeCart, itemCount, subtotal } = useCartStore();
  const count = itemCount();
  const sub = subtotal();
  const SHIPPING_THRESHOLD = 500000;
  const shipping = sub >= SHIPPING_THRESHOLD || sub === 0 ? 0 : 25000;
  const total = sub + shipping;
  const fmt = (n: number) => new Intl.NumberFormat("id-ID").format(n);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50"
            onClick={closeCart}
          />

          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-gray-700" />
                <h2 className="text-lg font-bold text-gray-800">
                  Cart <span className="text-red-500">({count})</span>
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Free shipping bar */}
            {sub > 0 && sub < SHIPPING_THRESHOLD && (
              <div className="px-6 py-3 bg-red-50 border-b border-red-100">
                <p className="text-xs text-red-600">
                  Add <span className="font-bold">Rp {fmt(SHIPPING_THRESHOLD - sub)}</span> more for free shipping!
                </p>
                <div className="mt-1.5 h-1.5 bg-red-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full transition-all"
                    style={{ width: `${Math.min((sub / SHIPPING_THRESHOLD) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                  <ShoppingBag size={52} strokeWidth={1} />
                  <div className="text-center">
                    <p className="font-semibold text-gray-600">Your cart is empty</p>
                    <p className="text-sm mt-1">Add some products to get started</p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartItemCard key={`${item.id}-${item.size}`} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-100 space-y-3 bg-gray-50">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>Rp {fmt(sub)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                      {shipping === 0 ? "FREE" : `Rp ${fmt(shipping)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800 text-base pt-1 border-t border-gray-200">
                    <span>Total</span>
                    <span>Rp {fmt(total)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full py-3 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors font-semibold"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full py-2.5 text-gray-700 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
