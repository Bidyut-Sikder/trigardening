// import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

// export default function HomeLayout() {
//   return (
//     <nav className="bg-teal-400 text-white py-3">
//       <div className="container mx-auto flex items-center justify-between px-4">

//         <div className="text-xl font-bold flex items-center gap-2">
//           <span className="bg-white p-1 rounded-full text-primary font-extrabold">✿</span>
//           TriGardening
//         </div>

//         <ul className="hidden md:flex gap-8 font-medium">
//           <li className="hover:text-secondary cursor-pointer">Home</li>
//           <li className="hover:text-secondary cursor-pointer">Products</li>
//           <li className="hover:text-secondary cursor-pointer">Blog</li>
//           <li className="hover:text-secondary cursor-pointer">Plant Clinic</li>
//         </ul>

//         <div className="flex items-center gap-4">
//           <button className="hidden md:flex bg-secondary text-primary font-semibold px-4 py-2 rounded-lg">
//             Call Now
//           </button>

//           <FiSearch className="text-xl cursor-pointer" />
//           <FiShoppingCart className="text-xl cursor-pointer" />
//           <FiUser className="text-xl cursor-pointer" />
//         </div>

//       </div>
//     </nav>
//   );
// }

"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  User,
  Phone,
  Search,
  ChevronRight,
  Star,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

function Header() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <header className="bg-[#2D5016] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href={"/"} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-xl">🍀</span>
              </div>
              <span className="text-xl font-bold">TriGardening</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-green-200">
                Home
              </Link>
              <Link href="/products" className="hover:text-green-200">
                Products
              </Link>
              <Link href="/blog" className="hover:text-green-200">
                Blog
              </Link>
              <Link href="/plant-clinic" className="hover:text-green-200">
                Plant Clinic
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href={'/about'} className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full">
                <Phone size={18} />
                <span>Call Now</span>
              </Link>

              {/* Search bar - hidden on mobile */}
              <div className="hidden lg:flex items-center bg-white/10 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search plants, tools"
                  className="bg-transparent border-none outline-none text-white placeholder-white/70 w-48"
                />
                <Search size={18} />
              </div>

              <Link href={'/cart'} className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              <Link href={'/about'} className="hidden md:block">
                <User size={24} />
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-green-200">
                Home
              </Link>
              <Link href="/products" className="block py-2 hover:text-green-200">
                Products
              </Link>
              <Link href="/blog" className="block py-2 hover:text-green-200">
                Blog
              </Link>
              <Link href="/plant-clinic" className="block py-2 hover:text-green-200">
                Plant Clinic
              </Link>
              <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full w-full justify-center mt-4">
                <Phone size={18} />
                <span>Call Now</span>
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
