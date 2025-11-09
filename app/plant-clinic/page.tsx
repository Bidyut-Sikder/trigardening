'use client';

import React, { useState } from 'react';
import { Send, Mic, Plus, Paperclip, Search, Upload, Menu, ShoppingCart, User, Phone } from 'lucide-react';

const PlantClinic = () => {
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('এই সমস্যার কি বন্ধু, ব্যাকটি নাকি ছত্রাক?');

  const chatHistory = [
    {
      id: 1,
      type: 'user',
      text: 'আমার গাছের পাতায় হলুদ দাগ নেয়া হলে কি করতে পারি?',
      image: null
    },
    {
      id: 2,
      type: 'bot',
      text: 'অনুগ্রহ করে আপনার গাছের পাতার ছবিটি নিন অনলিতে আমি ভালো করে আপনাকে জানাতে পারব।',
      image: null
    },
    {
      id: 3,
      type: 'user',
      text: '',
      image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=600&q=80'
    },
    {
      id: 4,
      type: 'bot',
      text: 'ছবিটি বিশ্লেষণ করে বেশ কিছু স্বার্থ সম্বন্ধ পাওয়া গেছে। আপনার গাছের সম্ভবত রোগ দ্বিপ্রকারের আলো, অনুগ্রহ করে নিচের প্রশ্নগুলোর কেউ এগুলিতে কোন তথ্য দিন।',
      image: null,
      options: [
        'গাছের পাতার এই রোগ একপ্রকার কি হয়?',
        'এই সমস্যার কি বন্ধু, ব্যাকটি নাকি ছত্রাক?',
        'সংগ্যামী কি সংক্রমণ?',
        'গাছের এমন অবস্থায় কলন পাতা নাকি নেয়া উচিৎ?'
      ]
    },
    {
      id: 5,
      type: 'bot',
      text: 'ব্যবস্থা হলুদ দাগ সৃষ্টিকারী ছত্রাক অথবা বা ছত্রাকের আক্রমণের লক্ষণ হতে পারে। আপনি কি এই বিষয়ে আরও বিস্তারিত জানতে চান?',
      image: null,
      buttons: ['হ্যাঁ, বিস্তারিত চাই', 'না, ধন্যবাদ']
    }
  ];

  const historyItems = [
    'How to fix yellow leaves',
    'Mango plant leaf issue',
    'সোনালি গাছের ভেলি লম...',
    'সংরক্ষণ আগাছা ভেজল বীজ',
    'চিনামটি পাতরা পাতা অনুগু'
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-linear-to-b from-green-700 to-green-800 text-white flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-700 text-xl">🌱</span>
          </div>
          <button className="ml-auto text-white">
            <Menu size={20} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-2 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-green-600 transition">
            <Plus size={18} />
            <span className="text-sm">New Chat</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-green-600 transition">
            <Search size={18} />
            <span className="text-sm">Search Chat</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-green-600 transition">
            <Upload size={18} />
            <span className="text-sm">Uploaded Media</span>
          </button>
        </div>

        {/* History */}
        <div className="flex-1 px-4 py-6 overflow-y-auto">
          <h3 className="text-sm font-semibold mb-3 opacity-80">History</h3>
          <div className="space-y-1">
            {historyItems.map((item, idx) => (
              <button
                key={idx}
                className={`w-full text-left px-3 py-2 rounded text-sm transition ${
                  idx === 0 ? 'bg-green-600' : 'hover:bg-green-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}


        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Initial Bot Message */}
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl">🌱</span>
            </div>
            <div className="bg-green-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
              <p className="text-gray-800 text-sm leading-relaxed">
                আই গার্ডেনিং এর দক্ষতা ডিজিটে ক্যাগাসকে স্বাগতম। আমি আপনার ব্রাণ্ট তাহা আপনার গাছের লেগন করনা নিরে আনার কলা করতে চান? এখনডেল গাছের বিশেষ কলন অবস্থা আপনার এর লিঙ্গুন।
              </p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-3 justify-end">
            <div className="bg-green-700 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
              <p className="text-sm leading-relaxed">
                আমার গাছের পাতায় হলুদ দাগ নেয়া হলে কি করতে পারি?
              </p>
            </div>
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center shrink-0">
              <User size={20} className="text-green-700" />
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl">🌱</span>
            </div>
            <div className="bg-green-50 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
              <p className="text-gray-800 text-sm leading-relaxed">
                অনুগ্রহ করে আপনার গাছের পাতার ছবিটি নিন অনলিতে আমি ভালো করে আপনাকে জানাতে পারব।
              </p>
            </div>
          </div>

          {/* User Image Message */}
          <div className="flex gap-3 justify-end">
            <div className="rounded-2xl rounded-tr-none overflow-hidden shadow-lg max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=600&q=80" 
                alt="Plant leaf" 
                className="w-full h-auto"
              />
            </div>
            <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center shrink-0">
              <User size={20} className="text-green-700" />
            </div>
          </div>

          {/* Bot Response with Options */}
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl">🌱</span>
            </div>
            <div className="space-y-3 max-w-md">
              <div className="bg-green-50 rounded-2xl rounded-tl-none px-4 py-3">
                <p className="text-gray-800 text-sm leading-relaxed">
                  ছবিটি বিশ্লেষণ করে বেশ কিছু স্বার্থ সম্বন্ধ পাওয়া গেছে। আপনার গাছের সম্ভবত রোগ দ্বিপ্রকারের আলো, অনুগ্রহ করে নিচের প্রশ্নগুলোর কেউ এগুলিতে কোন তথ্য দিন।
                </p>
              </div>
              <div className="space-y-2">
                {[
                  'গাছের পাতার এই রোগ একপ্রকার কি হয়?',
                  'এই সমস্যার কি বন্ধু, ব্যাকটি নাকি ছত্রাক?',
                  'সংগ্যামী কি সংক্রমণ?',
                  'গাছের এমন অবস্থায় কলন পাতা নাকি নেয়া উচিৎ?'
                ].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(option)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition ${
                      selectedOption === option
                        ? 'bg-green-700 text-white border-green-700'
                        : 'bg-white text-gray-700 border-green-200 hover:border-green-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedOption === option && <span>✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bot Response with Buttons */}
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl">🌱</span>
            </div>
            <div className="space-y-3 max-w-md">
              <div className="bg-green-50 rounded-2xl rounded-tl-none px-4 py-3">
                <p className="text-gray-800 text-sm leading-relaxed">
                  ব্যবস্থা হলুদ দাগ সৃষ্টিকারী ছত্রাক অথবা বা ছত্রাকের আক্রমণের লক্ষণ হতে পারে। আপনি কি এই বিষয়ে আরও বিস্তারিত জানতে চান?
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800 transition">
                  হ্যাঁ, বিস্তারিত চাই
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition">
                  না, ধন্যবাদ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t bg-white px-6 py-4">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <button className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white hover:bg-green-800 transition">
              <Plus size={20} />
            </button>
            <button className="w-10 h-10 bg-white border-2 border-green-700 rounded-full flex items-center justify-center text-green-700 hover:bg-green-50 transition">
              <Paperclip size={20} />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="আপনার গাছের ছবি আপলোডও করুন অথবা লিখ নিতে থেকেনকো প্রশ্ন লিখুন....."
                className="w-full px-4 py-3 pr-12 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition">
                <Mic size={18} />
              </button>
            </div>
            <button className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white hover:bg-green-800 transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantClinic;