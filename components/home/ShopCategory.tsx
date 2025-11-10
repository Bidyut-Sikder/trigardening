export default function ShopCategories() {
  const items = [
    {
      image: "/category/PottedPlant.png",
      title: "Plants",
      desc: "Indoor & Outdoor Plants",
    },
    {
      image: "/category/EarthCare.png",
      title: "Medicine",
      desc: "Natural plant care solutions",
    },
    {
      image: "/category/FireShovel.png",
      title: "Equipment",
      desc: "Professional tools",
    },
    {
      image: "/category/SolidFertilizer.png",
      title: "Fertilizers",
      desc: "Effective plant protection",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary">
        Shop by Category
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F2F5E4] p-6 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <div className=" bg-white p-2 rounded-full flex items-center justify-center">
              <img
                src={item.image}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
