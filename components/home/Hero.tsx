export default function Hero() {
  return (
    <section
      className="h-[70vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress')",
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight">
          Nurture Your Green Paradise
        </h1>
        <p className="text-white mt-3 mb-6 text-lg">
          Your slogan goes here
        </p>

        <div className="flex gap-4">
          <button className="bg-[#CC7722] text-primary px-6 py-3 rounded-lg font-semibold">
            Shop Now
          </button>
          <button className="bg-[#CC7722] text-primary px-6 py-3 rounded-lg font-semibold">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
