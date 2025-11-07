'use client';
import React, { useState } from 'react'
import { ShoppingCart, User, Phone, Search, ChevronRight, Star, Menu, X } from 'lucide-react';

function FilterProducts() {
      const [priceRange, setPriceRange] = useState([0, 10000]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: { min: 2000, max: 3400 },
      rating: 5,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Organic Compost Fertilizer",
      category: "Fertilizer",
      price: { min: 60, max: 440 },
      rating: 4,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Pruning Shears",
      category: "Equipment",
      price: { min: 180, max: 450 },
      rating: 4,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Pruning Shears",
      category: "Equipment",
      price: { min: 180, max: 450 },
      rating: 4,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Organic Compost Fertilizer",
      category: "Fertilizer",
      price: { min: 60, max: 440 },
      rating: 4,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: { min: 2000, max: 3400 },
      rating: 5,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop"
    }
  ];

  const renderStars = (rating:any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };
  return (
    <div>
             <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Filter Products</h2>
                <button 
                  className="lg:hidden"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  {filterOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              <div className={`space-y-6 ${filterOpen ? 'block' : 'hidden lg:block'}`}>
                {/* Category */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-700">Category</h3>
                  <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Indoor Plants (22)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Outdoor Plants (18)</span>
                  </label>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-green-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>৳ {priceRange[0]}</span>
                    <span>৳ {priceRange[1]}+</span>
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-700">Size</h3>
                  <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Small (21)</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Medium (27)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Large (16)</span>
                  </label>
                </div>

                {/* Light Requirements */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-700">Light Requirements</h3>
                  <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Low Light (18)</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Medium Light (16)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Bright Light (18)</span>
                  </label>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>
    </div>
  )
}

export default FilterProducts