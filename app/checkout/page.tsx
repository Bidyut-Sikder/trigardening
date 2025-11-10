"use client";
import React, { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import ProgressSteps from "@/components/common/ProgressSteps";

interface Address {
  id: number;
  label: string;
  thana: string;
  district: string;
  fullAddress: string;
}

interface OrderItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const ShippingAddressPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const addresses: Address[] = [
    {
      id: 1,
      label: "Shipping Address",
      thana: "Bagerhat",
      district: "Khulna",
      fullAddress: "Matrichaya Near, 12/3, Mokles Goli, Sakerpara, Bagerhat",
    },
    {
      id: 2,
      label: "Address 2",
      thana: "Bagerhat",
      district: "Khulna",
      fullAddress: "Matrichaya Neer, 12/3, Mokles Goli, Sakerpara, Bagerhat",
    },
  ];

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

  const handleProceedToCheckout = () => {
    console.log(
      "Proceeding to checkout with address:",
      addresses.find((a) => a.id === selectedAddress)
    );
    // Handle checkout logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
      <ProgressSteps step={2} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Address Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Review & Checkout
                </h1>
                <button className="flex items-center gap-2 text-[#A3A3A3] hover:text-green-700 transition text-sm">
                  <ArrowLeft size={16} />
                  Back to Cart
                </button>
              </div>

              {/* Address Cards */}
              <div className="space-y-4 mb-6">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    onClick={() => setSelectedAddress(address.id)}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedAddress === address.id
                        ? "border-green-600 bg-[#F5F5DC]"
                        : "border-gray-200 bg-[#F9F9F9] hover:border-[#7A9B57]"
                    }`}
                  >
                    {/* Select Badge */}
                    {selectedAddress === address.id && (
                      <div className="absolute top-3 right-3 bg-[#2D5016] text-white text-xs px-3 py-1 rounded-full font-medium">
                        Select
                      </div>
                    )}

                    {/* Address Label */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {address.label}
                      </h3>
                    </div>

                    {/* Address Details */}
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Thana:</span>{" "}
                        {address.thana}
                      </p>
                      <p>
                        <span className="font-medium">District:</span>{" "}
                        {address.district}
                      </p>
                      <p>
                        <span className="font-medium">Matrichaya Neer,</span>{" "}
                        {address.fullAddress}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-[#2D5016] text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition shadow-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Order Summary */}

          <div className="lg:col-span-1 shadow-lg rounded-xl overflow-hidden">
            {/* Top Section: Subtotal */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressPage;
