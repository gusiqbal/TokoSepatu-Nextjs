"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, CreditCard, Building2, Package, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/src/features/cart/store/cart-store";
import { useOrderStore } from "@/src/features/profile/store/order-store";
import { useAuthStore } from "@/src/features/auth/store/auth-store";
import { useAuthModal } from "@/src/features/auth/store/auth-modal";
import { ShippingAddress, Order, OrderItem } from "@/src/types/IOrder";
import OrderSummary from "./OrderSummary";
import Header from "@/src/components/layout/Header";
import TopBar from "@/src/features/home/components/TopBar";
import Footer from "@/src/components/layout/Footer";

type PaymentMethod = "card" | "bank_transfer" | "cod";

const SHIPPING_THRESHOLD = 500000;

function FieldGroup({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";

export default function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCartStore();
  const { addOrder } = useOrderStore();
  const { IsloggedIn } = useAuthStore();
  const { open: openAuth } = useAuthModal();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const sub = subtotal();
  const shipping = sub >= SHIPPING_THRESHOLD ? 0 : 25000;
  const total = sub + shipping;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!IsloggedIn) { openAuth("login"); return; }
    if (items.length === 0) return;

    const form = e.currentTarget;
    const get = (name: string) => (form.elements.namedItem(name) as HTMLInputElement)?.value ?? "";

    const shippingAddress: ShippingAddress = {
      fullName: get("fullName"),
      phone: get("phone"),
      street: get("street"),
      city: get("city"),
      province: get("province"),
      postalCode: get("postalCode"),
    };

    const orderItems: OrderItem[] = items.map((i) => ({
      id: i.id, name: i.name, brand: i.brand, image: i.image,
      price: i.price, discount: i.discount, size: i.size, quantity: i.quantity,
    }));

    const newOrderId = `ORD-${Date.now()}`;
    const order: Order = {
      id: newOrderId,
      items: orderItems,
      subtotal: sub,
      shipping,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
      shippingAddress,
      paymentMethod,
    };

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate API call
    addOrder(order);
    clearCart();
    setOrderId(newOrderId);
    setSuccess(true);
    setLoading(false);
  };

  // Guard: empty cart
  if (!success && items.length === 0) {
    return (
      <>
        <TopBar />
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-gray-400">
          <Package size={56} strokeWidth={1} />
          <p className="text-lg font-semibold text-gray-600">Your cart is empty</p>
          <Link href="/" className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-semibold">
            Browse Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Success screen
  if (success) {
    return (
      <>
        <TopBar />
        <Header />
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
          <div className="text-green-500">
            <CheckCircle size={72} strokeWidth={1.5} />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">Order Confirmed!</h2>
            <p className="text-gray-500">Thank you for your purchase. We&apos;re preparing your order.</p>
            <p className="text-sm text-gray-400">
              Order ID: <span className="font-mono font-semibold text-gray-700">{orderId}</span>
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <Link
              href="/profile"
              className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-semibold"
            >
              View My Orders
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
            {/* Left: Form */}
            <div className="space-y-8">
              {/* Contact */}
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h2 className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">1</span>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FieldGroup label="Full Name" id="fullName">
                    <input id="fullName" name="fullName" type="text" required placeholder="John Doe" className={inputCls} />
                  </FieldGroup>
                  <FieldGroup label="Phone Number" id="phone">
                    <input id="phone" name="phone" type="tel" required placeholder="+62 812 3456 7890" className={inputCls} />
                  </FieldGroup>
                </div>
                <FieldGroup label="Email Address" id="checkoutEmail">
                  <input id="checkoutEmail" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                </FieldGroup>
              </section>

              {/* Shipping */}
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h2 className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">2</span>
                  Shipping Address
                </h2>
                <FieldGroup label="Street Address" id="street">
                  <input id="street" name="street" type="text" required placeholder="Jl. Sudirman No. 1" className={inputCls} />
                </FieldGroup>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FieldGroup label="City" id="city">
                    <input id="city" name="city" type="text" required placeholder="Jakarta" className={inputCls} />
                  </FieldGroup>
                  <FieldGroup label="Province" id="province">
                    <input id="province" name="province" type="text" required placeholder="DKI Jakarta" className={inputCls} />
                  </FieldGroup>
                  <FieldGroup label="Postal Code" id="postalCode">
                    <input id="postalCode" name="postalCode" type="text" required placeholder="12930" className={inputCls} />
                  </FieldGroup>
                </div>
              </section>

              {/* Payment */}
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
                <h2 className="font-bold text-gray-800 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
                  Payment Method
                </h2>

                <div className="grid grid-cols-3 gap-3">
                  {([
                    { key: "card", label: "Credit Card", icon: <CreditCard size={18} /> },
                    { key: "bank_transfer", label: "Bank Transfer", icon: <Building2 size={18} /> },
                    { key: "cod", label: "Cash on Delivery", icon: <Package size={18} /> },
                  ] as const).map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setPaymentMethod(m.key)}
                      className={`flex flex-col items-center gap-2 p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                        paymentMethod === m.key
                          ? "border-red-500 text-red-500 bg-red-50"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {m.icon}
                      <span className="text-center leading-tight">{m.label}</span>
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-2">
                    <FieldGroup label="Card Number" id="cardNumber">
                      <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" maxLength={19}
                        className={inputCls} onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                          e.target.value = v.replace(/(.{4})/g, "$1 ").trim();
                        }} />
                    </FieldGroup>
                    <FieldGroup label="Cardholder Name" id="cardName">
                      <input id="cardName" type="text" placeholder="JOHN DOE" className={inputCls} />
                    </FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <FieldGroup label="Expiry Date" id="expiry">
                        <input id="expiry" type="text" placeholder="MM/YY" maxLength={5} className={inputCls} />
                      </FieldGroup>
                      <FieldGroup label="CVV" id="cvv">
                        <input id="cvv" type="password" placeholder="•••" maxLength={4} className={inputCls} />
                      </FieldGroup>
                    </div>
                  </div>
                )}

                {paymentMethod === "bank_transfer" && (
                  <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700 space-y-1">
                    <p className="font-semibold">Transfer to:</p>
                    <p>Bank BCA — Account No: <span className="font-mono font-bold">1234567890</span></p>
                    <p>Account Name: <span className="font-semibold">PT Shome Indonesia</span></p>
                    <p className="text-xs text-blue-500 mt-2">Upload your transfer receipt after placing the order.</p>
                  </div>
                )}

                {paymentMethod === "cod" && (
                  <div className="bg-orange-50 rounded-lg p-4 text-sm text-orange-700">
                    <p className="font-semibold">Cash on Delivery</p>
                    <p className="mt-1">Please prepare the exact amount when your order arrives. COD fee: <span className="font-bold">Rp 5,000</span></p>
                  </div>
                )}
              </section>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-red-500 text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                    </svg>
                    Placing Order...
                  </span>
                ) : (
                  <>Place Order <ChevronRight size={20} /></>
                )}
              </button>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <OrderSummary />
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
