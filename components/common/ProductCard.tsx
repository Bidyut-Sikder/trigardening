import { FaStar } from "react-icons/fa";

export default function ProductCard({ item }: { item: any }) {
  return (
    <div className="relative group bg-white h-[380px] rounded-xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer transition">
      {/* Overlay Add to Cart Button (Hidden by default) */}
      <button
        className="absolute md:w-[200px] w-[300px] justify-center  top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-[#2D5016] text-white py-2 px-4 rounded-lg flex items-center gap-2
        opacity-0 group-hover:opacity-100 z-20 transition duration-300"
      >
        Add to Cart
      </button>

      {/* Blur on hover */}
      <div className="absolute inset-0 bg-black/2 opacity-0 group-hover:opacity-80 backdrop-blur-sm transition z-10"></div>

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover"
      />

      {/* Content Area */}
      <div className="flex flex-col grow p-4 gap-1">
        <p className="text-sm text-gray-500 line-clamp-1">{item.category}</p>

        <h3 className="text-md font-medium text-gray-800 line-clamp-2">
          {item.name}
        </h3>

        <p className="text-[#CC7722] md:text-2xl font-semibold">
          ৳ {item.price}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= Math.round(item.rating)
                  ? "text-yellow-500"
                  : "text-white"
              }
              style={{ stroke: "gray", strokeWidth: 20 }}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({item.reviews})</span>
        </div>

        {/* Bottom Button - Changes on hover */}
        <button
          className="w-full group-hover:hidden  mt-auto bg-[#2D5016] text-white py-2 rounded-lg
          transition z-20 text-[22px] font-semibold"
        >
          Add to Cart
        </button>
        <button>
          <span
            className="absolute sm:w-[225px] md:w-[350px] w-[372px] left-1/2 bottom-0 -translate-x-1/2
    bg-[#7A9B57] text-white py-4 px-5 rounded-b-lg flex items-center justify-center
    opacity-0 translate-y-4 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
    z-20 transition-all duration-500 ease-in-out"
          >
            View Details
          </span>
        </button>
      </div>
    </div>
  );
}
