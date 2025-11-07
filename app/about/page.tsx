import { FiCheckCircle } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaPhone, FaWhatsapp } from "react-icons/fa";

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
      title: "Plant Clinic Analysis",
      desc: "Get expert analysis by uploading photos of your plant problems and receive treatment recommendations.",
    },
    {
      title: "Expert Blog Content",
      desc: "Seasonal guides, detailed tutorials, and tips from our gardening professionals every week.",
    },
    {
      title: "Satisfaction Guarantee",
      desc: "We stand behind our recommendations and services to ensure you find the right solution.",
    },
  ];

  return (
    <div className="text-center">
      {/* ✅ Hero Section */}
      <section
        className="h-[65vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Your Trusted Partner in Gardening
        </h1>
        <p className="mt-4 max-w-xl text-gray-200">
          Cultivating expertise, growing communities, and nurturing your
          gardening dreams for over a decade
        </p>
        <button className="mt-6 bg-secondary text-primary py-3 px-6 rounded-full font-bold">
          Meet Our Team
        </button>
      </section>

      {/* ✅ Team Experts */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-primary">
          Meet Our Gardening Experts
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Our team brings expert knowledge to help your garden flourish.
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
              <h3 className="mt-4 font-bold text-lg text-gray-900">
                {member.name}
              </h3>
              <p className="text-primary text-sm mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Commitment Section */}
      <section className="py-16 bg-[#F5F9E9]">
        <h2 className="text-3xl font-bold text-primary">
          Our Commitment to You
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          We provide the knowledge & tools for gardening success.
        </p>

        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6 mt-10">
          {commitments.map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
              <FiCheckCircle className="text-primary text-3xl mx-auto" />
              <h3 className="font-bold text-lg mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Community Section */}
      <section className="py-16 bg-[#CEDDA8]">
        <h2 className="text-3xl font-bold text-primary">
          Join Our TriGardening Community
        </h2>
        <p className="text-gray-700 mt-2 max-w-xl mx-auto">
          Tips, forums & gardening fun — join us today!
        </p>

        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 mt-12 items-center">
          {/* Text */}
          <div className="text-left">
            <h4 className="font-bold text-lg text-primary">Facebook Forum</h4>
            <p className="text-gray-700 mt-1 text-sm">
              Connect with 10,000+ gardeners in Bangladesh. Share tips, ask
              questions!
            </p>

            <h4 className="font-bold mt-6 text-lg text-primary">
              YouTube Channel
            </h4>
            <p className="text-gray-700 mt-1 text-sm">
              Learn faster with step-by-step gardening tutorials & guides.
            </p>

            <div className="flex gap-4 mt-6">
              <a className="bg-primary text-white p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a className="bg-primary text-white p-3 rounded-full">
                <FaYoutube />
              </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Get In Touch
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Have questions? We're here to help you grow your gardening
              knowledge
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* ✅ Contact Info & Map */}

            <div className="bg-white p-8 rounded-2xl   space-y-6 max-w-md mx-auto">
              {/* Phone */}
              <div className="flex items-center gap-2 p-4 rounded-xl  hover:bg-primary/10 transition">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">01712-452342</p>
                </div>
              </div>

              {/* Facebook Page */}
              <div className="flex items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaFacebookF className="text-primary text-xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Facebook Page</h4>
                  <p className="text-gray-600 text-sm">fb.com/gardening.tri</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2 p-4 rounded-xl hover:bg-primary/10 transition">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaWhatsapp className="text-primary text-2xl" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600 text-sm">01712-452342</p>
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

            {/* <form className="bg-white p-8 border-gray-200 rounded-xl  space-y-5">
              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full p-3 rounded-lg mt-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg mt-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg mt-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg mt-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7A9B57] text-primary py-3 rounded-full font-semibold shadow hover:bg-secondary hover:text-primary transition"
              >
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </section>
    </div>
  );
}

//////////////
