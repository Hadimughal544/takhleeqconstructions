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
                  src="/assets/bg/costestimation-bg.jpg"
                  alt="services image"
                  fill
                  priority
                  className="object-cover"
                />
        
                <div className="absolute inset-0 bg-black/55  z-10"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                     Cost Estimation Services 
                  </h1>
                  <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
                    Accurate, Transparent, and Strategic Budgeting for Every Build
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-15 px-4 md:px-10 lg:px-20 max-w-6xl mx-auto">
  <p className="text-center md:text-justify ">
    Takhleeq Constructions provides expert cost estimation services to help you plan your construction budget with 
    confidence and clarity. Whether you're building a home, commercial facility, or renovating an existing space, 
    our team delivers precise, data-driven estimates that reflect real market conditions, material costs, labor rates,
     and project scope. With our support, you can make informed decisions, avoid financial surprises, and stay in control
      from day one.
  </p>

  <div className="w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Our Estimation Approach
  </h2>
  <p className="text-center md:text-justify mb-10 text-black">
    We follow a structured, client-focused approach to cost estimation ensuring every detail is accounted for
     with accuracy and transparency. From initial concept to final scope, we analyze your project’s requirements,
      location, and design intent to deliver realistic budgets that align with your goals and timelines.
  </p>

  <div className="space-y-8">
    {/* Strategic Planning */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Scope Analysis & Budget Planning</h3>
      <p className="text-justify text-black">
        Every successful project begins with a clear understanding of scope and cost. We assess your architectural
         plans, site conditions, and design preferences to develop a comprehensive budget framework. Our team 
         identifies key cost drivers early—such as materials, labor, equipment, and permits—so you can allocate
          resources effectively and avoid overruns.
      </p>
    </div>

    {/* On-Site Construction Oversight */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Quantity Takeoffs & Rate Calculations</h3>
      <p className="text-justify text-black">
        We perform detailed quantity takeoffs for all structural and finishing components, using industry-standard
         tools and methodologies. Our rate calculations are based on current market prices, verified supplier quotes,
          and regional labor benchmarks—ensuring your estimate reflects real-world conditions and is ready for tendering
           or internal planning
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Value Engineering & Cost Optimization</h3>
      <p className="text-justify text-black">
        We help you get the most out of your budget without compromising quality. Our value engineering process 
        explores alternative materials, construction methods, and design adjustments that reduce costs while 
        maintaining performance and aesthetics. We work collaboratively to find smart savings that support your
         long-term goals
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">Market-Based Forecasting</h3>
      <p className="text-justify text-black">
        Construction costs fluctuate. That’s why we incorporate market trends, inflation factors, and supply
         chain insights into our estimates giving you a forward-looking budget that’s resilient and adaptable.
          Whether you're planning for immediate execution or future development, our forecasts help you stay 
          prepared.
      </p>
    </div>

     

    {/* Seamless Coordination */}
    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">BOQ Preparation & Cost Breakdown</h3>
      <p className="text-justify text-black">
        We prepare professional Bills of Quantities (BOQs) and itemized cost breakdowns that give you full 
        visibility into each component of your project. From excavation to electrical fittings, every line 
        item is documented with clarity making it easier to compare bids, manage procurement, and track
         expenses throughout the build.
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

            <Link href="/service" className=' p-4 bg-orange-500 rounded-xl px-10  flex gap-4 items-center justify-center text-white text-xl font-bold hover:bg-[#302560] '>
  <FaPhone className=' text-5xl md:text-2xl' />
  <h3 className=' hover:underline text-sm md:text-xl'>
    From Idea to Execution Let’s Begin.
Click to Call Now and Skip the Delays.
  </h3>
  </Link>

          </motion.div>

  <div className="w-full">

  <div className="w-full py-12 px-6 md:px-16 flex justify-center">
  <div className="max-w-5xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 md:p-14 relative overflow-hidden group">
    {/* Accent Bar */}
    <div className="absolute top-0 left-0 w-full h-2 bg-orange-500 rounded-t-2xl"></div>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4">
      Why Choose <span className="text-orange-500">Takhleeq</span> for Cost Estimation?
    </h2>
    <p className="text-center text-lg text-gray-600 mb-10">
      Delivering precision, transparency, and peace of mind every step of the way.
    </p>

    {/* Points */}
    <div className="grid md:grid-cols-2 gap-8 text-gray-800">
      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500">Precision & Transparency</h3>
        <p className="mt-2 text-gray-600">
          We customize each estimate to your design, location, and construction method.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500">BOQ & Tender-Ready</h3>
        <p className="mt-2 text-gray-600">
          Our estimates are formatted for contractor bidding, procurement, and financial planning
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500">Cost Control Support</h3>
        <p className="mt-2 text-gray-600">
           We help you monitor and manage costs throughout the project lifecycle.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition duration-300">
        <h3 className="font-semibold text-xl text-orange-500">Trusted by Developers & Homeowners</h3>
        <p className="mt-2 text-gray-600">
        Our reputation for accuracy and professionalism makes us a preferred choice across Pakistan.
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
      <h2 className="text-2xl font-semibold mb-2"> Plan Smart. Build Confidently</h2>
      <p className="text-sm md:text-justify">
       With Takhleeq Constructions, your budget is more than a number it’s a strategic tool for success.
        Let us help you estimate with confidence and build without compromise
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
