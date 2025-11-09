"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

export default function TriGardeningBlog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      image: "/Rectangle21.png",
      type: "Post Type",
      title: "10 Essential Tips for Indoor Plant Care",
      excerpt:
        "Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...",
      date: "September 19, 2025",
      readTime: "5min Read",
    },
    {
      id: 2,
      image: "/Rectangle21(1).png",
      type: "Post Type",
      title: "10 Essential Tips for Indoor Plant Care",
      excerpt:
        "Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...",
      date: "September 19, 2025",
      readTime: "5min Read",
    },
    {
      id: 3,
      image: "/Rectangle21(2).png",
      type: "Post Type",
      title: "10 Essential Tips for Indoor Plant Care",
      excerpt:
        "Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...",
      date: "September 19, 2025",
      readTime: "5min Read",
    },
    {
      id: 4,
      image: "/Rectangle21(3).png",
      type: "Post Type",
      title: "10 Essential Tips for Indoor Plant Care",
      excerpt:
        "Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...",
      date: "September 19, 2025",
      readTime: "5min Read",
    },
  ];

  const categories = [
    { name: "Plant Care", count: 12 },
    { name: "Pest Control", count: 7 },
    { name: "DIY Gardening", count: 11 },
    { name: "Seasonal Tips", count: 20 },
    { name: "Sustainability", count: 4 },
  ];

  const recentPosts = [
    {
      title: "Caring for succulents a beginners guide",
      date: "May 23, 2025",
      image: "Rectangle21(1).png",
    },
    {
      title: "Growing perfect tomatoes for this season",
      date: "May 23, 2025",
      image: "Rectangle21(1).png",
    },
    {
      title: "Compost Fertilizer preparing procedures",
      date: "May 23, 2025",
      image: "Rectangle21(1).png",
    },
    {
      title: "Natural Pest Control Methods That Actually...",
      date: "May 23, 2025",
      image: "Rectangle21(1).png",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              The TriGardening Journal
            </h1>
            <p className="text-gray-600">Your slogan goes here</p>
          </div>

          {/* Featured Post */}
          <div className="relative mb-12 p-0 rounded-2xl overflow-hidden w-full h-[400px]  group">
            <Image
              fill
              src="/Rectangle14.png"
              alt="Featured"
              className=" object-cover "
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-semibold mb-2">
                Your Blogpost Title goes here;
              </h2>
              <p className="text-2xl font-medium mb-4">
                Your blogpost first paragraph sentence goes here...
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white">
                    <Image
                      width={30}
                      height={30}
                      src="/Shape.png"
                      alt="Author"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
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
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <Image
                  height={300}
                  width={400}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-[#42C847] text-sm font-medium">
                    {post.type}
                  </span>
                  <h3 className="text-2xl font-medium text-[#000000] mt-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[#000000] text-lg font-normal mb-4">{post.excerpt}</p>
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
            <button className="bg-[#7A9B57] hover:bg-[#72ac34] text-[22px] font-semibold text-white px-8 py-3 rounded-lg transition">
              Load More Articles
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Search Blog */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-[28px] font-medium text-[#000000] mb-4">
              Search Blog
            </h3>
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
            <h3 className="text-[28px] font-medium text-[#000000] mb-4">
              Blog Categories
            </h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between font-normal text-[22px] text-[#404040]  cursor-pointer transition"
                >
                  <span>{category.name}</span>
                  <span className=" font-normal text-[22px] text-[#404040]">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-[28px] font-medium text-[#000000]  mb-4">
              Recent Posts
            </h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex space-x-3 cursor-pointer group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-green-600 transition line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-[16px] text-[#8C8C8C] font-normal mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}