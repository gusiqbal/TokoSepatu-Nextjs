const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Client Feedback</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          There are many variations of passages of Lorem Ipsum available
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Jaren Hammer", role: "Customer", img: "https://i.pravatar.cc/150?u=jaren" },
          { name: "Dorian Cordova", role: "Customer", img: "https://i.pravatar.cc/150?u=dorian" },
        ].map((client, idx) => (
          <div key={idx} className="bg-white p-10 rounded-sm shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img
              src={client.img}
              alt={client.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
              referrerPolicy="no-referrer"
            />
            <div className="text-center md:text-left">
              <p className="text-gray-500 italic mb-6 leading-relaxed">
                &ldquo;Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna.&rdquo;
              </p>
              <h5 className="font-bold text-red-500">{client.name}</h5>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{client.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
