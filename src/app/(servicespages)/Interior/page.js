'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";

export default function Architecture() {
  return (
    <main>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
                <Image
                  src="/assets/bg/interior-bg.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55  z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Interior Design Services
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Designing with Purpose. Building with Precision.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    At Takhleeq Constructions, our interior services are more than just finishes—they’re about creating 
    environments that work beautifully and feel uniquely yours. Whether you're designing a home, office, 
    or commercial space, we deliver interiors that combine style, function, and long-term durability.

  </p>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0 ">
      <Image
        src="/assets/interior/residentialinterior.jpg"
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

      <h1 className="text-xl font-semibold mb-4">Residential Interior Excellence</h1>
      <p className="text-justify">
        At Takhleeq Constructions, we believe your home should be a reflection of your lifestyle,
         values, and personal taste. Our residential interior services are designed to create spaces
          that feel warm, functional, and timeless—from cozy family lounges to luxurious villas and
           apartments. We carefully balance comfort, elegance, and practicality, ensuring that every 
           element from spatial layout and lighting to material selection and finishes—works in harmony.
            Whether you're seeking modern minimalism, classic charm, or a fusion of styles, we tailor
             each design to enhance everyday living and long-term satisfaction.
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
      <h1 className="text-xl font-semibold mb-4">Smart Commercial Interior</h1>
      <p className="text-justify">
        Your commercial space is more than just a workplace it’s a statement of your brand, culture,
         and professionalism. At Takhleeq Constructions, we design interiors for offices, retail outlets,
          clinics, and industrial units that prioritize functionality, flow, and visual impact. Our layouts
           are crafted to support productivity, improve customer experience, and reinforce your brand identity.
            From ergonomic planning and lighting design to integrated technology and aesthetic detailing, we 
            ensure your space performs efficiently while leaving a lasting impression on clients and staff alike
      </p>
    </motion.div>
     {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/interior/commercialinterior.jpg"
        alt="TMA logo"
        fill
        priority
        className="object-cover rounded-lg"
      />
    </div>
  </div>

   <motion.div
           className=" flex items-center justify-center"
           initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1.5, ease: "easeInOut" }}
viewport={{ once: true }}

          >

            <Link href="tel:+923004096765" className=' p-4 bg-orange-500 rounded-xl px-10  flex gap-4 items-center justify-center text-white text-xl font-bold hover:bg-[#302560] '>
  <FaPhone className=' text-5xl md:text-2xl' />
  <h3 className=' hover:underline text-sm md:text-xl'>
    From Idea to Execution Let’s Begin.
Click to Call Now and Skip the Delays.
  </h3>
  </Link>

          </motion.div>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/interior/interiorfixing.jpg"
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
      <h1 className="text-xl font-semibold mb-4">Custom Fixtures & Finishing Touches</h1>
      <p className="text-justify">
       Details make the difference. That’s why Takhleeq Constructions offers custom-built furniture,
        cabinetry, and fixtures that are tailored to your space, style, and usage needs. Whether you
         prefer sleek modern lines or rich traditional textures, our craftsmen deliver precision and 
         durability in every piece. Our finishing services include expert flooring installation, wall 
         treatments, ceiling designs, and hardware selection—all executed with care and consistency.
          We ensure that every corner of your interior reflects quality, cohesion, and character.
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
      <h1 className="text-xl font-semibold mb-4"> Sustainable & Smart Choices</h1>
      <p className="text-justify">
       We understand the importance of building responsibly. Takhleeq Constructions integrates sustainable
        practices and smart technologies into every interior project—helping you reduce energy costs, improve
         indoor comfort, and contribute to a healthier environment. From eco-friendly materials and water-saving 
         fixtures to smart lighting systems and insulation solutions, we offer future-ready upgrades that align
          with your values and enhance long-term efficiency. Our goal is to create interiors that are not only
           beautiful and functional but also environmentally conscious and cost-effective
      </p>
    </motion.div>
     {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/interior/sustainableinterior.jpg"
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
      <h2 className="text-2xl font-semibold mb-2"> Let’s Shape Your Space Together</h2>
      <p className="text-sm md:text-justify">
        Whether you're starting fresh or upgrading an existing interior, Takhleeq Constructions is your partner
         in creating spaces that inspire, perform, and endure.
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
