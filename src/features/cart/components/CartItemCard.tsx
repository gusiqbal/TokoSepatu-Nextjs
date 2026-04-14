"use client";

import { Minus, Plus, X } from "lucide-react";
import { CartItem } from "@/src/types/ICart";
import { useCartStore } from "@/src/features/cart/store/cart-store";

interface Props {
  item: CartItem;
}

export default function CartItemCard({ item }: Props) {
  const { updateQuantity, removeItem } = useCartStore();
  const finalPrice = item.discount > 0
    ? item.price - (item.price * item.discount) / 100
    : item.price;
  const formatted = new Intl.NumberFormat("id-ID").format(finalPrice * item.quantity);

  return (
    <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div className="w-20 h-20 bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="min-w-0 pr-2">
            <p className="text-xs text-gray-400 font-medium">{item.brand}</p>
            <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">Size: EU {item.size}</p>
          </div>
          <button
            onClick={() => removeItem(item.id, item.size)}
            className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center text-sm font-medium text-gray-800">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="text-sm font-bold text-gray-800">Rp {formatted}</span>
        </div>
      </div>
    </div>
  );
}
