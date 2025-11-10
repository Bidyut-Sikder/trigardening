import React from "react";
import { Check, ArrowLeft } from "lucide-react";
import ProgressSteps from "@/components/common/ProgressSteps";

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
  const orderNumber = "10012";
  const deliveryMethod = "Cash on Delivery";
  const estimatedDate = "25 - 30 Sep 2025";

  const orderItems: OrderItem[] = [
    {
      id: 1,
      name: "Fiddle Leaf Plant",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80",
    },
    {
      id: 2,
      name: "Monstera Delisiosa",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image:
        "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=200&q=80",
    },
    {
      id: 3,
      name: "Vermi Compost",
      size: '6" Pot',
      quantity: 2,
      price: 300,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80",
    },
  ];

  const customerInfo: CustomerInfo = {
    fullName: "Mohmmad Noman",
    phoneNumber: "+880 1712-345678",
    deliveryAddress: "House 25, Road 12, Dhanmondi, Dhaka-1205",
  };

  const subtotal = 900;
  const deliveryCharge = 100;
  const total = 1000;

  return (
    <div className="min-h-screen bg-[#F3F3F3] py-8">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}

        <ProgressSteps step={3} />

        {/* Thank You Message */}
        <div className="text-center mb-8 font-medium text-[#2D5016]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2">
            Thank you for purchasing
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            from TriGardening
          </h2>
        </div>

        {/* Main Container with Green Background */}
        <div className="bg-[#FFFFFF] rounded-3xl  shadow-xl">
          {/* Order Confirmation Card - White Card Inside Green Background */}
          <div className="text-center mb-6 pt-6 sm:pt-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D5016] mb-2">
              Order Confirmed
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-[#2D5016]">
              Your order has been placed successfully
            </p>
          </div>

          {/* Delivery Info */}
          <div className="text-center mb-6 sm:mb-8 font-semibold text-sm sm:text-lg text-[#2D5016]">
            <p className="mb-1">
              Delivery Method:{" "}
              <span className="font-normal">{deliveryMethod}</span>
            </p>
            <p>
              Estimated Date:{" "}
              <span className="font-normal">{estimatedDate}</span>
            </p>
          </div>
          <div className=" relative ">
            <div className=" relative  z-50 bg-[#FFFFFF] rounded-xl   max-w-md mx-auto   lg:col-span-1  overflow-hidden">
              {/* Top Section: Subtotal */}
              <div className=" z-100 bg-white rounded-t-xl border border-[#B7B7B7] shadow-sm p-6">
                <h2 className="text-3xl font-bold text-[#2D5016] mb-4">
                  Order #10012
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
              <div className="  bg-white   rounded-b-xl p-6 border border-b border-[#B7B7B7]">
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
                <div className="  flex items-center justify-between mb-5">
                  <span className="  text-xl font-bold text-gray-800">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-orange-500">
                    ৳ 1000
                  </span>
                </div>
              </div>
            </div>

            <div className="  z-0  absolute mt-[-80] rounded-b-2xl w-full h-60 bg-[#7A9B57] text-center ">
              <button className="flex pt-30 items-center gap-2 text-white hover:text-green-100 transition mx-auto font-medium">
                <ArrowLeft size={20} className="text-white" />
                Return to My Orders List
              </button>
            </div>
          </div>

          {/* Return Button */}
        </div>

        {/* Customer Information */}
        <div className="mt-50 bg-white rounded-4xl shadow-sm border-2 border-green-300 p-8 ">
          <h3 className="text-2xl font-bold text-[#2D5016] mb-6">
            Your Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Full Name */}
            <div>
              <p className="text-sm text-[#2D5016] mb-2">Full Name</p>
              <p className="font-semibold text-[#2D5016]">
                {customerInfo.fullName}
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <p className="text-sm text-[#2D5016] mb-2">Phone Number</p>
              <p className="font-semibold text-[#2D5016]">
                {customerInfo.phoneNumber}
              </p>
            </div>

            {/* Delivery Address */}
            <div className="md:col-span-2">
              <p className="text-sm text-[#2D5016] mb-2">Delivery Address</p>
              <p className="font-semibold text-[#2D5016]">
                {customerInfo.deliveryAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

//  <div className="bg-[#FFFFFF] border border-[#B7B7B7] rounded-sm p-4 max-w-md mx-auto">
//             <div className=" border-gray-200 pt-1">
//               {/* Order Number */}
//               <h3 className="text-3xl font-semibold text-[#2D5016] mb-4">
//                 Order #{orderNumber}
//               </h3>

//               {/* Order Items */}
//               <div className="space-y-3 mb-6">
//                 {orderItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center gap-3 p-3 bg-[#F5F5DC] rounded-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-14 h-14 rounded-lg object-cover"
//                     />
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-800 text-sm">
//                         {item.name}
//                       </h4>
//                       <p className="text-xs text-gray-600">{item.size}</p>
//                       <p className="text-xs text-orange-500 font-medium">
//                         Qty: {item.quantity}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-semibold text-orange-500">
//                         ৳ {item.price}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Price Summary */}
//               <div className="space-y-2 mb-4">
//                 <div className="flex items-center justify-between text-gray-700 text-sm">
//                   <span>Sub Total</span>
//                   <span className="font-semibold">৳ {subtotal}</span>
//                 </div>
//                 <div className="flex items-center justify-between text-gray-700 text-sm">
//                   <span>Delivery Charge</span>
//                   <span className="font-semibold">৳ {deliveryCharge}</span>
//                 </div>
//               </div>

//               <div className="border-t border-gray-200 pt-4">
//                 {/* Total */}
//                 <div className="flex items-center justify-between">
//                   <span className="text-xl font-bold text-gray-800">Total</span>
//                   <span className="text-2xl font-bold text-orange-500">
//                     ৳ {total}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
