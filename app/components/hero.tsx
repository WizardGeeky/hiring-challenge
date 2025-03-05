"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { VIDEOLINKS } from "../constants/constant";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section className="max-h-screen flex flex-col lg:flex-row px-4 md:px-10 lg:px-12 justify-center items-center lg:items-start py-20">
      <div className="w-full lg:w-10/12 py-1 text-center lg:text-left">
        {/* Single p tag with <br /> for line breaks */}
        <p
          className="text-pretty text-4xl md:text-6xl lg:text-8xl font-thin leading-none flex flex-wrap items-center gap-2 md:gap-4"
          data-aos="fade-up"
        >
          We are a digital <br />
          <span className="inline-flex items-center gap-2 md:gap-4">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-[1em] md:h-[1em] lg:h-[1em] w-auto rounded-full shadow-2xl border-b-2"
            >
              <source src={VIDEOLINKS.HERO_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            design and
          </span>
          motion agency
        </p>
      </div>
    </section>
  );
}
