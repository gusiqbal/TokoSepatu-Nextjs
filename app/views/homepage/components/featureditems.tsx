import ProductCard from "./productcard";
import Shoes from "@/app/models/Shoes";

const FeaturedItems = () => {
  const contohRawData = [
    { id: 1, brand:"Nike", name: "Leather Mens Slipper", category: "Men/Women", price: "1000000", discount: 80, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300" },
    { id: 2, brand:"Nike", name: "Quicklin Mens shoes", category: "Men/Women", price: "140000", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300" },
    { id: 3, brand:"Reebok", name: "Rexpo Womens shoes", category: "Men/Women", price: "60000", discount: 10, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=300" },
    { id: 4, brand:"Nike", name: "Hollister V-Neck Knit", category: "Men/Women", price: "880000", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300" },
    { id: 5, brand:"Vans", name: "Primitive Mens shoes", category: "Men/Women", price: "500000", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=300" },
    { id: 6, brand:"Balenciaga", name: "New Womens High Hills", category: "Men/Women", price: "3000000", oldPrice: "333.00", discount: 10, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300" },
    { id: 7, brand:"Adidas", name: "Simple Fabric Shoe", category: "Men/Women", price: "133000", image: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=300" },
    { id: 8, brand:"Adidas", name: "exclusive mens shoe", category: "Men/Women", price: "300000", oldPrice: "420.00", discount: 10, image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=300" },
    ];
    
  const shoes = contohRawData.map(data => {
    return new Shoes({
      ...data,
      id: Number(data.id),
      price: Number(data.price),
      oldPrice: data.oldPrice ? Number(data.oldPrice) : 0,
      discount: data.discount ?? 0
    })
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Items</h2>
          <p className="text-gray-500 max-w-lg mx-auto">There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shoes.map(shoe => (
            <ProductCard key={shoe.id} product={shoe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;