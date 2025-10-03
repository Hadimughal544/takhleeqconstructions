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
                  src="/assets/bg/architecture-bg1.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55 z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Architectural Design Services
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    We offer top-tier architectural design solutions in major cities including Lahore, Karachi,
                     Islamabad, Multan, and beyond. Our team delivers innovative, functional, and visually striking
                      designs for both residential and commercial projects ensuring precision and quality in every detail.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    At Takhleeq Constructions, we take pride in delivering top-tier architectural design services across
    Pakistan. From luxury residences to complex commercial structures, our designs blend innovation,
    functionality, and aesthetic excellence. Whether you're building a home or a high-impact facility,
    we handle every detail with precision bringing your vision to life with clarity and craftsmanship.
  </p>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0 ">
      <Image
        src="/assets/architecture/architectural.jpg"
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

      <h1 className="text-xl font-semibold mb-4">Architectural Drawings</h1>
      <p className="text-justify">
        At Takhleeq Constructions, our architectural drawings are thoughtfully designed to meet each
        client’s specific requirements balancing precision, creativity, and functionality. We specialize
        in tailored residential and commercial layouts, including floor plans, boundary elevations, and
        premium designs for modern homes, offices, hotels, and more. Our detailed room planning enhances
        living areas, kitchens, and bedrooms to ensure both practicality and aesthetic harmony.
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
      <h1 className="text-xl font-semibold mb-4">Structural Drawings</h1>
      <p className="text-justify">
        At Takhleeq Constructions, we specialize in delivering structural drawings that prioritize strength,
         safety, and long-term durability for every project. Our engineering team combines technical expertise
          with practical insight to produce designs that meet rigorous standards while maximizing space
           efficiency and usability. Each drawing is developed through a risk-managed approach, ensuring
            structural integrity across diverse building types from multi-story residential complexes to
             high-performance commercial facilities. We cover all essential components, including foundations,
              columns, beams, slabs, garages, and boundary walls, with meticulous attention to detail. 
      </p>
    </motion.div>
     {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/architecture/stuctural.jpg"
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
        src="/assets/architecture/plumbline.jpg"
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
      <h1 className="text-xl font-semibold mb-4">Electrical & Plumbing Drawings</h1>
      <p className="text-justify">
        We deliver expertly engineered electrical and plumbing drawings that
         prioritize safety, efficiency, and long-term reliability. Our electrical plans are crafted to 
         ensure smooth power distribution across residential and commercial spaces, with strategically 
         placed outlets, switches, and lighting systems that enhance usability and reduce energy waste. 
         Every layout is designed to meet regulatory standards while supporting modern living and working 
         environments.Our plumbing drawings focus on optimal water flow, sanitation, and waste management
         ensuring hygienic and sustainable solutions for every project.
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
      <h1 className="text-xl font-semibold mb-4">3D Visualizations & Renderings</h1>
      <p className="text-justify">
        Our 3D visualizations and renderings transform your ideas into vivid, immersive models allowing
         you to experience your project before a single brick is laid. From photorealistic walkthroughs
          and detailed front elevations to landscape designs and interior previews, our visuals capture
           the full essence of your dream space. Each rendering is a collaborative fusion of your vision
           and our architectural expertise, crafted to reflect your unique style and functional goals.
            Whether it's a luxury residence, commercial facility, or hospitality space, we ensure every
             detail from concept to final visualization is thoughtfully designed to inspire confidence 
             and clarity before construction begins.
      </p>
    </motion.div>
     {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/architecture/3d-house.jpg"
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
        Our architectural services are designed to turn your vision into reality with precision and creativity.
        Whether it’s a home, office, or commercial facility we bring clarity and craftsmanship to every design.
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
