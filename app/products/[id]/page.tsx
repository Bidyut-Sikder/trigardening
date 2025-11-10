"use client";
import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { ChevronDown } from "lucide-react";
import { Edit3 } from "lucide-react";
import ReviewList from "@/components/common/ReviewList";

import LoginForm from "@/components/Forms/LoginForm";

import ReviewForm from "@/components/Forms/ReviewForm";
import CustomProductList from "@/components/common/CustomProductList";
const GoldenPothosProduct = () => {
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80"
  );

  const thumbnails = [
    "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80",
    "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80",
    "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80",
    "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80",
  ];
  ////////////////////

  const ratingData = [
    { stars: 5, count: 847, percentage: 68 },
    { stars: 4, count: 274, percentage: 22 },
    { stars: 3, count: 75, percentage: 6 },
    { stars: 2, count: 37, percentage: 3 },
    { stars: 1, count: 14, percentage: 1 },
  ];

  const highlights = [
    { text: "Easy to Grow", color: "bg-[#E8F5E9] text-[#2D5016]" },
    { text: "Good Quality", color: "bg-[#E3F2FD] text-[#1565C0]" },
    { text: "Arrived Healthy", color: "bg-[#FBE2FF] text-[#87009D]" },
    { text: "Great Value", color: "bg-[#FFE8C6] text-[#D84315]" },
    { text: "Smaller Than Expected", color: "bg-[#FFEBEE] text-[#C62828]" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Ismita Chowdhury",
      avatar: "/girl-comments.png",
      verified: true,
      date: "4 Days ago ( 12 September, 2025 )",
      rating: 5,
      comment:
        "এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পৌঁছেছে এবং আমার বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের জন্যই আমি এটি অত্যন্ত সুপারিশ করছি।",
      helpful: 12,
      notHelpful: 0,
      reply: {
        from: "Trigardening",
        date: "12 September, 2025",
        message:
          "আপনাকে অনেক ধন্যবাদ আমাদের গাছ নিয়ে এত সুন্দর অভিজ্ঞতা শেয়ার করার জন্য। আপনার বাগানে গাছটা ভালোভাবে বেড়ে উঠছে জেনে আমরা ভীষণ খুশি। ভবিষ্যতেও আপনাকে মানসম্মত গাছ ও গার্ডেনিং সামগ্রী দেওয়ার প্রতিশ্রুতি দিচ্ছি। শুভকামনা রইলো ।",
      },
    },
    {
      id: 2,
      name: "Aminul Islam",
      verified: true,
      avatar: "/girl-comments.png",
      date: "1 Week ago ( 4 September, 2025 )",
      rating: 4,
      comment:
        "গাছের মান ভালো ছিল, প্যাকেজিংও দারুণ হয়েছে। শুধু ছবির তুলনায় গাছটা একটু ছোট হওয়ায় ৪ স্টার দিলাম। তারপরও কেনাকাটা নিয়ে খুশি এবং আবারও কিনতে চাই।",
      helpful: 12,
      notHelpful: 0,
      reply: {
        from: "Trigardening",
        date: "5 September, 2025",
        message:
          "আপনার মতামতের জন্য ধন্যবাদ। গাছের মান ও প্যাকেজিং ভালো লেগেছে জেনে আমরা খুশি। সাইজের ব্যাপারটা আমরা নোট করে নিচ্ছি, ভবিষ্যতে আরও স্পষ্টভাবে উল্লেখ করার চেষ্টা করবো। আপনার সন্তুষ্টিই আমাদের সবচেয়ে বড় অগ্রাধিকার। আবারও আপনাকে সেবা দেওয়ার অপেক্ষায় রইলাম । ",
      },
    },
    {
      id: 3,
      name: "Hridoy Shil",
      avatar: "/girl-comments.png",
      verified: true,
      date: "2 Week ago ( 1 August, 2025 )",
      rating: 4,
      images: ["/reviewimg1.png", "/reviewimg2.png"],
      comment:
        "আমার ইনডোর গার্ডেনের জন্য একেবারে পারফেক্ট সংযোজন! গাছটা একদম সুস্থ অবস্থায় এসেছে এবং খুব সুন্দরভাবে বেড়ে উঠছে। ২ সপ্তাহ পরের অগ্রগতি দেখানোর জন্য কিছু ছবি সংযুক্ত করেছি। কাস্টমার সার্ভিসও খুব দ্রুত রেসপন্স করেছে যখন আমি প্রশ্ন করেছি।",
      helpful: 12,
      notHelpful: 0,
    },
  ];

  //////////////////////
  const sizes = [
    { name: "Small", price: "৳ 250" },
    { name: "Medium", price: "৳ 350" },
    { name: "Large", price: "৳ 450" },
  ];

  const potOptions = [
    { name: "Small", price: "৳ 50" },
    { name: "Medium", price: "৳ 100" },
    { name: "Large", price: "৳ 150" },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
        }
      />
    ));
  };

  const [isExpanded, setIsExpanded] = React.useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [ReviewOpen, setReviewOpen] = useState(false);
  function LoginAlert() {
    let session = false;
    if (!session) {
      setIsOpen(true);
    }
  }
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          {/* ✅ Blurred Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* ✅ Modal Transition */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* ✅ Perfectly centered LoginForm with rounded white card */}
                <Dialog.Panel className="">
                  <LoginForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={ReviewOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setReviewOpen(false)}
        >
          {/* ✅ Blurred Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2">
              {/* ✅ Modal Transition */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* ✅ Perfectly centered LoginForm with rounded white card */}
                <Dialog.Panel className="">
                  <ReviewForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-fullk items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-100 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-amber-600 opacity-100 rounded-2xl  ">
                  <LoginForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      {/* <Transition appear show={ReviewOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setReviewOpen(false)}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-fullk items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-100 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white opacity-100 rounded-2xl p-8 ">
                  <ReviewForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      {/* Breadcrumb */}
      {/* <BreadCrumbNavigation /> */}

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
              <img
                src={mainImage}
                alt="Golden Pothos"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(thumb)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    mainImage === thumb ? "border-green-600" : "border-gray-200"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1  rounded-lg p-6 ">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Golden Pothos
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">{renderStars(4)}</div>
              <span className="text-sm text-gray-600">(24 Reviews)</span>
              <span className="text-green-600 text-sm">● In Stock</span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Indoor Plant
              </span>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`border-2 rounded-lg p-2 text-center transition ${
                      selectedSize === size.name
                        ? "border-[#7A9B57] bg-[#EDFFDA]"
                        : "border-gray-200 hover:border-[#7A9B57]"
                    }`}
                  >
                    <div className="font-medium text-sm">{size.name}</div>
                    <div className="text-xs text-gray-600">{size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Include Pot */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Include Pot
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {potOptions.map((pot) => (
                  <button
                    key={pot.name}
                    className="border-2 border-gray-200 rounded-lg p-2 text-center hover:border-green-300 transition"
                  >
                    <div className="font-medium text-sm">{pot.name}</div>
                    <div className="text-xs text-gray-600">{pot.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Pot Color */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Pot Color
              </h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-[#FFFFFF] border-3 border-[#DADADA] hover:border-green-600"></button>
                <button className="w-8 h-8 rounded-full bg-[#9E6431] border-3 border-[#DADADA] hover:border-green-600"></button>
              </div>
            </div>

            {/* Description Preview */}
            <hr className="text-[#B7B7B7] mb-2" />
            <div className="mb-4 ">
              <p className="text-xs sm:text-sm text-[#2D5016] line-clamp-3 leading-relaxed">
                গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum) ঘর সাজানোর
                জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট।
                এর হৃদয় আকৃতির&nbsp;
                <button className="text-[#CC7722] font-medium hover:underline inline-block ml-1 text-xs sm:text-sm">
                  See more...
                </button>
              </p>
            </div>
            <hr className="text-[#B7B7B7]" />

            {/* Price and Add to Cart */}
            <div className=" pt-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-4xl font-bold text-orange-500">৳ 350</div>
                <div className="flex flex-col items-center -mt-2.5">
                  <span className="text-sm text-gray-600">Quantity</span>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1 text-2xl hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 text-2xl py-1 border-x-2 border-gray-200">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1 text-2xl hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={LoginAlert}
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                You may also like
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Fiddle Leaf Plant",
                    price: "৳ 200",
                    category: "Indoor Plant",
                    image:
                      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=100&q=80",
                  },
                  {
                    name: "Snake Plant",
                    price: "৳ 350",
                    category: "Indoor Plant",
                    image:
                      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=100&q=80",
                  },
                  {
                    name: "Monstera Delisiosa",
                    price: "৳ 150",
                    category: "Indoor Plant",
                    image:
                      "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=100&q=80",
                  },
                  {
                    name: "Vermi Compost",
                    price: "৳ 60",
                    category: "Indoor Plant",
                    image:
                      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&q=80",
                  },
                  {
                    name: "Vine",
                    price: "৳ 450",
                    category: "Indoor Plant",
                    image:
                      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=100&q=80",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 hover:bg-gray-50 p-1 rounded-lg cursor-pointer transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-[16px] text-[#8C8C8C] ">
                        {item.category}
                      </p>
                      <p className="text-[#CC7722] text-[16px] font-semibold">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="p-4 rounded-full border-red-300 hover:bg-gray-100">
              <Heart size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Descriptions Section */}

        <div className="container mx-auto px-6 py-12 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Descriptions
          </h1>

          <div className="relative">
            <div
              className={`space-y-6 transition-all duration-300 ${
                !isExpanded ? "max-h-40 overflow-hidden" : ""
              }`}
            >
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold">
                  গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum)
                </span>{" "}
                – ঘর সাজানোর জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর
                প্ল্যান্ট। এর হৃদয় আকৃতির সবুজ পাতায় সোনালি-হলুদ রঙের নকশা
                থাকে, যা ঘরের যেকোনো কোণকে করে তোলে উজ্জ্বল ও প্রাণবন্ত। এই
                গাছটি খুবই সহনশীল—কম আলো, মাঝারি আলো কিংবা উজ্জ্বল পরোক্ষ আলো—সব
                জায়গাতেই মানিয়ে নিতে পারে। তাই নতুন যারা গাছ রাখতে চান, তাদের
                জন্য এটি একটি পারফেক্ট পছন্দ।
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                গোল্ডেন পাথোস শুধু সৌন্দর্য যোগ করে না, বরং ঘরের বাতাসও বিশুদ্ধ
                করে, ক্ষতিকর টক্সিন পোষণ করে চারপাশকে আরও স্বাস্থ্যকর রাখে।
                ঝুলন্ত টব, পেলফ বা টেবিলে রাখলে এটি নতুনভাবে জাল ছড়িয়ে পড়ে,
                আর নিয়মিত ছাঁটাই করলে সুন্দরভাবে বেড়ে ওঠে। পানি দেওয়াও খুব
                বেশি প্রয়োজন হয় না—মাটি শুকিয়ে এলে অল্প পানি দিলেই গাছটি সতেজ
                থাকে।
              </p>
            </div>

            {/* Blur gradient overlay when collapsed */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
            )}

            {/* Expand/Collapse button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-2 mx-auto px-6 py-4 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ChevronDown
                size={30}
                className={`transition-transform duration-300 z-10 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        {/* Related Products */}

        <CustomProductList title="Related Products" bg="bg-[#F5F9E9]" />
        {/* Customer Reviews */}

        <div className="container  mx-auto px-6 py-12 bg-[#F3F3F3]">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Customer Reviews & Ratings
            </h1>
            <p className="text-gray-600">
              See what other gardeners are saying about this product
            </p>
          </div>

          {/* Rating Overview */}
          <div className=" bg-[#FFFFFF] rounded-lg shadow-sm p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Average Rating */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl font-bold text-[#2D5016] mb-2">
                  4.7
                </div>
                <div className="flex flex-row gap-1 mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                  <Star
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                  <p className="text-gray-600 text-sm">(24)</p>
                </div>

                <p className="text-[#2D5016] text-sm mt-1">
                  Based on 1,247 reviews
                </p>
              </div>

              {/* Right: Rating Bars */}
              <div className="space-y-3">
                {ratingData.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-700 w-16">
                      {item.stars} Star
                    </span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.stars === 5
                            ? "bg-[#7A9B57]"
                            : item.stars === 4
                            ? "bg-[#97DE4C]"
                            : item.stars === 3
                            ? "bg-[#F29D38]"
                            : item.stars === 2
                            ? "bg-[#FF6600]"
                            : "bg-[#C62828]"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <hr className="text-[#D9D9D9] mt-5 " />
            {/* Write Review Button */}
            <button
              onClick={() => setReviewOpen(true)}
              className="mt-8 flex items-center gap-2 bg-[#2D5016] text-white px-6 py-3 rounded-lg hover:bg-[#1f3810] transition"
            >
              <Edit3 size={18} />
              <span className="font-medium">Write Review</span>
            </button>
          </div>

          {/* Review Highlights */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-[#2D5016] mb-4">
              Review Highlights
            </h2>
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${highlight.color}`}
                >
                  {highlight.text}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <ReviewList reviews={reviews} />
          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 border border-[#7A9B57] text-[#7A9B57] font-semibold rounded-lg hover:bg-green-50 transition ">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenPothosProduct;
