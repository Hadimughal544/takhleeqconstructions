"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const logos = [
  "/assets/DSC1.jpeg",
  "/assets/DSC2.jpeg",
  "/assets/DSC3.jpeg",
  "/assets/DSC4.jpeg",
  "/assets/DSC5.jpeg",
  "/assets/DSC6.jpeg",
  
];

export default function LogoSwiper() {
  return (
    <div className="bg-white px-2 rounded-xl h-40">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3 }, // small mobiles
          640: { slidesPerView: 3 }, // bigger mobiles
          768: { slidesPerView: 4 }, // tablets
          1024: { slidesPerView: 5 }, // laptops
          1280: { slidesPerView: 5 }, // desktops
        }

        } // number of logos visible at once
        autoplay={{
          delay: 0, // no delay between slides
          disableOnInteraction: false,
        }}
        speed={6000} // smooth scrolling speed (bigger = slower)
        allowTouchMove={false} // prevent dragging
        className="h-full bg-gray-100"
      >
        {logos.map((src, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-full"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={`Logo ${i + 1}`}
                width={200}
                height={110}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}