"use client";

import React, { useState } from "react";
import { ArrowLeft, Minus, Plus, X } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Fiddle Leaf Plant",
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: "/products/item1.jpg",
    },
    {
      id: 2,
      name: "Monstera Delisiosa",
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: "/products/PexelsPhotobyJuliaVolk.png",
    },
    {
      id: 3,
      name: "Vermi Compost",
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: "/products/PexelsPhotobyAnnaShvets.png",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const deliveryCharge = 100;

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryCharge;
  };

  const applyCoupon = () => {
    // Coupon logic would go here
    console.log("Applying coupon:", couponCode);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Shopping Cart
          </h1>
          <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to product page</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className=" rounded-lg  p-6">
              <div className="mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  {cartItems.length} items
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden ">
                {cartItems.map((item, index) => {
                  const isFirst = index === 0;
                  const isLast = index === cartItems.length - 1;

                  return (
                    <div
                      key={item.id}
                      className={`flex bg-white items-center gap-4 p-4 transition
                    ${!isLast ? "border-b border-[#B7B7B7]" : ""}`}
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.size}</p>
                        <p className="text-sm text-orange-500 font-medium mt-1">
                          ৳ {item.price}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end gap-3">
                        <div className="flex items-center">
                          <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-600 mr-3">
                              Quantity
                            </span>
                            <div className="flex items-center border-2 border-gray-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                                className="p-2 hover:bg-gray-100 disabled:text-gray-400 transition"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4 py-2 min-w-[50px] text-center border-x-2 border-gray-200 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-2 hover:bg-gray-100 transition"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </div>

                          <div className="ml-4 flex items-center gap-4">
                            <span className="text-lg font-bold text-orange-500">
                              ৳ {item.price * item.quantity}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded transition"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty Cart Message */}
              {cartItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    Your cart is empty
                  </p>
                  <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}

          <div className="lg:col-span-1 ">
            {/* Top Section: Subtotal */}
            <div className="bg-white rounded-t-2xl  shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Sub Total</span>
                <span className="text-lg font-semibold text-gray-800">
                  ৳ {calculateSubtotal()}
                </span>
              </div>
            </div>

            {/* Middle Section: Delivery + Coupon */}
            <div className="bg-white border-y-2 border-gray-200 px-6 py-4 space-y-4">
              {/* Delivery Charge */}
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Delivery Charge</span>
                <span className="text-lg font-semibold text-gray-800">
                  ৳ {calculateSubtotal() === 0 ? 0 : deliveryCharge}
                </span>
              </div>

              {/* Coupon Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2 justify-between">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Code"
                    className="flex-1 w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-[#2D5016] text-white  px-6 py-2 rounded-lg font-medium hover:bg-[#2b6108] transition"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section: Total + Checkout */}
            <div className="bg-white rounded-b-2xl p-6  border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-orange-500">
                  ৳ {calculateSubtotal() === 0 ? 0 : calculateTotal()}
                </span>
              </div>

              {/* Checkout Button */}
              <Link href={"/checkout"}>
                <button
                  className="w-full bg-[#2D5016] text-white py-2 rounded-lg font-semibold text-lg hover:bg-[#2b6108] transition shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
