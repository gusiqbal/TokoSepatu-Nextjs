"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "New Arrival", href: "/new-arrival" },
  { label: "Exclusive", href: "/exclusive" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Sale", href: "/sale", highlight: true },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-100 sticky top-18 z-40">
      <nav className="max-w-7xl mx-auto px-4 flex justify-center">
        <ul className="flex items-center gap-0 overflow-x-auto scrollbar-none">
          {NAV_LINKS.map(({ label, href, highlight }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="flex-shrink-0">
                <Link
                  href={href}
                  className={clsx(
                    "relative inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-bold tracking-wide transition-colors duration-200",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200",
                    highlight
                      ? [
                          "text-red-500 hover:text-red-600",
                          isActive
                            ? "after:bg-red-500"
                            : "after:bg-transparent hover:after:bg-red-300",
                        ]
                      : [
                          isActive
                            ? "text-gray-900 after:bg-gray-900"
                            : "text-gray-500 hover:text-gray-800 after:bg-transparent hover:after:bg-gray-300",
                        ],
                  )}
                >
                  {label.toUpperCase()}
                  {highlight && (
                    <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-sm leading-none">
                      %
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
