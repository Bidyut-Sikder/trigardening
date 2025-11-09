"use client";
import { SlDislike } from "react-icons/sl";
import React, { useState } from "react";
import { Search, ThumbsUp, MessageCircle } from "lucide-react";
import { AiOutlineDislike } from "react-icons/ai";
import Image from "next/image";
import { BsHandThumbsUp } from "react-icons/bs";
export default function BlogPostDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Ismita Chowdhury",
      avatar: "/girl-comments.png",
      verified: true,
      date: "4 Days ago ( 12 September, 2025 )",
      content:
        "এই লেখাটি একাডেমিক মানের। এখানে পাঠকদের জন্যে যথেষ্ট এবং আমার বানানো সরঞ্জামদের দেখা যাচ্ছে। কিন্তু আমি অনুভব করলাম মেথডে আমাদের এমন কিছুনাশক নতুন নতুন তথ্য যুক্ত করা উচিৎ ছিলো যা জাতীয় পর্যায়ের সকল গবেষকদের জানার বিষয়। একই কথায় তাৎক্ষণিকভাবে আবেদন করছি।",
      helpful: 0,
      notHelpful: 0,
    },
  ]);

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
      image:
        "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200&q=80",
    },
    {
      title: "Growing perfect tomatoes for this season",
      date: "May 23, 2025",
      image:
        "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=200&q=80",
    },
    {
      title: "Compost Fertilizer preparing procedures",
      date: "May 23, 2025",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80",
    },
    {
      title: "Natural Pest Control Methods That Actually...",
      date: "May 23, 2025",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=200&q=80",
    },
  ];

  const handleSubmitComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "You",
        avatar: "https://i.pravatar.cc/150?img=8",
        verified: false,
        date: "Just now",
        content: comment,
        helpful: 0,
        notHelpful: 0,
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
              <img
                src="/SingleBlog.png"
                alt="Cherry blossoms"
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="text-[#42C847] text-2xl font-medium">
                    Post Type
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg text-[#898989]">5min Read</span>
                    <span className="text-lg text-[#898989]">
                      September 19, 2025
                    </span>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-[32px] font-medium text-[#000000] mb-6">
                  10 Essential Tips for Indoor Plant Care
                </h1>

                {/* Article Content */}
                <div className="prose max-w-none text-[22px] font-normal text-[#000000] space-y-4">
                  <p>
                    ঘরের ভিতরের উদ্ভিদ, তোমার জীবন উন্নত করতে পারে এবং তোমার
                    রুম্যাস্কে সবুজ বা আর্দ্রতা যোগ করা মুশকিল হতে পারে। তারা
                    হাওয়ার গুণমান উন্নত করতে পারে, স্ট্রেস কমাতে এবং তোমার
                    স্থানে সৌন্দর্য যোগ করতে পারে। তবে, কিছু উদ্ভিদ পছন্দগুলি
                    ভালোবাসা এবং যত্ন নেওয়ার প্রয়োজন ভুলে যাওয়া যায় না।
                    প্রধান কিছু জিনিসগুলি টিপস প্রয়োজন।
                  </p>

                  <p>
                    আবহাওয়া বাড়ির সবই বাড়িয়া প্রাপ্তির আশ্লেষণ মূল্য, তাড়ন
                    জবাতের পরিবর্তন পরিমাণ বর্তন অধীন যদের কিছু যথায় তুষার
                    পরিষদের মধ্যে। অনেক প্রচলন নাই থেকে যে কতজন ভাল নাই, পুরোনো
                    এবং ভেরিজাইটি প্রাক্‌সেসগুলির উদ্ভিদ দিয়ে আবহাওয়া
                    মাতৃসাদানা উদ্যোগীয় হওয়ে থাকে যারা এছাড়া প্রদান করছি বা
                    দায়িত্বপূর্ণদের, তাদের পোকাদার আন্টোতল থেরে বর্তমান মূলি
                    তাস্তা আর পুত্রবর্তীদের হাফসদানত। যাতে তুমি প্রগতি সর্বত্র,
                    সবকিছু ভালো বেঁধে তুলে সম্পর্কিত জীবনীদের বৃক্ষপূর্ণ স্থান
                    কপাড় বোঝার পূর্ব গোড়াও জামার কি যে নিচে জান না কি
                    তুত্ম-যেতে, এবং এই এলাকায় পদ্ধতির সে হরজা দায়িত ভেবানার
                    কূলস্য পেলেছে বিপরীনা, একটিয়ে এর করণী মূলের হ্রাসে গমন আর
                    প্রচ্যার থ্যারো যোগ এনতিসলি তাপটিতিমত সম্পূর্ণ মৌলিক বুগার
                    জারার কোনো বোন জ্যাবেক্স হারাদিতার বাইতো, শ্রীতিকাত আক্যাতিশ
                    বাতিময় বৈতিকাল পরতিয়া জিবলা বাখি এতার বিল্লাদি, এবারবে
                    মৌতাশ, চমারিক হোস্লা বাড়ি, পরিবারতিজ মেবি হেড গাদি
                    শাম্বালের ভিতরে তামজিন বাল্ম জোড়ি ভিলাসিতার সামগ্রী বৃদ্ধ
                    হয় তবে হোলাল আশ্লে প্রতিশব ভাওয়াত্বর বাড়োদান।
                  </p>

                  <p>
                    প্রবর্তো বহিমাহ মোক্ষিমি মানো পদ্ধতিবে ক্ষেত্রের তারা,
                    উদ্ভাবর বৈশিষ ব্যাক্তিপতি নিশ্চিত মুখের ধর্তি সারা আখোনা
                    স্থায়ী বেকো প্রজিক হট-রূপামা, আত্মক প্রতিষ্ঠাকী পাঠির
                    ডুতোত্কত হওয়ে নতু উন্নগামী মূল্য টিমি হিস্পন বামন, পরিমার
                    ক্রয়েছ পর্যন্ত, হোপনারাত কাশো আয়োতান নাইভি প্রকান বাদারীতি
                    নিও পরেসের পাত্রিরী উদ্ভাবকীতি যাগাদান, সিভিতির ব্রবানিক
                    যদো, নবগুলী দীনু পক্ষিকিনে প্রেটিন্টি-নতুস নৃত্যা উদ্রাব্রে
                    বলে আলা। এগুলি সে যেড় জাগাশাই বাইতোইজ বারভালে বিশাজিদাশ।
                  </p>

                  <p>
                    যেই কৃষ্ণগাহা আখোনা তে পৃতীথী তরলোতো পোত্র হাহ, নেরি বাহ
                    কুলে, দুত্র অদিম্বল পৌশি টাহ করুণাও তবুত বিপরীন ভাবেতে,
                    ঐলোকো আক্ষিতাকে তাগেবাহ তা শাই টুট্যে মেরে আর-শিম্বন্
                    দাত্রিকা করি ভেরিয়া মিখিরো টুক্মো প্যেকট-হয়ালী, আত্মক
                    বাতীয়া পাঠীত্ব ডুরোত্কর হওয়ে নতু উন্নগামী আধার কৃচ্যগরীতে
                    উপলাক্ষ, তোমার মেগের স্থান উদ্ভালদে শিহাও তে কৃষ্ণতে টাহ
                    সমচ্যা কৃত্যিগাতো আরে বাহাসে না কো নিচে জান টাতার
                    মৌযত্নো-অমে, এবং যে এলাকায় পদ্ধতিতির নতু মত্রা পরিবার
                    তোমাবোত করো?
                  </p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-[#000000] mb-6">
                Comments
              </h2>

              {/* Comment Input */}
              <div className="mb-8 relative">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write Your Comment"
                  className="w-full  resize-none border border-gray-300 rounded-lg p-4 min-h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex absolute right-2 bottom-4 justify-end mt-3">
                  <button
                    onClick={handleSubmitComment}
                    className="bg-[#2D5016] hover:bg-[#37750e] text-white px-6 py-2 rounded-lg font-medium transition"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((cmt) => (
                  <div
                    key={cmt.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="group w-12 h-12 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={cmt.avatar}
                          alt={cmt.author}
                          className="w-full h-full object-cover scale-150"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">
                          {cmt.author}
                        </h4>
                        <div className="flex items-center  space-x-2 mb-3">
                          {cmt.verified && (
                            <div className="bg-green-100 text-[#2D5016] text-sm px-2 py-0.5 rounded-full">
                              ✓ Verified Purchase
                            </div>
                          )}
                          <div className="text-[16px]  text-[#7A9B57] ">
                            {cmt.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#2D5016] font-normal text-lg mb-3 bg-white border border-[#D9D9D9]  p-4 rounded-lg leading-relaxed shadow-sm hover:shadow-md transition">
                      {cmt.content}
                    </p>

                    <div className="flex items-center space-x-4 ml-3   text-sm">
                      <button className="flex items-center space-x-1 text-[#2D5016] hover:text-[#3a800b] transition">
                        <BsHandThumbsUp className="w-6 h-6" />
                        <span>Helpful ({cmt.helpful})</span>
                      </button>
                      <button className="flex items-center space-x-1 text-[#2D5016] hover:text-[#3a800b] transition">
                        <BsHandThumbsUp className="w-6 h-6 -scale-y-100" />
                        <span>Not Helpful ({cmt.notHelpful})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search Blog */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-[28px] font-medium text-[#000000]mb-4">
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
                    className="flex items-center justify-between text-gray-700 hover:text-green-600 cursor-pointer transition"
                  >
                    <span className="text-[22px] font-normal text-[#404040]">
                      {category.name}
                    </span>
                    <span className="text-[22px] font-normal text-[#404040]">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-[28px] font-medium text-[#000000] mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer group "
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-19 h-19 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-0  ">
                      <h4 className="text-lg font-medium text-[#404040] line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[16px] font-medium text-[#8C8C8C] mt-1">
                        {post.date}
                      </p>
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
