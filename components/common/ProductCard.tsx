import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({ item }: { item: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden">
      <img src={item.image} alt={item.name} className="h-36 w-full object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500">{item.category}</p>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{item.name}</h3>

        <p className="text-primary font-semibold mt-2">
          ৳ {item.price}
        </p>

        <div className="flex items-center text-yellow-500 text-sm mt-1">
          <FaStar />
          <span className="ml-1 font-medium">{item.rating}</span>
          <span className="text-gray-500 ml-2">({item.reviews})</span>
        </div>

        <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}
