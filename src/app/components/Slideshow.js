"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = ["/assets/architects1-1.gif", "/assets/architects2-1.gif", "/assets/tasla-1.gif", "/assets/Marbel-1.gif"];

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  h-[700px] md:h-[700px] lg:h-[700px] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          priority={index === currentImage}
          className={`object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentImage ? "opacity-100 animate-zoom" : "opacity-0"}
          `}
        />
      ))}

      {/* overlays */}
      <div className="absolute inset-0 bg-orange-800/40 z-10"></div>
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-20 px-4 sm:px-8 ">
        <Image
          src={"/assets/Logo-Takhleeq1.png"}
          alt="main logo"
          height={80}
          width={200}
          className="mb-4 sm:mb-6"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg text-center leading-snug">
          Where Vision Meets Precision
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg text-justify max-w-3xl">
          Takhleeq Construction delivers visionary real estate solutions where
          architecture meets purpose, interiors blend elegance with utility, and
          every detail from landscaping to furniture design reflects precision,
          originality, and client-first innovation. With cutting-edge tools and
          a commitment to long-term partnerships, we build more than spaces we
          build trust across Pakistan.
        </p>

        <hr className="border-t-2 border-white w-2/3 sm:w-1/3 mx-auto mb-4 sm:mb-6" />

        <Link href="/ContactForm">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-blue-950 border-2 rounded-2xl border-white text-white font-semibold shadow-md hover:bg-orange-600 hover:border-blue-950 transition cursor-pointer">
            Estimate Your Project
          </button>
        </Link>
      </div>
    </div>
  );
}
