const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="text-3xl font-bold text-white mb-6">
          Shome<span className="text-red-500">.</span>
        </div>
        <p className="text-sm leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore
        </p>
        <div className="flex gap-4" />
      </div>

      <div>
        <h4 className="text-white font-bold text-lg mb-8">Services</h4>
        <ul className="space-y-4 text-sm">
          {["Home monitoring", "Air Filters", "Professional installation", "Smart Buildings", "For contractors"].map((item, idx) => (
            <li key={idx} className="hover:text-red-500 cursor-pointer transition-colors">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold text-lg mb-8">My Account</h4>
        <ul className="space-y-4 text-sm">
          {["My Account", "Contact", "Shopping cart", "Shop", "Services Login"].map((item, idx) => (
            <li key={idx} className="hover:text-red-500 cursor-pointer transition-colors">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold text-lg mb-8">Contact Info</h4>
        <ul className="space-y-4 text-sm">
          <li>Address: Your address goes here.</li>
          <li>Phone//fax: 0123456789</li>
          <li>Email: demo@example.com</li>
          <li>www.example.com</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© 2021 Shome. Made with ❤️ by Codecarnival.</p>
        <div className="flex gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6 opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
