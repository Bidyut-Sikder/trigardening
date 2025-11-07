
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  return (
    <section className="py-14 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary">
        Popular Products
      </h2>
      <p className="text-center text-gray-600 mt-1">
        Discover our most popular gardening essentials
      </p>

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
    rating: 4.5,
    reviews: 24,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500",
  },
  {
    id: 2,
    name: "Organic Compost Fertilizer",
    category: "Fertilizer",
    price: "60 - 440",
    rating: 4.0,
    reviews: 12,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
  },
  {
    id: 3,
    name: "Pruning Shears",
    category: "Equipment",
    price: "180 - 450",
    rating: 4.3,
    reviews: 34,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: "150 - 500",
    rating: 4.8,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500",
  },
];
