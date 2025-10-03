"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
        <Image
          src="/assets/architects1.gif"
          alt="services image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55  z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            About us
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl">
            At Takhleeq Construction, we offer complete design and build
            solutions crafted to match your unique goals. From initial concept
            to final delivery, our team ensures every space is safe, functional,
            and beautifully executed.
          </p>
        </div>
      </div>

      {/* Who we are */}
      <div className="min-h-screen flex flex-col items-center  px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center relative max-w-6xl mx-auto gap-8">
          {/* Left text */}
          <motion.div
            className="relative bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 z-10 md:-mr-20 mt-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 mb-4 text-sm sm:text-base">
              The Trusted Name in Architecture, Interiors & Build Excellence
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">WHO WE ARE</h1>
            <p className="mb-4 text-sm sm:text-base">
              Takhleeq Construction is a multidisciplinary firm founded in 2017
              by two visionary professionals. Built on a foundation of
              precision, integrity, and forward-thinking design, we unite
              architecture, engineering, interior design, and project management
              to create spaces that are both functional and inspiring.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              We specialize in end-to-end solutions for residential, commercial,
              and industrial projects tailored to meet your unique goals. From
              concept to completion, our team ensures every detail is executed
              with care, compliance, and creativity.
            </p>
            <p className="text-sm sm:text-base">
              At our core, we believe construction is more than building—it’s
              about creating environments that empower people and stand the test
              of time. With a commitment to safety, quality, and client trust,
              we continue to shape spaces that reflect purpose, precision, and
              pride.
            </p>
          </motion.div>

          {/* Right image */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/who-we-are.jpg"
              alt="Building Regulation Drawings"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center  relative max-w-6xl mx-auto gap-8">
        {/* Left image */}
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/assets/what-we-do.jpg"
            alt="Building Regulation Drawings"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right text */}
        <motion.div
          className="relative bg-white shadow-xl rounded-2xl p-6 w-full md:w-1/2 z-10 md:-ml-20 mt-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-orange-500 mb-4 text-sm sm:text-base">
            Expertise Across Architecture, Interiors & Project Delivery
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">WHAT WE DO</h1>
          <p className="mb-4 text-sm sm:text-base">
            Takhleeq Construction offers a complete suite of development and
            design services—your one-stop solution for building with confidence.
            From architecture and engineering to interiors, landscaping, and
            project management, we deliver spaces that balance form, function,
            and long-term value.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            Whether it’s a refined residential build or a dynamic commercial
            space, our team blends creativity with technical expertise to craft
            environments that inspire. Every project is guided by precision,
            compliance, and a deep understanding of client goals.
          </p>
          <p className="text-sm sm:text-base">
            We don’t just build—we elevate. With turnkey solutions tailored to
            your needs, we transform ideas into spaces that are safe, efficient,
            and beautifully executed. At Takhleeq, excellence isn’t a promise—it’s
            our standard.
          </p>
        </motion.div>
      </div>

      {/* Mission */}
      <div className="flex flex-col items-center px-6 py-16 my-10 shadow-xl bg-[#302560] text-white mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h1>
        <p className="text-sm sm:text-base text-center max-w-4xl">
          We’re committed to leading the way in architecture, construction, and
          interior design through bold creativity, sustainable practices, and
          unmatched craftsmanship. Every space we create is a reflection of our
          client’s vision—delivered with precision, quality, and care. By
          setting new benchmarks for excellence, we aim to build not just
          structures, but lasting trust and meaningful impact.
        </p>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h1>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our values shape every project we undertake—driving us to build
              with purpose, precision, and integrity. They’re not just
              principles; they’re the foundation of how we work and why clients
              trust us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Box
                heading="Creative Solutions"
                text="We embrace creativity and cutting-edge solutions to meet evolving needs."
              />
              <Box
                heading="Client-Centered Approach"
                text="We listen, adapt, and collaborate to ensure every project reflects our client’s vision."
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Box
              heading="Exceptional Design"
              text="We create spaces that balance beauty, function, and long-term value—always with quality at the core."
            />
            <Box
              heading="Ethical Foundation"
              text="We uphold transparency, honesty, and ethical practices in every decision and partnership."
            />
            <Box
              heading="Future-Ready Practices"
              text="We design responsibly with future generations in mind, minimizing environmental impact."
            />
            <Box
              heading="Collaborative Spirit"
              text="We believe the best results come from collaboration, respect, and shared passion."
            />
          </div>
        </motion.div>
      </div>

      {/* CEO Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mx-10 md:mx-10 lg:mx-auto max-w-6xl my-20 ">
  {/* Image Section */}
 <div className="relative w-full md:w-1/2 h-[550px]">
  <Image
    src="/assets/DSC1.jpeg"
    alt="CEO"
    fill
    className="object-cover rounded-lg"
  />

  <motion.div
    className="absolute bottom-0 left-20 z-10 bg-white w-72 p-4 shadow-lg"
    initial={{ opacity: 0, y: 100 }}     // start lower & hidden
    whileInView={{ opacity: 1, y: 0 }}   // move up into place
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <p className="text-sm italic">“Elegance lies in simplicity.”</p>
    <h1 className="font-semibold text-xl">Raja Muhammad Waqar</h1>
  </motion.div>
</div>



  {/* Text Section */}
  <div className="w-full md:w-1/2 space-y-6">
    <p className="text-md text-orange-500">CEO & Visionary Leader</p>
    <h1 className="font-bold text-4xl">Raja Muhammad Waqar</h1>
    <p className=' text-justify'>
      Raja Waqar, the driving force behind Takhleeq Construction, has led the company since its inception
      with a bold vision and unwavering commitment to excellence. As CEO, he brings over a decade of hands-on
      experience in delivering transformative construction solutions across Pakistan earning a reputation for
      quality, reliability, and forward-thinking execution.
    </p>
    <p className=' text-justify'>
      Known for his strategic leadership and deep industry insight, Raja Waqar specializes in overseeing complex
      residential and commercial projects that blend innovation with practicality. His approach prioritizes client
      trust, regulatory compliance, and long-term value—ensuring every build reflects both ambition and integrity.
    </p>
    <p className=' text-justify block md:hidden lg:block'>
      Under his guidance, Takhleeq Construction continues to set new benchmarks in the industry, building not just
      structures, but lasting relationships and community impact.
    </p>
  </div>
</div>


      {/* CTA Section */}
      <div className="w-full py-16 bg-[#302560] text-white flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Begin Your Journey With Takhleeq Construction
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Book your free consultation today and take the first step toward
              building with confidence.
            </p>
          </div>
          <div>
            <Link href="/Contact-us">
              <button className="bg-[#302560] border border-white hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg shadow-md transition">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  function Box({ heading, text }) {
    return (
      <div className="flex flex-col p-4 hover:scale-105 bg-white rounded-xl shadow-md hover:shadow-lg transition max-w-sm">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
          {heading}
        </h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    );
  }
}
