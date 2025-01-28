"use client";
import Link from "next/link";
import TextGradientTyping from "../TextGradientTyping";
import MouseScroll from "../MouseScroll";
import dynamic from "next/dynamic";

const EarthVisualization = dynamic(() => import("../EarthScene"), {
  ssr: false,
});
const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col h-screen items-center justify-center   lg:justify-normal  lg:mt-8 mt-4  mx-auto relative w-full ">
      <div className="lg:w-[60%] w-full">
        <TextGradientTyping
          className="2xl:text-[80px] xl:text-5xl lg:text-4xl text-[44px]  text-center font-bold montserrat tracking-wider"
          classSpan="block"
          firstText={"Digitalizing"}
          secondText={"The Future"}
        />
        <div className="hidden lg:block" data-aos="fade-up">
          <p className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-3/4 mx-auto mt-8 text-center montserrat">
            Unlocking Full Digital Potential of Businesses and Individuals in
            Indonesia
          </p>
          <div className="flex items-center w-fit mx-auto justify-center gap-8 mt-12">
            <Link href={"#zero-hero"} className="gradient-border-wrapper">
              <div className="rounded-md px-12 py-4 text-2xl font-semibold bg-color-black">
                Read More
              </div>
            </Link>
            <Link
              href={"/sign-up"}
              className="gradient-border-wrapper relative"
            >
              <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
              <div className="rounded-md px-12 py-4 text-2xl font-semibold relative">
                Join Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-[80%] mt-6 lg:mt-0">
        {/* <img
          width={300}
          height={300}
          src="/assets/homepage/hero/earth-2.png"
          className="w-full h-auto"
        /> */}
        <EarthVisualization />
      </div>

      <div className="block lg:hidden">
        <p className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-full mx-auto mt-8 text-center montserrat">
          Unlocking Full Digital Potential of Businesses and Individuals in
          Indonesia
        </p>
        <div className="flex flex-col items-center w-10/12 mx-auto justify-center gap-4 mt-12">
          <Link href={"#zero-hero"} className="gradient-border-wrapper w-full">
            <div className="rounded-md px-8 py-4 lg:text-2xl text-center font-semibold bg-color-black">
              Read More
            </div>
          </Link>
          <Link
            href={"/sign-up"}
            className="gradient-border-wrapper relative w-full"
          >
            <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
            <div className="rounded-md px-10 py-4 lg:text-2xl font-semibold relative text-center">
              Join Now
            </div>
          </Link>
        </div>
      </div>

      <MouseScroll />
    </section>
  );
};

export default Hero;
