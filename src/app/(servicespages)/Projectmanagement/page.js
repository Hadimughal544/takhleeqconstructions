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
                  src="/assets/bg/project-bg.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/65 z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                    Construction Project Management 
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Ensuring smooth, efficient project delivery from initial planning to final 
                    handover with expert coordination, quality control, and on-site precision.

                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    Takhleeq Constructions offers expert project management services to ensure your construction journey is smooth,
     efficient, and stress-free. From initial planning and budgeting to on-site coordination and final handover,
      we manage every phase with precision and transparency. Our team oversees timelines, resources, and quality
       control so you can stay focused on your goals while we deliver your project with confidence and care.

  </p>

  <div className="w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Our Project Management Approach
  </h2>
  <p className="text-center md:text-justify mb-10 text-black">
    At Takhleeq Constructions, we follow a structured, client-driven approach to project management,
    ensuring every phase is executed with precision, transparency, and care. From planning to delivery,
    we uphold strict compliance and uncompromising quality, guided by expert coordination and a deep
    commitment to your unique goals.
  </p>

  <div className="space-y-8">
    {/* Strategic Planning */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Strategic Planning & Feasibility</h3>
      <p className="text-justify text-black">
        Every successful build begins with solid groundwork. We conduct thorough feasibility studies
        to assess scope, budget, and timelines—empowering you to make informed decisions. Through proactive
        risk analysis, we identify potential challenges early and develop tailored strategies to overcome them.
        Our planning process ensures that every solution is aligned with your objectives and optimized for long-term success.
      </p>
    </div>

    {/* On-Site Construction Oversight */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">On-Site Construction Oversight</h3>
      <p className="text-justify text-black">
        Our project management extends to full construction oversight, with on-site supervision that guarantees
        adherence to quality benchmarks and timelines. We enforce rigorous health and safety protocols throughout
        the build, and our continuous monitoring ensures that every stage meets the highest standards of craftsmanship
        and compliance.
      </p>
    </div>

    {/* Seamless Coordination */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Seamless Coordination & Communication</h3>
      <p className="text-justify text-black">
        We prioritize seamless collaboration among clients, teams, and stakeholders ensuring everyone is aligned
        with the project’s vision. Transparent documentation and regular reporting keep you informed on progress,
        costs, and milestones. With consistent updates and open communication, you stay confident and in control
        throughout the construction journey.
      </p>
    </div>
  </div>

  <p className="mt-10 text-center md:text-justify text-black ">
    At Takhleeq Constructions, we’re committed to making your project experience smooth, efficient,
    and stress-free delivering results that reflect your vision with precision and professionalism.
  </p>
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

  <div className="w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Project Management Expertise
  </h2>
  <p className="text-center md:text-justify mb-10 text-black">
    At Takhleeq Constructions, we manage a wide range of projects with tailored strategies that blend
     innovation, practicality, and meticulous attention to detail. Our approach ensures every build 
     reflects the client’s vision while meeting functional and aesthetic goals.
  </p>

  <div className="space-y-8">
    {/* Strategic Planning */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Residential Developments</h3>
      <p className="text-justify text-black">
        We specialize in managing the construction of luxury homes, villas, and apartments designed
         to mirror your lifestyle and preferences. With a strong emphasis on sustainable architecture
          and energy-efficient solutions, we create living spaces that balance comfort, elegance, and
           environmental responsibility.
      </p>
    </div>

    {/* On-Site Construction Oversight */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Commercial Builds</h3>
      <p className="text-justify text-black">
        Our commercial project management covers offices, retail outlets, and industrial facilities.
         We deliver smart, functional layouts equipped with modern amenities and advanced systems 
         enhancing operational flow and reinforcing your brand’s presence
      </p>
    </div>

    {/* Seamless Coordination */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Renovation & Remodeling Services</h3>
      <p className="text-justify text-black">
        Revitalize existing spaces with our comprehensive renovation and remodeling solutions. From
         interior upgrades to exterior transformations, we enhance usability, aesthetics, and long-term
          value bringing new life to every corner of your property.
      </p>
    </div>
  </div>

   

  <div className="w-full py-12 px-6 md:px-16 flex justify-center">
  <div className="max-w-5xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 md:p-14 relative overflow-hidden group">
    {/* Accent Bar */}
    <div className="absolute top-0 left-0 w-full h-2 bg-orange-500 rounded-t-2xl"></div>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
      Why Choose <span className="text-orange-500">Takhleeq</span> 
    </h2>
    <p className="text-center text-lg text-gray-600 mb-10">
      Delivering precision, transparency, and peace of mind every step of the way.
    </p>

    {/* Points */}
    <div className="grid md:grid-cols-2 gap-8 text-gray-800">
      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500"> Client-Centered Execution</h3>
        <p className="mt-2 text-gray-600">
          We prioritize your vision, goals, and preferences ensuring every decision,
          timeline, and detail aligns with your expectations.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500">End-to-End Oversight</h3>
        <p className="mt-2 text-gray-600">
          From feasibility studies and budgeting to on-site supervision and final handover,
          we manage every phase with expert coordination and accountability.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500"> Transparent Communication</h3>
        <p className="mt-2 text-gray-600">
          We keep you informed with regular updates, clear documentation and open channels
          so you’re never left guessing about progress, costs, or timelines.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500"> Risk Management & Compliance</h3>
        <p className="mt-2 text-gray-600">
          Our proactive planning identifies potential challenges early. We implement robust
          safety protocols and ensure full regulatory compliance throughout the project.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500"> Quality Assurance at Every Stage</h3>
        <p className="mt-2 text-gray-600">
          We monitor and evaluate each phase to maintain exceptional standards—ensuring
          your project is built to last and perform.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500"> Trusted by Local & Overseas Clients</h3>
        <p className="mt-2 text-gray-600">
          Our reputation for reliability and professionalism makes us a preferred choice
          for clients across Pakistan and abroad—especially those seeking stress-free,
          remote project management.
        </p>
      </div>
    </div>
  </div>
</div>

</div>

<div className="mt-12 w-full max-w-5xl mx-auto px-4">
  <div className="bg-[#302560] text-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    
    {/* Text */}
    <div className="text-center md:text-left max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2">Ready to Start Your Project?</h2>
      <p className="text-sm md:text-justify">
        Our project management services are built to transform your vision into reality with structured 
        execution and expert oversight.
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
