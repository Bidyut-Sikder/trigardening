// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FiPhoneCall, FiMail } from "react-icons/fi";

// export default function Footer() {
//   return (
//     <footer className="bg-[#2D5016] text-white pt-14 pb-6">
//       <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-bold">TriGardening</h3>
//           <p className="mt-3 text-gray-200 max-w-xs">
//             Your trusted partner for gardening essentials — plants, fertilizers,
//             medicines & expert guidance.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-gray-200">
//             <li className="hover:text-secondary cursor-pointer">Products</li>
//             <li className="hover:text-secondary cursor-pointer">Blogs</li>
//             <li className="hover:text-secondary cursor-pointer">About us</li>
//             <li className="hover:text-secondary cursor-pointer">Contact us</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Contact</h4>
//           <ul className="space-y-2 text-gray-200">
//             <li className="flex items-center gap-2">
//               <FiPhoneCall /> +880 123 456 789
//             </li>
//             <li className="flex items-center gap-2">
//               <FiMail /> support@trigardening.com
//             </li>
//           </ul>
//         </div>

//         {/* Social */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
//           <div className="flex gap-4 mt-2">
//             <a
//               href="#"
//               className="bg-white text-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition"
//             >
//               <FaFacebookF size={20} />
//             </a>
//             <a
//               href="#"
//               className="bg-white text-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition"
//             >
//               <FaInstagram size={20} />
//             </a>
//             <a
//               href="#"
//               className="bg-white text-primary p-2 rounded-full hover:bg-secondary hover:text-primary transition"
//             >
//               <FaYoutube size={20} />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="border-td border-white mt-10 pt-4 text-center text-gray-200 text-sm">
//         <div className="mb-5 w-[90%] mx-auto">
//           <hr />
//         </div>
//         © {new Date().getFullYear()} TriGardening — All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


import React from 'react'

function Footer() {
  return (
    <div>
            {/* Footer */}
      <footer className="bg-[#2D5016] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">TriGardening</h3>
              <p className="text-green-200">Your Slogan goes here</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Shippings</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Referral Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Plants</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Tools</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Fertilizers</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Pesticides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <span>f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <span>🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <span>▶️</span>
                </a>
              </div>
              <p className="text-green-200 mb-2">supprot@trigardening.com</p>
              <p className="font-bold text-lg">Call Now</p>
              <p className="text-green-200">+8801234567890</p>
            </div>
          </div>
          
          <div className="border-t border-green-700 pt-8 text-center text-green-200">
            <p>© 2025 TriGardening. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer












