"usee client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

const MouseScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="absolute lg:bottom-10 bottom-5 left-1/2 -translate-x-1/2 h-16 "
      hidden={isScrolled}
    >
      <DotLottieReact src="/assets/lottie/s_mouse.lottie" loop autoplay />
    </div>
  );
};

export default MouseScroll;
