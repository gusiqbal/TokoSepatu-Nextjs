import ProductCard from "./ProductCard";
import Shoes from "@/src/models/Shoes";
import { getAllProducts } from "@/src/lib/mock-data";

const FeaturedItems = () => {
  const shoes = getAllProducts().map(
    (data) =>
      new Shoes({
        ...data,
        id: Number(data.id),
        price: Number(data.price),
        discount: data.discount ?? 0,
      }),
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Featured Items
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            There are many variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {shoes.map((shoe) => (
            <ProductCard key={shoe.id} product={shoe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
