export type MockProduct = {
  id: number;
  brand: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  sizes: number[];
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
};

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 1, brand: "Nike", name: "Leather Mens Slipper", category: "Men",
    price: 1000000, discount: 80,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Premium leather slippers from Nike engineered for all-day comfort. Featuring a supple leather upper and a cushioned footbed that contours to your foot, these slippers are the perfect companion for indoor and casual outdoor wear.",
    features: ["Premium full-grain leather upper", "Contoured memory foam insole", "Durable non-slip rubber outsole", "Easy slip-on design", "Available in wide fit"],
    sizes: [39, 40, 41, 42, 43, 44], rating: 4.5, reviewCount: 128, stock: 15,
    tags: ["leather", "slipper", "men", "comfort"],
  },
  {
    id: 2, brand: "Nike", name: "Quicklin Mens Shoes", category: "Men",
    price: 140000, discount: 0,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
    ],
    description: "The Quicklin is built for speed and agility. Featuring Nike's proprietary lightweight mesh upper and responsive foam midsole, this shoe delivers the performance you need on and off the track.",
    features: ["Engineered mesh upper for breathability", "Responsive Nike foam midsole", "Waffle outsole for multi-surface traction", "Padded collar for a secure fit", "Reflective details for low-light visibility"],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45], rating: 4.2, reviewCount: 89, stock: 30,
    tags: ["running", "men", "lightweight", "sport"],
  },
  {
    id: 3, brand: "Reebok", name: "Rexpo Womens Shoes", category: "Women",
    price: 60000, discount: 10,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    ],
    description: "The Rexpo is Reebok's answer to the modern woman's active lifestyle. A versatile training shoe that transitions seamlessly from the gym to the streets, combining bold style with all-day comfort.",
    features: ["Textile upper with supportive overlays", "EVA midsole for lightweight cushioning", "Flex groove outsole for natural movement", "Heel pull-tab for easy on/off", "Moisture-wicking lining"],
    sizes: [36, 37, 38, 39, 40, 41], rating: 4.0, reviewCount: 54, stock: 22,
    tags: ["training", "women", "gym", "lifestyle"],
  },
  {
    id: 4, brand: "Nike", name: "Hollister V-Neck Knit", category: "Unisex",
    price: 880000, discount: 0,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1495555961986-5747f5ad0eb4?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Premium knit construction meets street-ready style. The Hollister V-Neck Knit adapts to your foot's natural shape, providing a sock-like fit that feels custom-made from your first wear.",
    features: ["Seamless knit upper for adaptive fit", "Full-length Zoom Air unit", "Herringbone traction pattern", "Padded tongue and collar", "Signature V-Knit heel"],
    sizes: [37, 38, 39, 40, 41, 42, 43], rating: 4.7, reviewCount: 203, stock: 8,
    tags: ["knit", "premium", "unisex", "lifestyle"],
  },
  {
    id: 5, brand: "Vans", name: "Primitive Mens Shoes", category: "Men",
    price: 500000, discount: 0,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
    ],
    description: "A Vans x Primitive Skateboarding collaboration that blends street skate culture with modern design. Built for the streets and the skatepark, with vulcanized construction for boardfeel and flip-flop-proof grip.",
    features: ["Canvas and suede upper", "Vulcanized construction for boardfeel", "Waffle outsole for grip", "UltraCush HD sockliner", "Metal lace loops"],
    sizes: [40, 41, 42, 43, 44, 45], rating: 4.3, reviewCount: 77, stock: 18,
    tags: ["skate", "men", "collab", "street"],
  },
  {
    id: 6, brand: "Balenciaga", name: "New Womens High Heels", category: "Women",
    price: 3000000, discount: 10,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    ],
    description: "Balenciaga's iconic high heel silhouette reimagined for the modern wardrobe. Sculpted from premium Italian leather with a pointed toe and a statement 9cm stiletto heel. Refined luxury for every occasion.",
    features: ["Italian full-grain leather upper", "9cm stiletto heel", "Pointed toe silhouette", "Leather-lined interior", "Cushioned leather insole"],
    sizes: [36, 37, 38, 39, 40], rating: 4.8, reviewCount: 42, stock: 5,
    tags: ["heels", "women", "luxury", "designer"],
  },
  {
    id: 7, brand: "Adidas", name: "Simple Fabric Shoe", category: "Unisex",
    price: 133000, discount: 0,
    image: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    ],
    description: "The Adidas Simple Fabric Shoe strips performance back to its essentials. A breathable fabric upper, Cloudfoam midsole, and iconic Three Stripes make this the go-to everyday sneaker for the minimalist.",
    features: ["Breathable fabric upper", "Cloudfoam midsole for superior comfort", "OrthoLite sockliner", "Rubber outsole with pivot point", "Classic Three Stripes"],
    sizes: [38, 39, 40, 41, 42, 43, 44], rating: 3.9, reviewCount: 165, stock: 40,
    tags: ["casual", "unisex", "minimal", "everyday"],
  },
  {
    id: 8, brand: "Adidas", name: "Exclusive Mens Shoe", category: "Men",
    price: 300000, discount: 10,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=300",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    ],
    description: "An exclusive limited-edition from Adidas Originals, this men's shoe features a premium BOOST midsole for unparalleled energy return and a statement upper that sets you apart from the crowd.",
    features: ["Premium textile and leather upper", "Full-length BOOST midsole", "Continental rubber outsole", "Heat-bonded 3-Stripes", "Textile lining for comfort"],
    sizes: [39, 40, 41, 42, 43, 44, 45], rating: 4.6, reviewCount: 91, stock: 12,
    tags: ["boost", "men", "premium", "limited"],
  },
];

export function getProductById(id: number): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}

export function getAllProducts(): MockProduct[] {
  return MOCK_PRODUCTS;
}
