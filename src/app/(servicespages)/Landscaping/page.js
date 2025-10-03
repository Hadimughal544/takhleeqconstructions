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
                  src="/assets/bg/landscaping-bg.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55 z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Landscaping Services
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Designing Outdoor Spaces That Inspire, Function, and Flourish.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    At Takhleeq Constructions, our landscaping services are designed to transform outdoor areas into vibrant,
     functional, and visually stunning environments. Whether it’s a residential garden, commercial frontage,
      or large-scale green space, we create landscapes that enhance property value, support sustainability,
       and reflect your unique vision.
  </p>

  <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
    {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0 ">
      <Image
        src="/assets/landscaping/residentiallandscaping.jpg"
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

      <h1 className="text-xl font-semibold mb-4"> Residential Landscaping</h1>
      <p className="text-justify">
        At Takhleeq Constructions, we design residential landscapes that offer tranquility, beauty,
         and functionality turning your outdoor space into a personal sanctuary. Our team works closely
          with homeowners to create serene and stylish environments that complement the architecture and 
          lifestyle of each residence. From thoughtfully planned garden layouts and shaded patio areas to
           elegant walkways, ambient lighting, and soothing water features, every detail is crafted to enhance
            outdoor living. Whether you're seeking a lush green retreat or a minimalist courtyard, we ensure your
             landscape reflects your taste while adding long-term value to your home.
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
      <h1 className="text-xl font-semibold mb-4">Commercial & Public Spaces</h1>
      <p className="text-justify">
       Your exterior space speaks volumes before anyone steps inside. We specialize in landscaping for
        commercial and public environments, including office buildings, retail complexes, educational 
        institutions, and civic areas. Our designs focus on accessibility, brand alignment, and visual
         impact creating welcoming, low-maintenance green spaces that elevate your property’s presence.
          From structured planting and signage integration to pedestrian-friendly layouts and durable 
          materials, we ensure that your outdoor areas support your business goals while leaving a lasting
           impression on clients, visitors, and the community.
      </p>
    </motion.div>
     {/* Image */}
    <div className="relative w-full md:w-[450px] h-64 md:h-[350px] flex-shrink-0">
      <Image
        src="/assets/landscaping/commerciallandscaping.jpg"
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
        src="/assets/landscaping/drainlandscaping.jpg"
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
      <h1 className="text-xl font-semibold mb-4"> Irrigation & Drainage Solutions</h1>
      <p className="text-justify">
       Water management is essential to landscape health and sustainability. We provide tailored
        irrigation and drainage systems that ensure optimal hydration for plants while preventing
         waterlogging and erosion. Our solutions include automated sprinklers, drip irrigation,
          rainwater harvesting setups, and underground drainage networks all designed to suit your
           site’s soil, slope, and climate. By integrating smart water systems, we help reduce
            maintenance costs, conserve resources, and maintain the long-term vitality of your
             landscape.
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
      <h1 className="text-xl font-semibold mb-4">Eco-Friendly & Sustainable Design</h1>
      <p className="text-justify">
       At Takhleeq Constructions, we believe in building landscapes that respect nature and endure over time.
        Our sustainable landscaping practices include the use of native and drought-resistant plants, permeable
         paving, recycled materials, and energy-efficient lighting. We design with ecological balance in mind 
         reducing environmental impact while enhancing biodiversity and resilience. Whether you're creating a
          green roof, a water-wise garden, or a carbon-conscious outdoor space, our team ensures that your 
          landscape is both beautiful and environmentally responsible.
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
      <h2 className="text-2xl font-semibold mb-2"> Let’s Bring Your Outdoors to Life</h2>
      <p className="text-sm ">
       Whether you're refreshing a garden or developing a full-scale landscape, Takhleeq Constructions is
        your partner in creating outdoor spaces that grow with purpose and beauty.
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
