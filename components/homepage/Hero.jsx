import Link from "next/link";
import React, { useEffect, useState } from "react";
import TypingText from "../TypingText";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="flex h-screen items-center mt-8 w-[93%] mx-auto relative">
      <div className="w-[60%]">
        <h1 className="2xl:text-[80px] xl:text-5xl lg:text-4xl text-4xl text-center font-bold montserrat">
          Digitalizing <span className="text-gradient">The Future</span>
        </h1>
        <TypingText
          text={
            "Unlocking Full Digital Potential of Businesses and Individuals in Indonesia"
          }
        />
        <div className="flex items-center w-fit mx-auto justify-center gap-8 mt-12">
          <Link href={"/"} className="gradient-border-wrapper">
            <div className="rounded-md px-12 py-4 text-2xl font-semibold bg-color-black">
              Read More
            </div>
          </Link>
          <Link href={"/"} className="gradient-border-wrapper">
            <div className="rounded-md px-12 py-4 text-2xl font-semibold ">
              Join Now
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[40%]">
        <img
          src="/assets/homepage/hero/earth-2.png"
          className="w-full h-auto"
        />
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        hidden={isScrolled}
      >
        <img src="/assets/lottie/scroll_down.gif" className="h-20 2xl:h-28" />
      </div>
    </section>
  );
};

export default Hero;
