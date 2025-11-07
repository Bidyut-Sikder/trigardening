/// <reference types="react" />
import FeaturedProducts from '@/components/common/FeaturedProducts'
import PopularProducts from '@/components/common/PopularProjects'
import Hero from '@/components/home/Hero'
import PlantClinic from '@/components/home/PlantClinicAnalysis'
import ShopCategories from '@/components/home/ShopCategory'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <ShopCategories />
      <FeaturedProducts />
      <PopularProducts />
      <PlantClinic />
    </div>
  )
}

export default page