import React from 'react';
import Slideshow from './components/Slideshow';
import Image from 'next/image';
import { FaRulerCombined, FaTree } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import Link from 'next/link';

export default function page() {
  return (
    <main className='flex flex-col min-h-screen'>
      {/* Slideshow */}
      <div className='w-full'>
        <Slideshow />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-6 lg:px-20 max-w-[1200px] mx-auto">
        {/* Text Card */}
        <div className="bg-white text-black p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-sm mb-6">
            We provide comprehensive construction solutions, ensuring smooth execution from initial planning to final handover
          </p>
          <Link href="/Services">
            <button className="px-6 py-2 bg-blue-950 border-2 rounded-2xl border-white text-white font-semibold shadow-md hover:bg-orange-600 hover:border-blue-950 transition cursor-pointer">
              View all
            </button>
          </Link>
        </div>

        {/* Service Cards */}
        {[
          {
            img: "/assets/services/Architecture1.gif",
            icon: <FaRulerCombined />,
            title: "Architecture",
            text: "We design purposeful spaces where form meets function, blending creativity with structural excellence.",
            link: "/Architecture"
          },
          {
            img: "/assets/services/Construction-1.gif",
            icon: <GiCargoCrane />,
            title: "Construction",
            text: "Our builds reflect integrity and precision, delivered with top-tier tools and expert craftsmanship.",
            link: "/Construction"
          },
          {
            img: "/assets/services/Interior2-1.gif",
            icon: <MdDesignServices />,
            title: "Interior Design",
            text: "We craft interiors that balance beauty and utility, tailored to elevate everyday living.",
            link: "/Interior"
          },
          {
            img: "/assets/services/Landscap-1.gif",
            icon: <FaTree />,
            title: "Landscaping",
            text: "We shape outdoor environments with lush greenery, serene water features, and thoughtful design.",
            link: "/Landscaping"
          },
          {
            img: "/assets/services/costestimate.gif",
            icon: <SlCalculator />,
            title: "Cost Estimation",
            text: "We provide accurate project cost evaluations to help you budget effectively and plan ahead.",
            link: "/Costestimation"
          },
        ].map((service, index) => (
          <Link href={service.link} key={index}>
            {HoverCard(service.img, service.icon, service.title, service.text)}
          </Link>
        ))}
      </div>
    </main>
  );
}

// HoverCard Component
function HoverCard(image, icon, title, text) {
  return (
    <div className="relative group w-full h-72 sm:h-64 md:h-72 overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className=" absolute bg-[#302560]/60 w-full h-14 bottom-0 left-0 right-0 z-10 group-hover:opacity-0"></div>

      {/* Title (bottom-left) */}
      <div className="absolute bottom-4 left-4 z-10 transition duration-500 group-hover:opacity-0">
        <h3 className="text-white text-xl font-bold drop-shadow-xs">{title}</h3>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center p-4">
        <div className="text-white text-4xl mb-3">{icon}</div>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{text}</p>
      </div>
    </div>
  );
}
