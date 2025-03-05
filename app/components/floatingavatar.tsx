"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingAvatar() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
        {/* Rotating Text */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50,50
                   m -35, 0
                   a 35,35 0 1,1 70,0
                   a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text fill="#71797E" fontSize="10" letterSpacing="1">
              <textPath href="#circlePath">
                - contact - contact - contact - contact - contact
              </textPath>
            </text>
          </svg>
        </motion.div>

        <div className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center shadow-2xl border-2 border-yellow-500">
          <Image
            src="/avatar.png"
            alt="User Icon"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
