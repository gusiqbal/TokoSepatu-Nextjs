"use client";

import { useCartStore } from "@/src/features/cart/store/cart-store";

const SHIPPING_THRESHOLD = 500000;

export default function OrderSummary() {
  const { items, subtotal } = useCartStore();
  const sub = subtotal();
  const shipping = sub >= SHIPPING_THRESHOLD ? 0 : 25000;
  const total = sub + shipping;
  const fmt = (n: number) => new Intl.NumberFormat("id-ID").format(n);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
      <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>

      {/* Items */}
      <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
        {items.map((item) => {
          const finalPrice =
            item.discount > 0 ? item.price - (item.price * item.discount) / 100 : item.price;
          return (
            <div key={`${item.id}-${item.size}`} className="flex gap-3">
              <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400">{item.brand}</p>
                <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-500">Size: EU {item.size}</p>
              </div>
              <span className="text-sm font-bold text-gray-800 whitespace-nowrap">
                Rp {fmt(finalPrice * item.quantity)}
              </span>
            </div>
          );
        })}
      </div>

      <hr className="border-gray-100" />

      {/* Totals */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} items)</span>
          <span>Rp {fmt(sub)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
            {shipping === 0 ? "FREE" : `Rp ${fmt(shipping)}`}
          </span>
        </div>
        {sub > 0 && sub < SHIPPING_THRESHOLD && (
          <p className="text-xs text-orange-500">
            Add Rp {fmt(SHIPPING_THRESHOLD - sub)} more for free shipping
          </p>
        )}
        <hr className="border-gray-100" />
        <div className="flex justify-between font-bold text-gray-900 text-base">
          <span>Total</span>
          <span>Rp {fmt(total)}</span>
        </div>
      </div>
    </div>
  );
}
