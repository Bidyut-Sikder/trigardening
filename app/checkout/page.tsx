
'use client';
import React, { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

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
      label: 'Shipping Address',
      thana: 'Bagerhat',
      district: 'Khulna',
      fullAddress: 'Matrichaya Near, 12/3, Mokles Goli, Sakerpara, Bagerhat'
    },
    {
      id: 2,
      label: 'Address 2',
      thana: 'Bagerhat',
      district: 'Khulna',
      fullAddress: 'Matrichaya Neer, 12/3, Mokles Goli, Sakerpara, Bagerhat'
    }
  ];

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

  const handleProceedToCheckout = () => {
    console.log('Proceeding to checkout with address:', addresses.find(a => a.id === selectedAddress));
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
          {/* Address Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Review & Checkout</h1>
                <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-sm">
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
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 bg-white hover:border-green-300'
                    }`}
                  >
                    {/* Select Badge */}
                    {selectedAddress === address.id && (
                      <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Select
                      </div>
                    )}

                    {/* Address Label */}
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{address.label}</h3>
                    </div>

                    {/* Address Details */}
                    <div className="space-y-1 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Thana:</span> {address.thana}
                      </p>
                      <p>
                        <span className="font-medium">District:</span> {address.district}
                      </p>
                      <p>
                        <span className="font-medium">Matrichaya Neer,</span> {address.fullAddress}
                      </p>
                    </div>

                    {/* Radio Button Indicator */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAddress === address.id
                            ? 'border-green-600 bg-green-600'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {selectedAddress === address.id && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition shadow-md"
              >
                Proceed to Checkout
              </button>
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
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-orange-500">৳ {total}</span>
              </div>

              {/* Additional Info */}
              <div className="text-xs text-gray-500 text-center space-y-1">
                <p>🔒 Secure Payment</p>
                <p>📦 Free returns within 7 days</p>
                <p>🚚 Track your order in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressPage;