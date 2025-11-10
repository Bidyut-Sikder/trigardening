import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";

import Image from "next/image";
import { TbBrandWhatsappFilled } from "react-icons/tb";
export default function About() {
  const experts = [
    {
      name: "Aminul Islam Sagor",
      role: "CEO & Gardening Expert",
      img: "https://i.pravatar.cc/150?img=54",
      desc: "With years of hands-on gardening experience, Sagor leads Trigardening with passion and expertise, ensuring customers get the best advice.",
    },
    {
      name: "Marium Nipu",
      role: "Plant Care Specialist",
      img: "https://i.pravatar.cc/150?img=32",
      desc: "From creative gardening blogs to personalized consulting, Nipu helps the community grow, learn, and stay inspired.",
    },
    {
      name: "Another Person",
      role: "Horticulture Specialist",
      img: "https://i.pravatar.cc/150?img=12",
      desc: "Providing expert advice and support to help all gardeners achieve success in their green journey.",
    },
  ];

  const commitments = [
    {
      image: "/dot.png",
      title: "Plant Clinic Analysis",
      desc: "Get expert diagnosis for plant problems with our comprehensive AI analysis service. Upload photos and receive detailed treatment plans.",
    },
    {
      image: "/handpen.png",
      title: "Expert Blog Content",
      desc: "Access weekly articles, seasonal guides, and in-depth tutorials written by our certified horticulturists and plant specialists.",
    },
    {
      image: "/handsetting.png",
      title: "Satisfaction Guarantee",
      desc: "We stand behind our advice and products. If you're not completely satisfied, we'll work with you until we find the right solution.",
    },
  ];

  return (
    <div className="text-center">
      {/* ✅ Hero Section */}
      <section
        className="h-[65vh] relative bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            Your Trusted Partner in Gardening
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-[#FFFFFF]">
            Cultivating expertise, growing communities, and nurturing your
            gardening dreams for over a decade
          </p>
          <button className="mt-6 bg-[#CC7722] text-primary py-3 px-6 rounded-full font-bold">
            Meet Our Team
          </button>
        </div>
      </section>

      {/* ✅ Team Experts */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl sm:text-xl font-bold text-[#2D5016]">
          Meet Our Gardening Experts
        </h2>
        <p className="text-[#2D5016] mt-2 max-w-xl mx-auto">
          Our passionate team of horticulturists and plant specialists brings
          years of combined experience to help your garden flourish
        </p>

        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">
          {experts.map((member, i) => (
            <div
              key={i}
              className="bg-[#F4F6E5] rounded-xl p-6 text-center shadow-sm"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto object-cover rounded-full border-4 border-white"
              />
              <h3 className="mt-4 font-bold text-lg text-[#2D5016]">
                {member.name}
              </h3>
              <p className="text-[#7A9B57] text-sm mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Commitment Section */}
      <section className="py-16 bg-[#F5F9E9]">
        <h2 className="text-3xl font-bold text-[#2D5016]">
          Our Commitment to You
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We're dedicated to providing you with the knowledge, tools, and
          support needed for gardening success
        </p>

        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">
          {commitments.map((item, i) => (
            <div key={i} className="p-6 rounded-xl text-center">
              {/* Icon Container */}
              <div className="w-14 h-14 p-2 rounded-full flex justify-center items-center bg-white  mx-auto">
                <Image
                  src={item.image}
                  height={50}
                  width={50}
                  alt="icon"
                  className="rounded-full"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mt-4">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Community Section */}
      <section className="py-16 bg-[#7A9B57]">
        <h2 className="text-3xl font-bold text-white">
          Join Our TriGardening Community
        </h2>
        <p className="text-white mt-2 max-w-xl mx-auto">
          Tips, forums & gardening fun — join us today!
        </p>

        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 mt-12 items-center">
          <div className="text-left px-4 sm:px-6 lg:px-10">
            {/* Community Items */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-full flex justify-center items-center mb-2 sm:mb-0">
                <img
                  src="/communitycon.png"
                  alt="Facebook Community"
                  className="w-full h-full  object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg sm:text-xl text-white">
                  Facebook Community Forum
                </h4>
                <p className="text-white mt-1 text-sm sm:text-base">
                  Connect with 10,000+ gardeners in Bangladesh. Share tips, ask
                  questions!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-full flex justify-center items-center mb-2 sm:mb-0">
                <img
                  src="/youtubeicon.png"
                  alt="YouTube Channel"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg sm:text-xl text-white">
                  Trigardening Youtube Channel
                </h4>
                <p className="text-white mt-1 text-sm sm:text-base">
                  Join us on YouTube for quick gardening tips, tricks, and
                  guides to grow smarter.
                </p>
              </div>
            </div>

            {/* Join Button */}
            <div className="text-center mt-6">
              <button className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80"
            className="rounded-xl shadow-md"
            alt="Community Garden"
          />
        </div>
      </section>

      {/* ✅ Contact CTA */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5016]">
              Get In Touch
            </h2>
            <p className="text-[#2D5016] mt-2 max-w-2xl mx-auto">
              Have questions? We're here to help you grow your gardening
              knowledge
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* ✅ Contact Info & Map */}

            <div className="bg-white p-8 rounded-2xl   space-y-6 max-w-md mx-auto">
              {/* Phone */}
              <div className="flex items-center gap-2 p-4 rounded-xl  hover:bg-primary/10 transition">
                <div className="p-3 bg-[#7A9B57] rounded-full">
                  <FaPhoneAlt className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#2D5016]">Phone</h4>
                  <p className="text-[#2D5016] text-sm">01712-452342</p>
                </div>
              </div>

              {/* Facebook Page */}
              <div className="flex items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition">
                <div className="p-3 bg-[#7A9B57] rounded-full">
                  <FaFacebookF className="text-white " size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#686867]">
                    Facebook Page
                  </h4>
                  <p className="text-[#2D5016] text-sm">fb.com/gardening.tri</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition">
                <div className="p-3 bg-[#7A9B57] rounded-full">
                  <TbBrandWhatsappFilled className="text-white " size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-[#2D5016]">WhatsApp</h4>
                  <p className="text-[#2D5016] text-sm">01712-452342</p>
                </div>
              </div>
            </div>

            {/* ✅ Contact Form */}

            <form className="max-w-2xl mx-auto bg-white p-7 rounded-2xl space-y-6 border border-gray-300">
              {/* Form Title */}

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              />

              {/* Message box */}
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full p-3 resize-none rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7A9B57] text-white py-3 rounded-lg font-semibold shadow-sm hover:bg-secondary hover:text-primary transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
