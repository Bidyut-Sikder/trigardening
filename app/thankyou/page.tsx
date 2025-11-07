import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

interface CustomerInfo {
  fullName: string;
  phoneNumber: string;
  deliveryAddress: string;
}

const OrderConfirmationPage = () => {
  const orderNumber = '10012';
  const deliveryMethod = 'Cash on Delivery';
  const estimatedDate = '25 - 30 Sep 2025';
  
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

  const customerInfo: CustomerInfo = {
    fullName: 'Mohmmad Noman',
    phoneNumber: '+880 1712-345678',
    deliveryAddress: 'House 25, Road 12, Dhanmondi, Dhaka-1205'
  };

  const subtotal = 900;
  const deliveryCharge = 100;
  const total = 1000;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
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

            {/* Step 2 - Completed */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white">
                <Check size={20} />
              </div>
              <span className="ml-3 font-medium text-gray-800">Review & Checkout</span>
            </div>

            {/* Connector Line 2 */}
            <div className="w-16 h-1 bg-green-600"></div>

            {/* Step 3 - Completed */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white">
                <Check size={20} />
              </div>
              <span className="ml-3 font-medium text-green-700">Order Confirmed!</span>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Thank you for purchasing
          </h1>
          <h2 className="text-4xl font-bold text-gray-800">
            from TriGardening
          </h2>
        </div>

        {/* Main Container with Green Background */}
        <div className="bg-green-600 rounded-3xl p-8 shadow-xl">
          {/* Order Confirmation Card - White Card Inside Green Background */}
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed</h2>
              <p className="text-gray-600 text-sm">Your order has been placed successfully</p>
            </div>

            {/* Delivery Info */}
            <div className="text-center mb-6 text-sm">
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Delivery Method:</span> {deliveryMethod}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Estimated Date:</span> {estimatedDate}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              {/* Order Number */}
              <h3 className="text-lg font-bold text-gray-800 mb-4">Order #{orderNumber}</h3>
              
              {/* Order Items */}
              <div className="space-y-3 mb-6">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-600">{item.size}</p>
                      <p className="text-xs text-orange-500 font-medium">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-orange-500">৳ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-gray-700 text-sm">
                  <span>Sub Total</span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-gray-700 text-sm">
                  <span>Delivery Charge</span>
                  <span className="font-semibold">৳ {deliveryCharge}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-orange-500">৳ {total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Return Button */}
          <div className="text-center mt-8">
            <button className="flex items-center gap-2 text-white hover:text-green-100 transition mx-auto font-medium">
              <ArrowLeft size={20} />
              Return to My Orders List
            </button>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-2xl shadow-sm border-2 border-green-300 p-8 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Your Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Full Name */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Full Name</p>
              <p className="font-semibold text-gray-800">{customerInfo.fullName}</p>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Phone Number</p>
              <p className="font-semibold text-gray-800">{customerInfo.phoneNumber}</p>
            </div>

            {/* Delivery Address */}
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600 mb-2">Delivery Address</p>
              <p className="font-semibold text-gray-800">{customerInfo.deliveryAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;