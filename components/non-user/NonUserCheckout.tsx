'use client';

import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    thana: '',
    district: '',
    fullAddress: '',
    emailAddress: '',
    secondaryNumber: '',
    password: ''
  });

  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: 'Fiddle Leaf Plant',
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80'
    },
    {
      id: 2,
      name: 'Monstera Delisiosa',
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=200&q=80'
    },
    {
      id: 3,
      name: 'Vermi Compost',
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80'
    }
  ];

  const subtotal = 900;
  const deliveryCharge = 100;
  const total = 1000;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = () => {
    console.log('Form submitted:', formData);
    // Handle checkout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-center gap-4">
            {/* Step 1 - Completed */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white">
                <Check size={20} />
              </div>
              <span className="ml-3 font-medium text-gray-800">Shopping Cart</span>
            </div>

            {/* Connector Line 1 */}
            <div className="w-16 h-1 bg-green-600"></div>

            {/* Step 2 - Active */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold">
                2
              </div>
              <span className="ml-3 font-medium text-gray-800">Review & Checkout</span>
            </div>

            {/* Connector Line 2 */}
            <div className="w-16 h-1 bg-gray-300"></div>

            {/* Step 3 - Pending */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600 font-bold">
                3
              </div>
              <span className="ml-3 font-medium text-gray-500">Order Confirmed!</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Review & Checkout</h1>
                <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-sm">
                  <ArrowLeft size={16} />
                  Back to Cart
                </button>
              </div>

              {/* Alert Message */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700 text-sm">
                  Your shopping anonymously. Please fill up the form below to continue
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Thana */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thana <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="thana"
                      value={formData.thana}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none appearance-none bg-white"
                    >
                      <option value="">Select Thana</option>
                      <option value="dhanmondi">Dhanmondi</option>
                      <option value="gulshan">Gulshan</option>
                      <option value="mirpur">Mirpur</option>
                      <option value="uttara">Uttara</option>
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      District <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none appearance-none bg-white"
                    >
                      <option value="">Select District</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="rajshahi">Rajshahi</option>
                      <option value="khulna">Khulna</option>
                    </select>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address <span className="text-green-600">(Optional)</span>
                  </label>
                  <textarea
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your full address"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-green-600">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>

                  {/* Secondary Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secondary Number <span className="text-green-600">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="secondaryNumber"
                      value={formData.secondaryNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6 pb-6 border-b">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-600">{item.size}</p>
                      <p className="text-xs text-orange-500 font-medium mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-orange-500">৳ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Sub Total</span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="font-semibold">৳ {deliveryCharge}</span>
                </div>
              </div>

              {/* Total */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-orange-500">৳ {total}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition shadow-md"
                >
                  Proceed to Checkout
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>🔒 Your information is secure</p>
                <p>📦 Free returns within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;