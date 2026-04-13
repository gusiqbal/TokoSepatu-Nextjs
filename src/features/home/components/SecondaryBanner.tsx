const SecondaryBanners = () => (
  <section className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Sports Shoes", price: "95.00", color: "bg-purple-100", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600" },
        { title: "Latest Shoes", price: "90.00", color: "bg-orange-100", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600" },
        { title: "Office Shoes", price: "82.00", color: "bg-blue-100", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600" },
      ].map((item, idx) => (
        <div key={idx} className={`${item.color} relative group overflow-hidden h-80 cursor-pointer rounded-sm p-8 flex flex-col justify-between`}>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-lg font-medium text-gray-600">From ${item.price}</p>
          </div>
          <img
            src={item.img}
            alt={item.title}
            className="absolute bottom-0 right-0 w-3/4 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </div>
  </section>
);

export default SecondaryBanners;
