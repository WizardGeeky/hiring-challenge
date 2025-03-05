"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { VIDEOLINKS } from "../constants/constant";

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="relative w-full h-screen min-h-screen" data-aos="fade-up">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        data-aos="zoom-in"
      >
        <source src={VIDEOLINKS.SERVICE_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
