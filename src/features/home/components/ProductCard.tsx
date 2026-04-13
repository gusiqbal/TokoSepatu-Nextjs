import { Heart, Search, ShoppingBag, TicketPercent } from "lucide-react";
import clsx from "clsx";

interface ProductCardProps {
  product: any;
  key?: React.Key;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="group">
    <div className="relative bg-gray-50 aspect-square overflow-hidden mb-4 rounded-sm">
      {product.discount && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-[13px] font-bold px-2 py-1 rounded-sm z-10">
          -{product.discount}%
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full p-2 object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
        <button className="bg-white p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm">
          <ShoppingBag size={18} />
        </button>
        <button className="bg-white p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm">
          <Heart size={18} />
        </button>
        <button className="bg-white p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-sm">
          <Search size={18} />
        </button>
      </div>
    </div>
    <div className="text-center md:text-left">
      <p className="text-xs text-gray-400 mb-1">{product.category}</p>
      <h4 className="font-semibold text-gray-800 hover:text-red-500 transition-colors cursor-pointer mb-1">
        {product.name}
      </h4>
      <div className="flex items-center justify-center md:justify-start gap-2">
        <span className={clsx(product.hasDiscount() ? "text-red-500 border-red-500 border rounded-md px-1 bg-[rgb(255,245,246)]" : "text-gray-800", "font-bold flex items-center gap-1")}>
          {product.hasDiscount() && <TicketPercent size={20} />} Rp. {product.priceAfterDiscount}
        </span>
        {product.hasDiscount() && (
          <span className="text-gray-400 text-sm line-through">${product.price}</span>
        )}
      </div>
      <div className="flex items-center justify-start gap-2 mt-2">
        <span className="text-sm text-gray-500">{product.brand}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
