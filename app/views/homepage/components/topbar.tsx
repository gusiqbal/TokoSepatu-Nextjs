import { Mail, Phone, User } from "lucide-react";
const TopBar = () => (
  <div className="bg-gray-50 border-b border-gray-200 py-2 text-xs text-gray-600">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <p>World Wide Completely Free Returns and Free Shipping</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Phone size={14} className="text-red-500" />
          <span>+00 123 456 789</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail size={14} className="text-red-500" />
          <span>demo@example.com</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 transition-colors">
          <User size={14} className="text-red-500" />
          <span>Account</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
