"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const AosWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return <div className="overflow-hidden">{children}</div>;
};

export default AosWrapper;
