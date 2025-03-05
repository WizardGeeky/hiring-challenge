"use client";

import React from "react";
import "antd/dist/reset.css"; // Import Ant Design styles
import { VIDEOLINKS } from "../constants/constant";

const cardData = [
  { id: 1, image: VIDEOLINKS.IMG1 },
  { id: 2, image: VIDEOLINKS.IMG2 },
  { id: 3, image: VIDEOLINKS.IMG3 },
  { id: 4, image: VIDEOLINKS.IMG4 },
  { id: 5, image: VIDEOLINKS.IMG5 },
];

export default function Development() {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center py-20 overflow-hidden">
      {/* Title */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-10">
        Development and Design Resources
      </h1>

      {/* Auto-Scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 animate-scroll">
          {[...cardData, ...cardData].map((card, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[160px] sm:h-[190px] md:h-[230px] lg:h-[290px] bg-cover bg-center rounded-xl border-2 border-white/30 shadow-lg flex-shrink-0 transition-transform transform hover:scale-105 hover:border-white/80"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom Styles for Infinite Scrolling & Hide Scrollbars */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
