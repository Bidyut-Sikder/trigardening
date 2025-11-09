import { CiCamera } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
export default function PlantClinic() {
  return (
    <section className="py-20 bg-[#FFFFF]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Side */}
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Plant Clinic Analysis
          </h2>
          <p className="text-gray-600 mt-3 max-w-md">
            Upload a photo of your plant and get instant AI-powered diagnosis
            with treatment recommendations from our experts
          </p>

          <button className="mt-6 bg-[#7A9B57] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-secondary hover:text-primary transition">
            <FaCamera size={20} /> Diagnose Your Plant
          </button>
        </div>

        {/* Right Image Side */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Rectangle7.png"
            alt="Plant Leaves"
            className="w-64 h-72 object-cover rounded-4xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
