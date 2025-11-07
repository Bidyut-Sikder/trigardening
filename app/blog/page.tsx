'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Phone, Leaf, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function TriGardeningBlog() {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      type: 'Post Type',
      title: '10 Essential Tips for Indoor Plant Care',
      excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
      date: 'September 19, 2025',
      readTime: '5min Read'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
      type: 'Post Type',
      title: '10 Essential Tips for Indoor Plant Care',
      excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
      date: 'September 19, 2025',
      readTime: '5min Read'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      type: 'Post Type',
      title: '10 Essential Tips for Indoor Plant Care',
      excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
      date: 'September 19, 2025',
      readTime: '5min Read'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80',
      type: 'Post Type',
      title: '10 Essential Tips for Indoor Plant Care',
      excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
      date: 'September 19, 2025',
      readTime: '5min Read'
    }
  ];

  const categories = [
    { name: 'Plant Care', count: 12 },
    { name: 'Pest Control', count: 7 },
    { name: 'DIY Gardening', count: 11 },
    { name: 'Seasonal Tips', count: 20 },
    { name: 'Sustainability', count: 4 }
  ];

  const recentPosts = [
    { title: 'Caring for succulents a beginners guide', date: 'May 23, 2025', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200&q=80' },
    { title: 'Growing perfect tomatoes for this season', date: 'May 23, 2025', image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=200&q=80' },
    { title: 'Compost Fertilizer preparing procedures', date: 'May 23, 2025', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80' },
    { title: 'Natural Pest Control Methods That Actually...', date: 'May 23, 2025', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=200&q=80' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
  

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">The TriGardening Journal</h1>
              <p className="text-gray-600">Your slogan goes here</p>
            </div>

            {/* Featured Post */}
            <div className="relative mb-12 rounded-2xl overflow-hidden h-96 group">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80"
                alt="Featured"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Your Blogpost Title goes here;</h2>
                <p className="text-lg mb-4">Your blogpost first paragraph sentence goes here...</p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                    <span>Writer's Name</span>
                  </div>
                  <span>•</span>
                  <span>September 19, 2025</span>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <span className="text-green-600 text-sm font-medium">{post.type}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Search Blog */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
              </div>
            </div>

            {/* Blog Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Blog Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between text-gray-700 hover:text-green-600 cursor-pointer transition">
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex space-x-3 cursor-pointer group">
                    <img src={post.image} alt={post.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
















      // {/* ✅ Contact Form */}

      //       <form className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg space-y-6 border border-gray-100">
      //         {/* Form Title */}
      //         <div className="text-center">
      //           <h2 className="text-2xl font-bold text-primary">
      //             Get In Touch
      //           </h2>
      //           <p className="text-gray-500 text-sm mt-1">
      //             We’d love to hear from you! Fill out the form below.
      //           </p>
      //         </div>

      //         {/* Name + Email */}
      //         <div className="grid md:grid-cols-2 gap-4">
      //           <input
      //             type="text"
      //             placeholder="Your Name"
      //             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      //             required
      //           />
      //           <input
      //             type="email"
      //             placeholder="Your Email"
      //             className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      //             required
      //           />
      //         </div>

      //         {/* Subject */}
      //         <input
      //           type="text"
      //           placeholder="Subject"
      //           className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      //           required
      //         />

      //         {/* Message box */}
      //         <textarea
      //           rows={5}
      //           placeholder="Write your message..."
      //           className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      //           required
      //         ></textarea>

      //         {/* Submit Button */}
      //         <button
      //           type="submit"
      //           className="w-full bg-primary text-white py-3 rounded-full font-semibold shadow-sm hover:bg-secondary hover:text-primary transition"
      //         >
      //           Send Message
      //         </button>
      //       </form>