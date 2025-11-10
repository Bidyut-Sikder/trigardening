"use client";

import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import ProgressSteps from "@/components/common/ProgressSteps";


interface OrderItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    thana: "",
    district: "",
    fullAddress: "",
    emailAddress: "",
    secondaryNumber: "",
    password: "",
  });



  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: "Fiddle Leaf Plant",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: "/products/item1.jpg",
    },
    {
      id: 2,
      name: "Monstera Delisiosa",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: "/products/PexelsPhotobyJuliaVolk.png",
    },
    {
      id: 3,
      name: "Vermi Compost",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image: "/products/PexelsPhotobyAnnaShvets.png",
    },
  ];

  const subtotal = 900;
  const deliveryCharge = 100;
  const total = 1000;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    console.log("Form submitted:", formData);
    // Handle checkout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <ProgressSteps step={2} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Review & Checkout
                </h1>
                <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-sm">
                  <ArrowLeft size={16} />
                  Back to Cart
                </button>
              </div>

              {/* Alert Message */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700 text-sm">
                  Your shopping anonymously. Please fill up the form below to
                  continue
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
                    Full Address{" "}
                    <span className="text-green-600">(Optional)</span>
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
                      Email Address{" "}
                      <span className="text-green-600">(Optional)</span>
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
                      Secondary Number{" "}
                      <span className="text-green-600">(Optional)</span>
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

          <div className="lg:col-span-1  rounded-xl overflow-hidden">
            {/* Top Section: Subtotal */}
            <div className="shadow-2xl ">
              <div className="bg-white rounded-t-xl border-b border-[#B7B7B7] shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 pb-2 ">
                  {orderItems.map((item) => (
                    <div key={item.id} className=" bg-[#F5F5DC] rounded-lg">
                      <div className="flex items-start gap-3 p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 text-sm mb-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-600">{item.size}</p>
                          <p className="text-xs text-orange-500 font-medium mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-orange-500">
                            ৳ {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Total + Checkout */}
              <div className="bg-white rounded-b-xl p-6  border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Sub Total</span>
                  <span className="text-lg font-semibold text-gray-800">
                    ৳ 900
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="font-semibold">৳ 100</span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-orange-500">
                    ৳ 1000
                  </span>
                </div>
                <button className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-800 transition shadow-md">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
