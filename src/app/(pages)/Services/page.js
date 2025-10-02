"use client";
import Image from "next/image";
import React from "react";
import { Building, Hammer, Paintbrush, Sofa, Trees, Calculator, RefreshCcw, ClipboardCheck } from "lucide-react";
import Link from "next/link";

// Reusable service box
function ServiceBox({ title, desc, Icon, image }) {
  return (
    <div className="relative group w-full h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer">
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className=" absolute bg-[#302560]/60 w-full h-14 bottom-0 left-0 right-0 z-10 group-hover:opacity-0"></div>

      {/* Always visible title (bottom-left) */}
      <div className="absolute bottom-4 left-4 z-20  transition duration-500 group-hover:opacity-0">
        <h3 className="text-white text-xl font-bold drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Overlay (shows on hover) */}
       <div className="absolute inset-0  bg-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center text-center justify-center p-6">
      <div className="bg-orange-100 text-orange-600 p-4 rounded-full mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
    </div>
  );
}


export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-white  ">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] flex justify-center ">
          
            <Image
            src="/assets/servicegif1-1.gif"
            alt="services image"
            fill
            priority
            className="object-cover "
            />

            <div className="absolute w-full  z-10 inset-0 bg-black/55 "></div>

            <div className="absolute text-center max-w-3xl mx-auto mb-16 inset-0 z-20  mt-25 ">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-white text-lg ">
          We provide end-to-end construction and design services, tailored to meet your unique needs. 
          From concept to completion, our team is here to create safe, functional, and beautiful spaces.
        </p>
      </div>
        </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-10 md:mx-10 lg:mx-auto mt-30 mb-20">
        <Link href="/Architecture">
        <ServiceBox
          title="Architecture"
          desc="Creative and functional architectural designs tailored to your lifestyle and space."
          Icon={Building}
          image="/assets/services/Architecture1.gif"
        />
        </Link>
        <Link href="/Constructions">
        <ServiceBox
          title="Constructions"
          desc="Reliable and high-quality construction solutions delivered on time and within budget."
          Icon={Hammer}
          image="/assets/services/Construction-1.gif"
        />
        </Link>
        <Link href="/Renovations">
        <ServiceBox
          title="Renovations"
          desc="Transform and modernize your spaces with our expert renovation services."
          Icon={Paintbrush}
          image="/assets/services/renovations.gif"
        />
        </Link>
        <Link href="/Interior">
        <ServiceBox
          title="Interior Design"
          desc="Stylish interior designs that balance comfort, aesthetics, and functionality."
          Icon={Sofa}
          image="/assets/services/Interior2-1.gif"
        />
        </Link>
        <Link href="/Landscaping">
        <ServiceBox
          title="Landscaping"
          desc="Enhance your outdoors with sustainable and elegant landscaping solutions."
          Icon={Trees}
          image="/assets/services/Landscap-1.gif"
        />
        </Link>
        <Link href="/Costestimation">
        <ServiceBox
          title="Cost Estimation"
          desc="Transparent and accurate cost estimation for smart project planning."
          Icon={Calculator}
          image="/assets/services/costestimate.gif"
        />
        </Link>
        <Link href="/Projectmanagement">
        <ServiceBox
          title="Construction Project Management"
          desc="Efficient project management ensuring smooth execution from start to finish."
          Icon={ClipboardCheck}
          image="/assets/services/project.gif"
        />
        </Link>
      </div>
    </section>
  );
}