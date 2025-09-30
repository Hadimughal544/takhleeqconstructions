"use client";
import { FaRegClipboard } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { LuRuler } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import React from 'react'

export default function Ourprocess() {
  return (
    <section className=' flex flex-col items-center py-10  pb-20 px-7 lg:px-20 mt-20 '>
      <div className=' text-center max-w-4xl  mb-12 '>
        <h2 className=' text-3xl font-bold mb-4'>
            Our Process
        </h2>
        <p >
            From interior design to full-scale extensions, we offer tailored solutions for every construction need. Our experienced team is committed to creating safe, comfortable spaces that reflect your lifestyle and uplift the community through thoughtful design and execution.
        </p>
      </div>

       <div className="flex flex-col md:flex-row justify-center  items-stretch gap-8 max-w-7xl ">
        
        {/* Step 1 */}
        <div className="flex-1  text-center  text-black p-6   rounded-2xl shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white text-orange-500 p-4 rounded-full">
              <FaRegClipboard size={40} />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">1. Planning</h3>
          <p className="text-sm text-left leading-relaxed">
            Every successful build begins with a solid plan. At Takhleeq, we treat planning as the foundation of excellence ensuring timely delivery, cost-efficiency, and uncompromised quality from day one.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex-1 text-center  text-black p-6 px-7 rounded-2xl shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white text-orange-500 p-4 rounded-full">
              <MdOutlineDesignServices size={40} />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">2. Design</h3>
          <p className="text-sm text-left leading-relaxed">
            Design is where vision takes shape. Whether it’s interiors or structural extensions, our design process blends creativity with functionality, presenting you with clear concepts before we begin construction.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex-1 text-center  text-black p-6 px-7 rounded-2xl shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white text-orange-500 p-4 rounded-full">
              <MdHomeWork size={40} />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">3. Build</h3>
          <p className="text-sm text-left leading-relaxed">
            With a proven track record across Pakistan, our skilled engineers and craftsmen bring your plans to life. We execute with precision, care, and a commitment to building spaces you’ll be proud to call your own.
          </p>
        </div>

      </div>
    </section>
  )
}
