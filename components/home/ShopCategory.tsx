


import { GiPlantRoots, GiMedicines, GiFarmTractor, GiFertilizerBag } from "react-icons/gi";

export default function ShopCategories() {
  const items = [
    { icon: <GiPlantRoots size={40} />, title: "Plants", desc: "Indoor & Outdoor Plants" },
    { icon: <GiMedicines size={40} />, title: "Medicine", desc: "Natural plant care solutions" },
    { icon: <GiFarmTractor size={40} />, title: "Equipment", desc: "Professional tools" },
    { icon: <GiFertilizerBag size={40} />, title: "Fertilizers", desc: "Effective plant protection" },
  ];

  return (
    <section className="py-14 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary">Shop by Category</h2>

      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F2F5E4] p-6 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-primary">{item.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
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
      "https://images.unsplash.com/photo-1590086782792-42dd2350140c?w=500",
  },
  {
    id: 4,
    name: "Snake Plant",
    category: "Indoor Plant",
    price: "150 - 500",
    rating: 4.8,
    reviews: 35,
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a48a?w=500",
  },
];


