"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Authorize() {
  const logos = [
    {
      src: "/assets/autlogo/Resize/LDA.png",
      alt: "LDA logo",
      w: 160,
      h: 80,
      delay: 0.8, // third
    },
    {
      src: "/assets/autlogo/Resize/TMA.png",
      alt: "TMA logo",
      w: 180,
      h: 80,
      delay: 0, // first
    },
    {
      src: "/assets/autlogo/Resize/Behria.png",
      alt: "Bahria logo",
      w: 160,
      h: 80,
      delay: 0.2, // second
    },
    {
      src: "/assets/autlogo/Resize/DHA.png",
      alt: "DHA logo",
      w: 140,
      h: 70,
      delay: 1.0, // last
    },
  ];

  return (
    <section className="px-4 bg-white mb-10">
      <div className="flex flex-wrap justify-center items-center gap-12">
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }} 
            transition={{
              duration: 4,       // full cycle (fade in → hold → fade out)
              ease: "easeInOut",
              repeat: Infinity,  // loop forever
              delay: logo.delay, // stagger start
              repeatDelay: 0.2,  // only small pause after fade out
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              priority
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
