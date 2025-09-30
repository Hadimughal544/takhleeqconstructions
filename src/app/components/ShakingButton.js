"use client";

import { motion } from "framer-motion";

export default function ShakingButton() {
  return (
    <motion.div
      animate={{
        rotate: [0, -5, 5, -5, 5, 0], // shake sequence
        scale: [1, 1.15, 1.15, 1.15, 1.15, 1], // scale with shake
      }}
      transition={{
        duration: 0.6,        // length of the shake
        repeat: Infinity,     // loop forever
        repeatDelay: 2,     // wait before repeating
        ease: "linear",       // keeps the same speed in and out
      }}
      className="bg-white text-[#302560] text-sm px-2 py-2 rounded-lg hover:scale-115 hover:bg-orange-500 hover:text-white cursor-pointer"
    >
      Get a Quote
    </motion.div>
  );
}
