const PromoBanner = () => (
  <section className="relative py-24 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img
        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=2000"
        alt="Promo BG"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="relative w-full md:w-1/2">
        <div className="absolute -top-10 -left-10 w-full h-full border-4 border-white/20 hidden md:block" />
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
          alt="Promo Shoes"
          className="relative z-10 w-full rounded-sm shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-full md:w-1/2 text-white text-center md:text-left">
        <span className="text-red-500 text-2xl font-semibold">Saving 50%</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-4">
          All Online Store
        </h2>
        <p className="text-xl uppercase tracking-widest mb-8">
          OFFER AVAILABLE ALL SHOES &amp; PRODUCTS
        </p>
        <button className="bg-red-500 text-white px-10 py-4 font-bold hover:bg-red-600 transition-colors rounded-sm">
          Shop Now
        </button>
      </div>
    </div>
  </section>
);

export default PromoBanner;
