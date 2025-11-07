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
import FilterProducts from "@/components/common/FilterProducts";
import BreadCrumbNavigation from "@/components/common/BreadCrumb";

export default function TriGardeningShop() {
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
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Organic Compost Fertilizer",
      category: "Fertilizer",
      price: { min: 60, max: 440 },
      rating: 4,
      reviews: 12,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Pruning Shears",
      category: "Equipment",
      price: { min: 180, max: 450 },
      rating: 4,
      reviews: 34,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Pruning Shears",
      category: "Equipment",
      price: { min: 180, max: 450 },
      rating: 4,
      reviews: 34,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Organic Compost Fertilizer",
      category: "Fertilizer",
      price: { min: 60, max: 440 },
      rating: 4,
      reviews: 12,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: { min: 2000, max: 3400 },
      rating: 5,
      reviews: 24,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop",
    },
  ];

  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-5 ">
      {/* Breadcrumb */}
      <BreadCrumbNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 pt-10">
          {/* Filters Sidebar */}
          <FilterProducts />

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Plants</h1>
                <p className="text-gray-600 mt-1">Showing 10 of 40 products</p>
              </div>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
                <option>Sort By: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
                >
                  <div className="aspect-4/3 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {product.category}
                    </p>
                    <p className="text-2xl font-bold text-green-700 mb-3">
                      ৳ {product.price.min} - {product.price.max}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
