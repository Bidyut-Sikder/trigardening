
import ProductCard from "./ProductCard";


export default function FeaturedProducts() {
  return (
    <section className="py-14 bg-[#F5F9E9]">
      <h2 className="text-3xl font-bold text-center text-primary">
        Featured Product
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
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
    image: "/products/PexelsPhotobyJuliaVolk.png"
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "60 - 440",
    rating: 4,
    reviews: 12,
    image:
      "/products/PexelsPhotobyAnnaShvets.png",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "Equipment",
    price: "180 - 450",
    rating: 4,
    reviews: 34,
    image:
      "/products/PexelsPhotobyPavelDanilyuk.png",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: "150 - 500",
    rating: 4,
    reviews: 35,
    image:
      "/products/PexelsPhotobyFabianStroobants.png",
  },
];
