'use client';

import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, X } from 'lucide-react';

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
      name: 'Fiddle Leaf Plant',
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80'
    },
    {
      id: 2,
      name: 'Monstera Delisiosa',
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=200&q=80'
    },
    {
      id: 3,
      name: 'Vermi Compost',
      size: '6" Pot',
      price: 150,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const deliveryCharge = 100;

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + deliveryCharge;
  };

  const applyCoupon = () => {
    // Coupon logic would go here
    console.log('Applying coupon:', couponCode);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Shopping Cart</h1>
          <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition">
            <ArrowLeft size={20} />
            <span className="text-sm">Back to product page</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-4">
                <span className="text-lg font-semibold text-gray-800">{cartItems.length} items</span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-lg hover:border-green-200 transition"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.size}</p>
                      <p className="text-sm text-orange-500 font-medium mt-1">৳ {item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-3">Quantity</span>
                        <div className="flex items-center border-2 border-gray-200 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100 transition"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} className="text-gray-600" />
                          </button>
                          <span className="px-4 py-2 min-w-[50px] text-center border-x-2 border-gray-200 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100 transition"
                          >
                            <Plus size={16} className="text-gray-600" />
                          </button>
                        </div>
                      </div>

                      {/* Item Total Price */}
                      <div className="flex items-center gap-4">
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
                ))}
              </div>

              {/* Empty Cart Message */}
              {cartItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                  <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

              {/* Sub Total */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b">
                <span className="text-gray-600">Sub Total</span>
                <span className="text-lg font-semibold text-gray-800">৳ {calculateSubtotal()}</span>
              </div>

              {/* Delivery Charge */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <span className="text-gray-600">Delivery Charge</span>
                <span className="text-lg font-semibold text-gray-800">৳ {deliveryCharge}</span>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Code"
                    className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6 pt-4 border-t-2">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-orange-500">৳ {calculateTotal()}</span>
                </div>

                {/* Checkout Button */}
                <button
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-xs text-gray-500 text-center">
                <p className="mb-1">🔒 Secure Checkout</p>
                <p>Free shipping on orders over ৳ 2000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <button className="text-green-600 hover:text-green-700 font-medium transition">
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;