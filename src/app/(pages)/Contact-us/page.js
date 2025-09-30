"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  return (
    <section>
      <Toaster position="top-center" reverseOrder={false} />
      <main>
        {/* Hero Section */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            src="/assets/contact-us.jpg"
            alt="services image"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl">
              Whether you're planning a new project, need expert advice, or
              simply want to explore how Takhleeq Construction can bring your
              vision to life, we’re here to help.
            </p>
          </div>
        </div>

        {/* Content + Form Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Connect With Us
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Connect with our team today to schedule a free consultation and
              take the first step toward a space that reflects your ambition and
              values.
            </p>
            <p className="text-sm sm:text-base text-gray-700 text-justify leading-relaxed">
              At Takhleeq Construction, our skilled architects, engineers, and
              project managers are here to guide you through every phase from
              initial concept to final handover. Whether you're planning a
              standout commercial development or a bespoke residential project,
              we’re ready to turn your ideas into lasting realities with
              quality, care, and compliance at the core.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              Let’s shape something extraordinary—your journey starts here.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-3 items-center hover:underline">
                <FaPhone className="text-orange-400" size={18} />
                <Link href="https://wa.me/923004096765" target="_blank">
                  <p className="text-sm sm:text-base">(+92) 300 4096765</p>
                </Link>
              </div>

              <div className="flex gap-3 items-center hover:underline">
                <IoIosMail className="text-orange-400" size={20} />
                <Link href="mailto:info@takhleeqconstructions.com">
                  <p className="text-sm sm:text-base">
                    info@takhleeqconstructions.com
                  </p>
                </Link>
              </div>

              <div className="flex gap-3 items-center hover:underline">
                <FaLocationDot className="text-orange-400" size={18} />
                <Link
                  href="https://share.google/ZkcV9lL3Yy1p0R3cn"
                  target="_blank"
                >
                  <p className="text-sm sm:text-base">
                    Plaza # 1, Sector Q, DHA Phase 7, Lahore
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Call-to-Action Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-[#302560] text-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 flex flex-col justify-center items-center text-center overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[url('/assets/pattern-construction.png')] opacity-10 bg-cover bg-center"></div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Ready to Build Your Dream Project?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xl mx-auto">
                From architectural design to complete construction, our team
                delivers reliable, high-quality services. Let’s discuss your
                vision and turn it into reality.
              </p>

              <Link
                href="/ContactForm"
                className="inline-block bg-white text-[#302560] hover:bg-orange-500 hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
