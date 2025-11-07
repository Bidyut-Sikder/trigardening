
'use client';
import React, { useState } from 'react';
import { Heart, ShoppingCart, ThumbsUp, MessageCircle, Star, ChevronRight } from 'lucide-react';
import BreadCrumbNavigation from '@/components/common/BreadCrumb';

const GoldenPothosProduct = () => {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80');

  const thumbnails = [
    'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80',
    'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80',
    'https://images.unsplash.com/photo-1609142840145-987dbf1c4670?w=200&q=80',
    'https://images.unsplash.com/photo-1632207691143-643e2bc403ae?w=200&q=80'
  ];

  const sizes = [
    { name: 'Small', price: '৳ 250' },
    { name: 'Medium', price: '৳ 350' },
    { name: 'Large', price: '৳ 450' }
  ];

  const potOptions = [
    { name: 'Small', price: '৳ 50' },
    { name: 'Medium', price: '৳ 100' },
    { name: 'Large', price: '৳ 150' }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'Sansevieria (Snakeplant)',
      image: 'https://images.unsplash.com/photo-1593482892540-73c6d89036a5?w=400&q=80',
      price: '৳ 2000 - 3,400',
      rating: 4.5,
      reviews: 24
    },
    {
      id: 2,
      name: 'Organic Compost Fertilizer',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
      price: '৳ 60 - 440',
      rating: 4,
      reviews: 19
    },
    {
      id: 3,
      name: 'Pruning Shears',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
      price: '৳ 180 - 450',
      rating: 5,
      reviews: 34
    },
    {
      id: 4,
      name: 'Snake Plant',
      image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
      price: '৳ 150 - 500',
      rating: 4.5,
      reviews: 35
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Asmita Chowdhury',
      verified: true,
      date: '3 days ago',
      rating: 5,
      text: 'অসাধারণ পণ্য! গাছটি খুবই সুন্দর এবং স্বাস্থ্যকর অবস্থায় পৌঁছেছে। প্যাকেজিং খুব ভাল ছিল এবং ডেলিভারি সময়মত হয়েছে। আমি এই গাছটি কিনে খুবই খুশি।',
      helpful: 12,
      replies: [
        {
          author: 'Reply from TriGardening',
          date: '2 days ago',
          text: 'ধন্যবাদ আপনার প্রতিক্রিয়ার জন্য! আমরা খুশি যে আপনি আপনার গাছ নিয়ে সন্তুষ্ট। আমাদের সাথে কেনাকাটা করার জন্য আপনাকে ধন্যবাদ!'
        }
      ]
    },
    {
      id: 2,
      name: 'Ashna Basri',
      verified: true,
      date: '5 days ago',
      rating: 4,
      text: 'গাছের মান খুবই ভাল। প্যাকেজিং ভালো ছিল কিন্তু ডেলিভারি একটু দেরিতে হয়েছে। তবে সামগ্রিকভাবে সন্তুষ্ট। আমি আরো গাছ কিনব।',
      helpful: 8,
      replies: [
        {
          author: 'Reply from TriGardening',
          date: '4 days ago',
          text: 'আপনার ফিডব্যাক শেয়ার করার জন্য ধন্যবাদ। দেরির জন্য আমরা দুঃখিত। আমরা আমাদের ডেলিভারি সিস্টেম উন্নত করার চেষ্টা করছি। আপনার ধৈর্যের জন্য ধন্যবাদ।'
        }
      ]
    },
    {
      id: 3,
      name: 'Nilima Biri',
      verified: true,
      date: '6 days ago',
      rating: 4,
      text: 'গাছটি সুন্দর এবং স্বাস্থ্যকর। তবে আমি একটু বড় সাইজের গাছ আশা করেছিলাম। যাইহোক, মানের কোন অভিযোগ নেই। পরিষেবা চমৎকার ছিল।',
      helpful: 6,
      images: [
        'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200&q=80',
        'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=200&q=80'
      ]
    }
  ];

  const renderStars = (rating:any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <BreadCrumbNavigation />


      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-4">
              <img src={mainImage} alt="Golden Pothos" className="w-full h-96 object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(thumb)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    mainImage === thumb ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-1 bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Golden Pothos</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {renderStars(4)}
              </div>
              <span className="text-sm text-gray-600">(24 Reviews)</span>
              <span className="text-green-600 text-sm">● In Stock</span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Indoor Plant</span>
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
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
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
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Include Pot</h3>
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
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Pot Color</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-orange-400 border-2 border-gray-300 hover:border-green-600"></button>
                <button className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-300 hover:border-green-600"></button>
              </div>
            </div>

            {/* Description Preview */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 line-clamp-3">
                ⚠️ সতর্কতা: গোল্ডেন পথাস ( Epipremnum aureum) এ বিষাক্ত রাসায়নিক রয়েছে, যা মানুষ এবং পোষা প্রাণীদের জন্য ক্ষতিকর হতে পারে। খাওয়া এই গাছ আলাদা হজম এনা উত্তেজনা, মুখ আলো এবং অসুবিধা...
              </p>
              <button className="text-green-600 text-sm font-medium mt-1">See more</button>
            </div>

            {/* Price and Add to Cart */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-orange-500">৳ 350</div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Quantity</span>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x-2 border-gray-200">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Heart size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4">You may also like</h3>
              <div className="space-y-4">
                {[
                  { name: 'Pothos Plant', price: '৳ 200', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=100&q=80' },
                  { name: 'Snake Plant', price: '৳ 350', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=100&q=80' },
                  { name: 'Money Plant Climbers', price: '৳ 150', image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=100&q=80' },
                  { name: 'Organic Compost', price: '৳ 60', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&q=80' },
                  { name: 'Jade Plant', price: '৳ 450', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=100&q=80' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                      <p className="text-green-600 font-semibold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Descriptions Section */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Descriptions</h2>
          <div className="prose max-w-none text-gray-600 text-sm leading-relaxed">
            <p className="mb-4">
              ⚠️ সতর্কতা: গোল্ডেন পথাস ( Epipremnum aureum) এ বিষাক্ত রাসায়নিক রয়েছে — যা মানুষ এবং পোষা প্রাণীদের জন্য ক্ষতিকর হতে পারে। খাওয়া এই গাছ আলাদা হজম এনা উত্তেজনা, মুখ আলো এবং অসুবিধা। এছাড়াও ত্বকের সাথে সরাসরি পশুদের সংবেদন বা অ্যালার্জি প্রতিক্রিয়া হতে পারে। সুতরাং, যদি আপনার বাড়িতে শিশু বা পোষা থাকে (বিড়াল, কুকুর ইত্যাদি), তাহলে গাছটি এমন জায়গায় রাখুন যেখানে তারা পৌঁছাতে পারবে না। অথবা আপনি এমন গাছ বেছে নিন যা পোষা-বান্ধব।
            </p>
            <p>
              গোল্ডেন পথাস বা সুপারি লতা (Botanical Name: Epipremnum aureum) হলো সবচেয়ে জনপ্রিয় ও সহজ পরিচর্যার ইনডোর গাছ গুলোর মধ্যে একটি। এই গাছ তার হার্ট-আকৃতির সবুজ পাতা এবং সোনালি-হলুদ দাগের জন্য বিখ্যাত। এটি দ্রুত বৃদ্ধি পায় এবং কম যত্নেও ভালো থাকে, তাই নতুন গার্ডেনারদের জন্য আদর্শ। গোল্ডেন পথাস বাতাস পরিশোধন করে এবং ঘরের সৌন্দর্য বাড়ায়।
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="text-green-600 font-bold mb-2">{product.price}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <button className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Customer Reviews & Ratings</h2>
          <p className="text-sm text-gray-600 mb-6">See what other gardeners are saying about this product</p>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-800 mb-2">4.7</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm text-gray-600">Based on 1,247 reviews</div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-600 w-12">{star} Star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${star === 5 ? 'bg-green-500 w-[80%]' : star === 4 ? 'bg-green-400 w-[15%]' : 'bg-orange-400 w-[5%]'}`}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{star === 5 ? '847' : star === 4 ? '324' : '76'}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition mb-6 flex items-center gap-2">
            ✓ Write Review
          </button>

          {/* Review Highlights */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Review Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {['Easy to Grow', 'Good Quality', 'Arrival Healthy', 'Great Value', 'Smaller than Expected'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border-2 border-green-200 text-green-700 bg-green-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${review.name}&background=random`}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800">{review.name}</span>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">✓ Verified Purchase</span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{review.text}</p>
                    {review.images && (
                      <div className="flex gap-2 mb-3">
                        {review.images.map((img, idx) => (
                          <img key={idx} src={img} alt="Review" className="w-20 h-20 rounded-lg object-cover" />
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <button className="flex items-center gap-1 hover:text-green-600">
                        <ThumbsUp size={14} />
                        Helpful ({review.helpful})
                      </button>
                      {review.replies && (
                        <button className="flex items-center gap-1 hover:text-green-600">
                          <MessageCircle size={14} />
                          Replied ({review.replies.length})
                        </button>
                      )}
                    </div>
                    {review.replies && (
                      <div className="mt-4 ml-8 bg-green-50 border-l-4 border-green-600 p-4 rounded">
                        {review.replies.map((reply, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-green-700 text-sm mb-1">{reply.author}</div>
                            <div className="text-xs text-gray-500 mb-2">{reply.date}</div>
                            <p className="text-sm text-gray-700">{reply.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="border-2 border-green-700 text-green-700 px-6 py-2 rounded-lg font-medium hover:bg-green-50 transition">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenPothosProduct;