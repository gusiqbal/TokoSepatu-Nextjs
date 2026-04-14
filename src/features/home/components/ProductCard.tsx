import Link from "next/link";
import { Heart, Search, ShoppingBag, TicketPercent } from "lucide-react";
import clsx from "clsx";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="group">
    <Link href={`/products/${product.id}`} className="block">
      <div className="relative bg-gray-50 aspect-square overflow-hidden mb-4 rounded-sm ">
        {product.discount > 0 && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-[13px] font-bold px-2 py-1 rounded-sm z-10">
            -{product.discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <span className="bg-white p-3 rounded-full shadow-sm hover:bg-red-400 text-gray-700 hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </span>
          <span className="bg-white p-3 rounded-full shadow-sm hover:bg-red-400 text-gray-700 hover:text-white transition-colors">
            <Heart size={18} />
          </span>
          <span className="bg-white p-3 rounded-full shadow-sm hover:bg-red-400 text-gray-700 hover:text-white transition-colors">
            <Search size={18} />
          </span>
        </div>
      </div>
    </Link>
    <div className="text-center md:text-left">
      <p className="text-xs text-gray-400 mb-1">{product.category}</p>
      <Link href={`/products/${product.id}`}>
        <h4 className="font-semibold text-gray-800 hover:text-red-500 transition-colors cursor-pointer mb-1">
          {product.name}
        </h4>
      </Link>
      <div className="flex items-center justify-center md:justify-start gap-2">
        <span
          className={clsx(
            product.hasDiscount()
              ? "text-red-500 border-red-500 border rounded-md px-1 bg-red-50"
              : "text-gray-800",
            "font-bold flex items-center gap-1 text-sm",
          )}
        >
          {product.hasDiscount() && <TicketPercent size={16} />}
          Rp. {product.priceAfterDiscount}
        </span>
        {product.hasDiscount() && (
          <span className="text-gray-400 text-xs line-through">
            Rp. {product.getFormattedPrice()}
          </span>
        )}
      </div>
      <div className="mt-1">
        <span className="text-xs text-gray-500">{product.brand}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
