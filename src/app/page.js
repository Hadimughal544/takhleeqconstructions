import React from 'react'
import Slideshow from './components/Slideshow'
import Image from 'next/image';
import { Star } from "lucide-react";
import { FaRulerCombined, FaTree, FaChair } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import Link from 'next/link';


export default function page() {
  return (
    <main className=' flex flex-col min-h-screen'>
      <div className='w-full '>
        <Slideshow/>
      </div>

       <div className="flex flex-col gap-8 py-20 px-20 items-center justify-center">
          {/* Cards row */}
  <div className=" flex flex-col gap-9">
    <div className='flex gap-9'>
      <div className=" text-black   w-100 h-60 ">
        <h2 className="text-black text-2xl text-left font-bold mb-5">Our Services</h2>
        <p className="text-black text-left mb-10 text-sm">We provide complete real estate development services, ensuring smooth execution from concept to completion.
</p>
        <Link href="/Services">
        <button className="px-6 py-2 bg-blue-950 border-2 rounded-2xl border-white text-white font-semibold shadow-md hover:bg-orange-600 hover:border-blue-950 transition cursor-pointer">
          View all
          </button>
          </Link>
      </div>
      <Link href="/ContactForm">
    {HoverCard(
      "/assets/services/Architecture.gif",
      < FaRulerCombined />,
      "Architecture",
      "We design purposeful spaces where form meets function, blending creativity with structural excellence."
    )}
    </Link>
    <Link href="/ContactForm">
    {HoverCard(
      "/assets/services/Construction.gif",
      <GiCargoCrane />,
      "Construction",
      "Our builds reflect integrity and precision, delivered with top-tier tools and expert craftsmanship."
    )}
    </Link>
    </div>
    <div className=' flex gap-9'>
      <Link href="/ContactForm">    
       {HoverCard(
      "/assets/services/Interior2.gif",
      <MdDesignServices  />,
      "Interior Design",
      "We craft interiors that balance beauty and utility, tailored to elevate everyday living."
    )}
    </Link>
    <Link href="/ContactForm">
        {HoverCard(
      "/assets/services/Landscap.gif",
      <FaTree />,
      "Landscaping",
      "We shape outdoor environments with lush greenery, serene water features, and thoughtful design."
    )}
    </Link>
    <Link href="/ContactForm">
    {HoverCard(
      "/assets/services/Furniture Design.gif",
      <FaChair />,
      "Furniture Design",
      "Our furniture is bespoke and original, combining timeless motifs with superior craftsmanship."
    )}
    </Link>
    
    </div>
  </div>
</div>

    </main>
  );

  function HoverCard(image, icon, title, text) {
  return (
    <div className="relative group w-100 h-60 overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Always visible title (on top of image, bottom-left) */}
      <div className="absolute bottom-4 left-4 z-10 transition duration-500 group-hover:opacity-0">
        <h3 className="text-white text-xl font-bold drop-shadow-xs">
          {title}
        </h3>
      </div>

      {/* Overlay (hidden until hover) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-left justify-center text-center p-4">
        <div className="text-white text-4xl mb-3">{icon}</div>
        <h3 className="text-white text-2xl text-left font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-left text-sm">{text}</p>
      </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-left justify-center text-center p-4">
        <div className="text-white text-4xl mb-3">{icon}</div>
        <h3 className="text-white text-2xl text-left font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-left text-sm">{text}</p>
      </div>
    </div>
  );
}

}