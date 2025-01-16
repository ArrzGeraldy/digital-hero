"use client";

import { useEffect, useRef } from "react";

const Stars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    if (starsRef.current) {
      for (let i = 0; i < 70; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        starsRef.current.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-full">
      <div className="stars" ref={starsRef}></div>
    </div>
  );
};

export default Stars;
