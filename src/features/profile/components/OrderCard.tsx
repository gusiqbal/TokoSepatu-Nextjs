"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Package } from "lucide-react";
import { Order, OrderStatus } from "@/src/types/IOrder";
import clsx from "clsx";

interface Props {
  order: Order;
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; cls: string }> = {
  pending:    { label: "Pending",    cls: "bg-yellow-100 text-yellow-700" },
  processing: { label: "Processing", cls: "bg-blue-100 text-blue-700" },
  shipped:    { label: "Shipped",    cls: "bg-purple-100 text-purple-700" },
  delivered:  { label: "Delivered",  cls: "bg-green-100 text-green-700" },
  cancelled:  { label: "Cancelled",  cls: "bg-red-100 text-red-600" },
};

export default function OrderCard({ order }: Props) {
  const [expanded, setExpanded] = useState(false);
  const fmt = (n: number) => new Intl.NumberFormat("id-ID").format(n);
  const status = STATUS_CONFIG[order.status];
  const date = new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(new Date(order.createdAt));
  const itemCount = order.items.reduce((a, i) => a + i.quantity, 0);

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header row */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
            <Package size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800 font-mono">{order.id}</p>
            <p className="text-xs text-gray-400 mt-0.5">{date} · {itemCount} item{itemCount > 1 ? "s" : ""}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={clsx("text-xs font-semibold px-2.5 py-1 rounded-full", status.cls)}>
            {status.label}
          </span>
          <span className="font-bold text-gray-800">Rp {fmt(order.total)}</span>
          {expanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-gray-100 p-5 space-y-5">
          {/* Items */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-700">Items</h4>
            {order.items.map((item) => {
              const finalPrice = item.discount > 0 ? item.price - (item.price * item.discount) / 100 : item.price;
              return (
                <div key={`${item.id}-${item.size}`} className="flex gap-3 items-center">
                  <div className="w-14 h-14 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400">{item.brand}</p>
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">Size EU {item.size} · Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Rp {fmt(finalPrice * item.quantity)}</span>
                </div>
              );
            })}
          </div>

          {/* Shipping address */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Shipped to</h4>
            <p className="text-sm text-gray-600">
              {order.shippingAddress.fullName} · {order.shippingAddress.phone}
            </p>
            <p className="text-sm text-gray-500">
              {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.province} {order.shippingAddress.postalCode}
            </p>
          </div>

          {/* Totals */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-1.5 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>Rp {fmt(order.subtotal)}</span></div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className={order.shipping === 0 ? "text-green-600" : ""}>{order.shipping === 0 ? "FREE" : `Rp ${fmt(order.shipping)}`}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 pt-1 border-t border-gray-200">
              <span>Total</span>
              <span>Rp {fmt(order.total)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Payment: <span className="capitalize font-medium text-gray-600">{order.paymentMethod.replace("_", " ")}</span></span>
          </div>
        </div>
      )}
    </div>
  );
}
