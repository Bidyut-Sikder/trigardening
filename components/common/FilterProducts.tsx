"use client";
import React, { useState } from "react";
import {

  Star,
  Menu,
  X,
} from "lucide-react";

function FilterProducts() {
  const [priceRange, setPriceRange] = useState([0,5000, 10000]);
  
  const [filterOpen, setFilterOpen] = useState(false);



  return (
    <div>
      <aside className="lg:w-64 shrink-0">
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Filter Products</h2>
            <button
              className="lg:hidden"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              {filterOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div
            className={`space-y-6 ${filterOpen ? "block" : "hidden lg:block"}`}
          >
            {/* Category */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 text-[#404040]">Category</h3>
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">
                  Indoor Plants (32)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">
                  Outdoor Plants (18)
                </span>
              </label>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 text-[#404040]">Price Range</h3>
              <input
                type="range"
                min={0}
                max={10000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                style={
                  {
                    "--range-percentage": `${(priceRange[1] / 10000) * 100}%`,
                  } as React.CSSProperties
                }
                className="w-full rounded-lg"
              />

              <div className="flex justify-between text-sm text-[#404040] font-medium mt-2">
                <span>৳ {priceRange[0]}</span>
                <span>৳ {priceRange[1]}+</span>
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 text-[#404040]">Size</h3>
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Small (21)</span>
              </label>
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Medium (27)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Large (16)</span>
              </label>
            </div>

            {/* Light Requirements */}
            <div>
              <h3 className="font-medium text-[18px] mb-3 text-[#404040]">
                Light Requirements
              </h3>
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Low Light (18)</span>
              </label>
              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Medium Light (16)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-[#404040] font-medium">Bright Light (18)</span>
              </label>
            </div>

            <button className="w-full bg-[#7A9B57] hover:bg-[#72ac34] text-white py-3 rounded-lg font-medium transition">
              Apply Filters
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default FilterProducts;
