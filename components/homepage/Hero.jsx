import Link from "next/link";
import React, { useEffect, useState } from "react";
import TypingText from "../TypingText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
    <section className="flex lg:flex-row flex-col h-screen items-center justify-center lg:justify-normal  lg:mt-8  w-[100%] mt-8  mx-auto relative ">
      <div className="lg:w-[60%] w-full">
        <h1 className="2xl:text-[80px] xl:text-5xl lg:text-4xl text-3xl text-center font-bold montserrat">
          Digitalizing <span className="text-gradient">The Future</span>
        </h1>
        <div className="hidden lg:block">
          <TypingText
            text={
              "Unlocking Full Digital Potential of Businesses and Individuals in Indonesia"
            }
            className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-3/4 mx-auto mt-8 text-center montserrat"
          />
          <div className="flex items-center w-fit mx-auto justify-center gap-8 mt-12">
            <Link href={"/"} className="gradient-border-wrapper">
              <div className="rounded-md px-12 py-4 text-2xl font-semibold bg-color-black">
                Read More
              </div>
            </Link>
            <Link href={"/"} className="gradient-border-wrapper relative">
              <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
              <div className="rounded-md px-12 py-4 text-2xl font-semibold relative">
                Join Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-[70%] mt-6 lg:mt-0">
        <img
          src="/assets/homepage/hero/earth-2.png"
          className="w-full h-auto"
        />
      </div>

      <div className="block lg:hidden">
        <TypingText
          text={
            "Unlocking Full Digital Potential of Businesses and Individuals in Indonesia"
          }
          className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 mx-auto mt-8 text-center montserrat"
        />
        <div className="flex items-center w-fit mx-auto justify-center gap-8 mt-12">
          <Link href={"/"} className="gradient-border-wrapper">
            <div className="rounded-md px-8 py-4 lg:text-2xl font-semibold bg-color-black">
              Read More
            </div>
          </Link>
          <Link href={"/"} className="gradient-border-wrapper relative">
            <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
            <div className="rounded-md px-10 py-4 lg:text-2xl font-semibold relative">
              Join Now
            </div>
          </Link>
        </div>
      </div>

      <div
        className="absolute lg:bottom-10 -bottom-10 left-1/2 -translate-x-1/2 h-16 "
        hidden={isScrolled}
      >
        <DotLottieReact src="/assets/lottie/s_mouse.lottie" loop autoplay />
      </div>
    </section>
  );
};

export default Hero;
