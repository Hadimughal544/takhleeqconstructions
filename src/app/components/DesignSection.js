"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react'

const images = [
  "/assets/slide1.jpg",
  "/assets/slide2.jpg",
]

export default function DesignSection() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 9000);
      return () => clearInterval(interval);
    }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        {/* Left Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            BUILDING WITH TAKHLEEQ CONSTRUCTION
          </p>

          <p className="text-gray-600 leading-relaxed">
            Takhleeq provides expert construction solutions for residential and commercial projects—trusted by homeowners, developers, and businesses alike.
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900">
            Shaping Smarter Spaces
          </h2>

          <ul className="space-y-4">
            {[
              "Self-Build Projects",
              "Custom Build Projects",
              "Housing Developments",
              "Commercial Spaces & Offices",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-lg font-semibold text-gray-800"
              >
                <CheckCircle className="h-5 w-5 text-orange-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Whether you're building from the ground up or refining an existing space, Takhleeq is here to guide your journey—offering structural reliability, design flexibility, and a customer-first approach every step of the way.
          </p>

          <Link href="/Designservice">
          <button className="mt-4 px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-400 hover:text-white cursor-pointer transition">
            Discover Our Design Services →
          </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] md:h-[350px] rounded-lg overflow-hidden shadow-lg">
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
            </div>
        
        
      </div>
    </section>
  );
}
