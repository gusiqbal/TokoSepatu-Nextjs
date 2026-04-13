const CategoryBanner = () => (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Sports Shoes", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600" },
        { title: "New Arrival", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600" },
        { title: "New Sneakers", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600" }
      ].map((item, idx) => (
        <div key={idx} className="relative group overflow-hidden h-64 cursor-pointer">
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
            <span className="text-sm font-medium">Sale 50% Off</span>
            <h3 className="text-2xl font-bold uppercase mt-1">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryBanner;