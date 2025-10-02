'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";

export default function Constructions() {
  return (
    <main>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/assets/renovationpage1.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55  z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Renovation & Remodeling Services 
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Revive, Refine, Reimagine Transforming Spaces with Precision and Purpose
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    At Takhleeq Constructions, we specialize in breathing new life into existing structures whether it’s a home,
     office, or commercial facility. Our renovation services are designed to enhance functionality, elevate
      aesthetics, and extend the lifespan of your property. From minor upgrades to full-scale transformations,
       we deliver results that reflect your vision and meet modern standards of comfort, safety, and style

  </p>

  <div className="w-full ">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
    What We Offer
  </h2>

  <div className="space-y-12">

    {/* Interior Renovation */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold ">Interior Renovation</h3>
        <p className="mt-2 text-gray-600">
          Upgrade your living or working space with tailored interior solutions from layout
          reconfigurations and flooring replacements to lighting, cabinetry, and finishes.
          We focus on usability, ambiance, and long-term value.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/assets/renovations/interior.jpg"
          alt="Interior Renovation"
          className="rounded-xl shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>

    {/* Exterior Remodeling */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1">
        <img
          src="/assets/renovations/exterior.jpg"
          alt="Exterior Remodeling"
          className="rounded-xl shadow-lg w-full h-64 object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold ">Exterior Remodeling</h3>
        <p className="mt-2 text-gray-600">
          Boost curb appeal and structural integrity with exterior enhancements such as
          façade redesigns, roofing upgrades, boundary walls, and landscaping. Every detail
          is crafted to reflect your taste and improve durability.
        </p>
      </div>
    </div>

     <motion.div
           className=" flex items-center justify-center"
           initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1.5, ease: "easeInOut" }}
viewport={{ once: true }}

          >

            <Link href="/service" className=' p-4 bg-orange-500 rounded-xl px-10  flex gap-4 items-center justify-center text-white text-xl font-bold hover:bg-[#302560] '>
  <FaPhone  />
  <h3 className=' hover:underline'>
    From Idea to Execution Let’s Begin.
Click to Call Now and Skip the Delays.
  </h3>
  </Link>

          </motion.div>

    {/* Structural Improvements */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold ">Structural Improvements</h3>
        <p className="mt-2 text-gray-600">
          We assess and reinforce aging structures to meet current safety codes and
          performance standards. Whether it’s foundation work, load-bearing adjustments,
          or waterproofing, we ensure your space is built to last.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/assets/renovations/stuctural.jpg"
          alt="Structural Improvements"
          className="rounded-xl shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>

    {/* Energy-Efficient Upgrades */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-8">
      <div className="flex-1">
        <img
          src="/assets/renovations/commercial.jpg"
          alt="Energy-Efficient Upgrades"
          className="rounded-xl shadow-lg w-full h-64 object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold ">Commercial Renovation</h3>
        <p className="mt-2 text-gray-600">
          Revamp retail spaces, offices, and industrial units to match evolving business
          needs. We deliver functional layouts, brand-aligned aesthetics, and
          compliance-ready upgrades that support your growth.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="mt-12 w-full max-w-5xl mx-auto px-4">
  <div className="bg-[#302560] text-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <div className="text-center md:text-left max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2">Ready to Transform Your Space?</h2>
      <p className="text-sm md:text-justify">
        Whether you're refreshing a single room or reimagining an entire property, Takhleeq Constructions
         is here to deliver results that exceed expectations. Let’s turn your existing space into something extraordinary.
      </p>
    </div>

    {/* Button */}
    <div>
      <Link href="/ContactForm">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all">
          Get a Quote
        </button>
      </Link>
    </div>
  </div>
</div>
</div>

    </main>
  )
}
