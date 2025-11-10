"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function BreadCrumbNavigation() {
  const [activeNav, setActiveNav] = useState("Plants");

  const navItems = [
    "Home",
    "Plants",
    "Tools",
    "Fertilizers",
    "Seeds",
    "Medicine",
    "Equipments",
  ];

  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Plants", href: "#", active: true },
  ];

  return (
    <div className="w-full bg-white shadow">
      {/* Main Navigation */}
      <nav className="border-gray-200">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-6 sm:gap-8 h-14 sm:h-16 
                       overflow-x-auto scrollbar-hide whitespace-nowrap"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`relative py-3 
                  text-sm sm:text-base lg:text-lg font-medium transition-colors ${
                    activeNav === item
                      ? "text-[#7A9B57]"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {item}
                {activeNav === item && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center space-x-2 text-xs sm:text-sm lg:text-base">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <a
                href={crumb.href}
                className={`${
                  crumb.active
                    ? "text-[#7A9B57] font-medium"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                {crumb.label}
              </a>

              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
