"use client"; // ✅ Mark as client-side

import { useEffect } from "react";

const useScrollbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollPosition / maxScroll) * 100;

      let color1 = `hsl(${scrollPercentage * 2}, 100%, 50%)`;
      let color2 = `hsl(${scrollPercentage * 2 + 50}, 100%, 60%)`;

      document.documentElement.style.setProperty(
        "--scrollbar-color",
        `linear-gradient(180deg, ${color1}, ${color2})`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollbar;
