"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { VIDEOLINKS } from "../constants/constant";

export default function Philosophy() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-between min-h-screen px-10 lg:px-40 py-20 bg-white"
      data-aos="zoom-in-down"
    >
      {/* Heading */}
      <div className="w-full text-center lg:text-left mb-10">
        <h1 className="text-6xl md:text-8xl font-bold text-center">
          Our <span className="italic">philosophy.</span>
        </h1>
      </div>

      {/* Content - Video & Text */}
      <div className="flex flex-col lg:flex-row items-center w-full">
        {/* Left Side - Video */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          data-aos="fade-right"
        >
          <video className="w-full max-w-md" autoPlay muted loop playsInline>
            <source src={VIDEOLINKS.PHILOSOPHY} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side - Description */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:pl-10"
          data-aos="fade-left"
        >
          <p className="text-lg text-gray-800 text-center lg:text-left leading-relaxed">
            In our team, developers work alongside designers, strategists, and
            analysts. We don’t do cookie-cutter solutions—we build products
            exactly as envisioned, with no shortcuts.
          </p>
          <p className="mt-4 text-lg text-gray-800 text-center lg:text-left leading-relaxed">
            We’re driven by user-centered design that increases productivity and
            revenue. Our expertise and ingenuity push us to outperform previous
            achievements.
          </p>
        </div>
      </div>
    </section>
  );
}
