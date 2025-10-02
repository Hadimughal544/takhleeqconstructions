"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  { type: "video", src: "/assets/DSCV.mp4" }, // fixed video
  { type: "image", src: "/assets/DSC1.jpeg" },
  { type: "image", src: "/assets/DSC2.jpeg" },
  { type: "image", src: "/assets/DSC3.jpeg" },
  { type: "image", src: "/assets/DSC4.jpeg" },
  { type: "image", src: "/assets/DSC5.jpeg" },
  { type: "image", src: "/assets/DSC6.jpeg" },
  { type: "image", src: "/assets/DSC7.jpeg" },
  { type: "image", src: "/assets/DSC8.jpeg" },
];

export default function Serviceslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < slides.length - 2 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : slides.length - 2
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-orange-400 py-16 my-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h4 className="text-2xl font-semibold text-blue-950">
            Ready to shape your space with Takhleeq?
          </h4>
          <h2 className="text-3xl md:text-3xl font-bold text-white leading-snug">
            Let’s get your home design plans approved and ready for execution by{" "}
            <span className="text-3xl hover:underline cursor-pointer">
              Takhleeq Construction
            </span>{" "}
            with precision and care.
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Explore our specialized design services to see how we turn your
            vision into reality—built to the highest standards and tailored for
            lasting impact.
          </p>
          <Link href="/Contact-us">
          <button className="px-8 py-4 bg-blue-950 border-2 rounded-2xl border-white text-white font-semibold shadow-md hover:bg-orange-600 hover:border-blue-950 transition cursor-pointer">
            How we can support you →
          </button>
          </Link>
        </div>

        {/* Slider */}
        <div className="flex-1 flex gap-3">
          {/* Fixed First Slide */}
          <div className="w-1/3 flex-shrink-0">
            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
              {slides[0].type === "image" ? (
                <Image
                  src={slides[0].src}
                  alt="Fixed Slide"
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={slides[0].src}
                  controls
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          {/* Moving Carousel */}
          <div className="relative w-2/3 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 2)}%)`,
              }}
            >
              {slides.slice(1).map((slide, index) => (
                <div key={index} className=" w-1/2 flex-shrink-0 px-2">
                  <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg bg-black flex items-center justify-center">
                    {slide.type === "image" ? (
                      <Image
                        src={slide.src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={slide.src}
                        controls
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: slides.length - 2 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentIndex ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
