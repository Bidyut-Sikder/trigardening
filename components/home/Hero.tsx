"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function HeroSlider() {
  const slides = ["/Rectangle4.png", "/Rectangle4.png", "/Rectangle4.png"];

  return (
    <section className="relative h-[60vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center relative"
              style={{ backgroundImage: `url('${src}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white max-w-xl leading-tight">
                  Nurture Your Green Paradise
                </h1>
                <p className="text-white mt-3 mb-6 text-lg">
                  Your slogan goes here
                </p>

                <div className="flex gap-4">
                  <Link href={'/products'} className="bg-[#CC7722] text-primary px-6 py-3 rounded-lg font-semibold">
                    Shop Now
                  </Link>
                  <Link href={'/about'} className="bg-[#CC7722] text-primary px-6 py-3 rounded-lg font-semibold">
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
