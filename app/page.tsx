/// <reference types="react" />
import CustomProductList from "@/components/common/CustomProductList";

import Hero from "@/components/home/Hero";
import PlantClinic from "@/components/home/PlantClinicAnalysis";
import ShopCategories from "@/components/home/ShopCategory";

const page = () => {
  return (
    <div>
      <Hero />

      <ShopCategories />

      <CustomProductList bg="bg-[#F5F9E9]" title={"Featured Product"} />
      <CustomProductList
        title={"Popular Products"}
        bg="bg-white"
        description={" Discover our most popular gardening essentials"}
      />
      <PlantClinic />
    </div>
  );
};

export default page;
