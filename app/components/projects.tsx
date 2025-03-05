"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOLINKS } from "../constants/constant";

const projects = [
  {
    video: VIDEOLINKS.PROJECT_1,
    title: "Punto Pago – The First Super-App in Latin America",
  },
  {
    video: VIDEOLINKS.PROJECT_2,
    title: "Kelvin Zero – A digital product for passwordless authentication",
  },
  {
    video: VIDEOLINKS.PROJECT_3,
    title: "DaoWay – Astrology planner app: plan, achieve, thrive",
  },
  {
    video: VIDEOLINKS.PROJECT_4,
    title: "Magma – The ultimate tool for building in the Web3 era",
  },
  {
    video: VIDEOLINKS.PROJECT_5,
    title: "Riyadh – Official website of Riyadh, Saudi Arabia's capital",
  },
  {
    video: VIDEOLINKS.PROJECT_6,
    title: "FlipaClip – The best tool for stop-motion animation",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Cursor state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  // Track mouse position across the section
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
  className="h-auto text-white relative bg-black rounded-[50px]"
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setHovering(true)}
  onMouseLeave={() => setHovering(false)}
>

      {/* Custom Cursor */}
      <AnimatePresence>
        {hovering && (
          <motion.div
            className="fixed w-20 h-20 bg-white rounded-full opacity-30 pointer-events-none"
            style={{ top: cursorPos.y - 40, left: cursorPos.x - 40 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        )}
      </AnimatePresence>

      <div className="p-10 md:p-20 lg:p-40 relative">
        {/* Heading */}
        <p className="text-5xl md:text-7xl lg:text-9xl font-bold">Featured</p>
        <div className="flex justify-center md:flex-row items-center lg:justify-start gap-2 md:gap-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-auto max-w-full h-[4em] md:h-[4em] lg:h-[7em] rounded-full shadow-lg border-b-2"
          >
            <source src={VIDEOLINKS.PROJECT_VIDEO} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="text-pretty text-4xl md:text-6xl lg:text-9xl font-thin">
            Projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="hover-cards md:px-20 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                className="bg-gray-900 rounded-2xl p-4 shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105"
                style={{ height: "100%" }}
              >
                {/* Video (Auto-plays on hover) */}
                <video
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-lg"
                  muted
                  playsInline
                  loop
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Project Title */}
                <p className="text-lg md:text-xl font-medium text-center mt-4">
                  <strong>{project.title.split(" – ")[0]}</strong> –{" "}
                  {project.title.split(" – ")[1]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
