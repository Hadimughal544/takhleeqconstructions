'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Constructions() {
  return (
    <main>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/assets/servicespage1.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55  z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Construction Services
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Takhleeq Constructions delivers high-quality building solutions across Pakistan,
                     turning your ideas into reality with expert craftsmanship and a commitment to sustainable,
                      long-lasting structures. From concept to completion, we ensure every project reflects precision,
                       durability, and design excellence.

                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    Takhleeq Constructions has built a strong reputation for delivering complete, end-to-end construction solutions 
    across Pakistan. With decades of experience in turnkey projects, we’re trusted by clients both locally and abroad
     for our ability to tailor each build to their unique needs and expectations.Our expert team uses premium materials
      and proven construction techniques to ensure every structure is built to perform and impress. With a collaborative,
       client-focused approach, we bring your vision to life creating spaces that reflect your goals, style, and long-term
        value.

  </p>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/constrcutions/residential.jpg"
        alt="TMA logo"
        fill
        priority
        className="object-cover rounded-lg"
      />
    </div>
    {/* Text Section */}
    <motion.div
           className="w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
      <h1 className="text-xl font-semibold mb-4">Residential Construction </h1>
      <p className="text-justify">
        At Takhleeq Constructions, we build homes that stand the test of time combining durability,
         elegance, and personalized design. Whether you prefer modern minimalism, Victorian charm, 
         Spanish flair, or a fully customized style, our team brings your vision to life with precision
          and care. Every project is tailored to reflect your lifestyle, aesthetic preferences, and 
          long-term goals.
      </p>
      <p className="text-justify">
        Our residential construction solutions cover every phase from initial planning and architectural
         design to full execution with a strong focus on sustainability, structural integrity, and seamless
          delivery. Backed by years of hands-on experience and a reputation for excellence, we ensure each
           home is crafted to the highest standards. To reinforce our commitment, we offer a 10-year 
           structural warranty giving you peace of mind and confidence in your investment.
      </p>
    </motion.div>
   
  </div>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    {/* Text Section */}
    <motion.div
           className="w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
      <h1 className="text-xl font-semibold mb-4">Commercial Construction </h1>
      <p className="text-justify">
       Takhleeq Constructions is a trusted name in turnkey commercial projects, serving
        businesses across Pakistan and overseas. We design and build each facility with
         purpose ensuring that every layout, structure, and feature aligns with your operational
          needs and brand identity. Whether you're developing office spaces, retail outlets,
           or specialized commercial buildings, our solutions are fully customized to support
            your business goals.
      </p>
      <p className="text-justify">
        Our commercial projects integrate essential features such as elevators, spacious parking,
         shared areas, advanced security systems, and energy-efficient technologies ensuring every
          detail is thoughtfully addressed. Known for our efficient execution and high-quality builds,
           we deliver functional, stylish, and future-ready spaces that empower your business from day one
      </p>
    </motion.div>
    {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/constrcutions/commercial.jpg"
        alt="TMA logo"
        fill
        priority
        className="object-cover rounded-lg"
      />
    </div>
  </div>

  <div className="mt-12 w-full max-w-5xl mx-auto px-4">
  <div className="bg-[#302560] text-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <div className="text-center md:text-left max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2">Ready to Start Your Project?</h2>
      <p className="text-sm md:text-justify">
        Our construction services are built to transform your vision into reality with precision, reliability, and expert craftsmanship.
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
