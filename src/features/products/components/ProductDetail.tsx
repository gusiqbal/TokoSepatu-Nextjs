"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Zap, Truck, RotateCcw, Shield, Minus, Plus } from "lucide-react";
import { MockProduct } from "@/src/lib/mock-data";
import { useCartStore } from "@/src/features/cart/store/cart-store";
import SizeSelector from "./SizeSelector";
import ProductImageGallery from "./ProductImageGallery";
import Header from "@/src/components/layout/Header";
import TopBar from "@/src/features/home/components/TopBar";
import Footer from "@/src/components/layout/Footer";

interface Props {
  product: MockProduct;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= Math.round(rating) ? "text-yellow-400 text-lg" : "text-gray-200 text-lg"}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-500">
        {rating.toFixed(1)} · {count} reviews
      </span>
    </div>
  );
}

export default function ProductDetail({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "features">("description");
  const { addItem } = useCartStore();
  const router = useRouter();

  const finalPrice =
    product.discount > 0
      ? product.price - (product.price * product.discount) / 100
      : product.price;
  const fmt = (n: number) => new Intl.NumberFormat("id-ID").format(n);

  const buildCartPayload = () => ({
    id: product.id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    image: product.image,
    price: product.price,
    discount: product.discount,
    size: selectedSize!.toString(),
  });

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem(buildCartPayload(), quantity);
  };

  const handleBuyNow = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem(buildCartPayload(), quantity);
    router.push("/checkout");
  };

  return (
    <>
      <TopBar />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-500">{product.category}</span>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{product.name}</span>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Gallery */}
          <ProductImageGallery images={product.images} name={product.name} />

          {/* Right: Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{product.brand}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
              <div className="mt-2">
                <StarRating rating={product.rating} count={product.reviewCount} />
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-900">Rp {fmt(finalPrice)}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-lg text-gray-400 line-through">Rp {fmt(product.price)}</span>
                  <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded">
                    -{product.discount}%
                  </span>
                </>
              )}
            </div>

            <hr className="border-gray-100" />

            {/* Size selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">EU Size</span>
                <button className="text-xs text-red-500 underline">Size guide</button>
              </div>
              <SizeSelector
                availableSizes={product.sizes}
                selected={selectedSize}
                onSelect={(s) => { setSelectedSize(s); setSizeError(false); }}
              />
              {sizeError && (
                <p className="text-xs text-red-500 mt-2">Please select a size before adding to cart.</p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <span className="text-sm font-semibold text-gray-700 block mb-3">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-md w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-semibold text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">{product.stock} items in stock</p>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-red-500 text-red-500 rounded-md font-semibold hover:bg-red-50 transition-colors"
              >
                <ShoppingBag size={18} /> Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition-colors"
              >
                <Zap size={18} /> Buy Now
              </button>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100">
              {[
                { icon: <Truck size={18} />, label: "Free Delivery", sub: "Orders > Rp 500k" },
                { icon: <RotateCcw size={18} />, label: "30-Day Returns", sub: "No questions asked" },
                { icon: <Shield size={18} />, label: "Authentic", sub: "100% Genuine" },
              ].map((p) => (
                <div key={p.label} className="flex flex-col items-center text-center gap-1.5">
                  <span className="text-red-500">{p.icon}</span>
                  <span className="text-xs font-semibold text-gray-700">{p.label}</span>
                  <span className="text-[10px] text-gray-400">{p.sub}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full capitalize">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description / Features tabs */}
        <div className="mt-16">
          <div className="flex gap-8 border-b border-gray-100 mb-8">
            {(["description", "features"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "description" ? (
            <p className="text-gray-600 leading-relaxed max-w-2xl">{product.description}</p>
          ) : (
            <ul className="space-y-3 max-w-2xl">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
