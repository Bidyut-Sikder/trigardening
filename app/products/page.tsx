import { Star } from "lucide-react";
import FilterProducts from "@/components/common/FilterProducts";
import BreadCrumbNavigation from "@/components/common/BreadCrumb";
import ProductCard from "@/components/common/ProductCard";

export default function TriGardeningShop() {
  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-5 ">
      {/* Breadcrumb */}
      <BreadCrumbNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 pt-10">
          {/* Filters Sidebar */}
          <FilterProducts />

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Plants</h1>
                <p className="text-gray-600 mt-1">Showing 10 of 40 products</p>
              </div>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
                <option>Sort By: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button className="bg-[#7A9B57] hover:bg-[#72ac34] text-[22px] font-semibold text-white px-8 py-3 rounded-lg transition">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plant",
    price: "2000 - 3,400",
    rating: 5,
    reviews: 24,
    image: "/products/PexelsPhotobyJuliaVolk.png",
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "60 - 440",
    rating: 4,
    reviews: 12,
    image: "/products/PexelsPhotobyAnnaShvets.png",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "Equipment",
    price: "180 - 450",
    rating: 4,
    reviews: 34,
    image: "/products/PexelsPhotobyPavelDanilyuk.png",
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    category: "Indoor Plant",
    price: "2000 - 3,400",
    rating: 5,
    reviews: 24,
    image: "/products/PexelsPhotobyJuliaVolk.png",
  },
  {
    id: 5,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "60 - 440",
    rating: 4,
    reviews: 12,
    image: "/products/PexelsPhotobyAnnaShvets.png",
  },
  {
    id: 6,
    name: "Pruning Shears",
    category: "Equipment",
    price: "180 - 450",
    rating: 4,
    reviews: 34,
    image: "/products/PexelsPhotobyPavelDanilyuk.png",
  },
];
