import { Truck, ShieldCheck, Percent, Headphones } from "lucide-react";

const Features = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: <Truck size={40} className="text-gray-700" />, title: "Free Home Delivery", desc: "For all orders over $100" },
        { icon: <ShieldCheck size={40} className="text-gray-700" />, title: "Secure Payment", desc: "100% secure payment method" },
        { icon: <Percent size={40} className="text-gray-700" />, title: "Order Discount", desc: "On every order over $150" },
        { icon: <Headphones size={40} className="text-gray-700" />, title: "24 x 7 Online Support", desc: "Online support 24/7" },
      ].map((feature, idx) => (
        <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow">
          {feature.icon}
          <div>
            <h4 className="font-bold text-gray-800">{feature.title}</h4>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
