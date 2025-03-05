"use client";

import React from "react";
import { motion } from "framer-motion";
import { VIDEOLINKS } from "../constants/constant";

export default function Product() {
  return (
    <section className="w-full max-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-6">
      {/* Left Column (Video) - Hidden on Mobile */}
      <div className="w-full md:w-1/2 hidden md:block">
        <video autoPlay muted loop playsInline className="w-full h-auto">
          <source src={VIDEOLINKS.C_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Column (Text + Animated Button) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-2xl md:text-4xl leading-snug">
          Cuberto is a leading digital product agency focused on branding, UI/UX
          design, mobile, and web development.
        </h2>

        {/* Animated Button */}
        <motion.button
          className="relative px-8 py-4 text-lg font-medium border-2 border-black rounded-full overflow-hidden"
          whileHover="hover"
        >
          <motion.span
            className="absolute inset-0 bg-black"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: "0%" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <span className="relative z-10 text-black hover:text-white">
            What we do
          </span>
        </motion.button>
      </div>
    </section>
  );
}
