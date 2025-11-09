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
    <div className="w-full bg-white pb-1 ">
      {/* Main Navigation */}
      <nav className=" border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-16">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`relative px-1 py-5 text-base font-medium transition-colors ${
                  activeNav === item
                    ? "text-[#7A9B57]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
                {activeNav === item && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm">
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
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
