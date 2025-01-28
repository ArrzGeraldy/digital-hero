"use client";
import BtnGradient from "@/components/BtnGradient";
import { careers } from "../../data";
import CareerCard from "@/components/CareerCard";
import SliderMobile from "@/components/SliderMobile";
import { SplideSlide } from "@splidejs/react-splide";

import MouseScroll from "@/components/MouseScroll";
import TextGradientTyping from "@/components/TextGradientTyping";

const Page = () => {
  return (
    <main className="h-full relative flex flex-col pb-14">
      <section className="flex lg:w-10/12 w-11/12 mx-auto justify-center flex-col min-h-screen  lg:mt-8 2xl:mt-12 relative">
        <TextGradientTyping
          firstText={"Be The Agent of Transformation"}
          secondText={"Delivering Impacts through Digitalization"}
          className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center"
          classSpan="block"
          color="text-white"
        />

        <p
          className="2xl:mt-16 mt-12 2xl:text-4xl xl:text-2xl text-xl text-gray-200 lg:text-white lg:font-semibold text-center montserrat"
          data-aos="fade-up"
        >
          Explore our career opportunities now
        </p>
        <div
          className="w-full flex justify-center 2xl:mt-16 mt-12"
          data-aos="fade-up"
        >
          <BtnGradient href="#featured" text={"Make An Impact Today"} />
        </div>
        <MouseScroll />
      </section>

      <section className="mt-12 lg:w-10/12 w-11/12 mx-auto">
        <div data-aos="fade-up">
          <p className="text-[#00C6FF] 2xl:text-4xl lg:text-2xl text-base font-bold text-center">
            CAREER AT DIGITAL HERO
          </p>
          <h4 className="xl:text-[40px] 2xl:text-[50px] text-[30px] font-bold text-center lg:mt-4 mt-2">
            Digitalizing Business, Empowering Heroes
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 2xl:mt-44 xl:mt-36 mt-8  xl:gap-6 2xl:gap-10 gap-y-10">
          {careers.map((career) => (
            <CareerCard
              key={career.title}
              content={career.content}
              image={career.image}
              title={career.title}
            />
          ))}
        </div>

        <div
          className="lg:w-[93%] w-full mx-auto mt-40 relative"
          data-aos="fade-up"
        >
          <img
            src="/assets/homepage/watch/watch-2.png"
            className="h-44 lg:h-auto mx-auto lg:hidden block"
          />
          <img
            src="/assets/homepage/watch/watch.png"
            className="h-44 lg:h-auto mx-auto hidden lg:block"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h4 className="text-center text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl  font-bold">
              Our Vision
            </h4>
            <p className="lg:mt-4 2xl:mt-8 mt-2  text-xs w-10/12 xl:text-xl 2xl:text-2xl text-center 2xl:w-1/2 xl:w-[60%] mx-auto">
              We empower companies to unlock their digital potential and
              individuals to build future-ready skills.
            </p>
            <p className="lg:mt-8 mt-4 text-xs w-10/12  xl:text-xl 2xl:text-2xl text-center mx-auto">
              Dionysius Sentausa- Founder & CEO of Digital Hero
            </p>
          </div>
        </div>
      </section>

      <section id="featured" className="pt-32 w-10/12 mx-auto">
        <div data-aos="fade-up">
          <h4 className="2xl:text-6xl xl:text-5xl lg:text-[40px] text-3xl font-bold   text-gradient text-center montserrat">
            Featured Opening Jobs
          </h4>
          <p className="lg:w-3/4 2xl:w-3/5 mx-auto lg:text-xl 2xl:text-2xl  text-center mt-4 text-gray-200">
            Discover your ideal career journey at Digital Hero. Boost your
            skills and expertise while driving meaningful change and shaping
            tomorrow's future through digital innovation and growth
          </p>
        </div>

        <div className="grid gap-y-8 mt-12 lg:w-[90%] lg:mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="px-6 py-6 flex flex-col bg-why-gradient border-2  border-[#2961CD] rounded-md"
              data-aos="fade-up"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start lg:gap-16 gap-8 w-full">
                <div className="lg:w-3/4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4 lg:w-3/4">
                    <h6 className="xl:text-xl 2xl:text-2xl text-lg font-bold">
                      Full Stack Developer
                    </h6>
                    <div className="flex gap-4">
                      <div className="bg-[#3853A4] rounded-md px-3 py-1.5 text-xs xl:text-xs 2xl:text-sm">
                        Mid-Level
                      </div>
                      <div className="bg-[#3853A4] text-xs rounded-md px-3 py-1.5 xl:text-xs 2xl:text-sm">
                        Hybrid
                      </div>
                      <div className="bg-[#3853A4] text-xs rounded-md px-3 py-1.5 xl:text-xs 2xl:text-sm">
                        Contract
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 2xl:text-base xl:text-sm text-sm leading-6">
                    Primary Responsibility: Designing and implementing user
                    interfaces using HTML, CSS, and JavaScript frameworks like
                    React or Angular. Building and maintaining server-side
                    application logic, databases....
                  </p>
                </div>
                <button className="bg-gradient px-4 py-2 rounded-md 2xl:text-xl xl:text-base text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="lg:w-[85%] w-full mx-auto lg:mt-32 mt-44 relative"
        >
          <img
            src="/assets/homepage/watch/watch.png"
            className="w-full lg:h-auto rounded-lg hidden lg:block"
          />
          <img
            src="/assets/homepage/watch/watch-2.png"
            className="w-full lg:h-auto rounded-lg lg:hidden block"
          />
          <div className="flex  flex-col  items-center absolute px-4 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h4 className="xl:text-2xl 2xl:text-4xl  w-[90%] mx-auto  text-center text-gray-200">
              The impact becomes clear only when you’re part of the journey.
            </h4>
            <h4 className="xl:text-2xl 2xl:text-4xl  w-[90%] mx-auto  text-center text-gray-200">
              You will never know until you experienced it
            </h4>
          </div>
        </div>
      </section>

      <section className="mt-28 pb-28">
        {/* <h4
          className="2xl:text-[50px] lg:text-[40px] text-3xl font-bold text-center  text-gradient montserrat lg:w-10/12 mx-auto"
          data-aos="fade-up"
        >
          You will never know until you experienced it
        </h4> */}
        <div data-aos="fade-up" className="lg:hidden block">
          <SliderMobile>
            {[...Array(3)].map((_, i) => (
              <SplideSlide key={i}>
                <div
                  key={i}
                  className="px-4 py-6 flex flex-col  bg-why-gradient border-2 mx-4 border-[#2961CD] rounded-md"
                >
                  <div>
                    <div className="flex gap-4 items-center">
                      <img src="/assets/journey/loren.png" />
                      <div>
                        <h6 className="font-bold text-sm">Loren Doherty</h6>
                        <p className="text-gray-400 text-xs">@tease</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-xs">
                      There’s no other program that walks you through exactly
                      what you need to know to start an online store fast,
                      written by someone who has built several 7-figure
                      ecommerce businesses from scratch.{" "}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SliderMobile>
        </div>
        <div
          data-aos="fade-up"
          className="mt-16 overflow-x-hidden whitespace-nowrap card-container lg:block hidden"
        >
          <div className="cards-slide-left">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-1/3 px-4  whitespace-nowrap"
              >
                <div className="px-4 py-6  bg-why-gradient border-2 border-[#2961CD] rounded-md inline-block">
                  <div>
                    <div className="flex gap-4 items-center">
                      <img src="/assets/journey/loren.png" />
                      <div>
                        <h6 className="font-bold">Loren Doherty</h6>
                        <p className="text-gray-400 text-sm">@tease</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-wrap lg:text-base text-sm">
                      There’s no other program that walks you through exactly
                      what you need to know to start an online store fast,
                      written by someone who has built several 7-figure
                      ecommerce businesses from scratch.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cards-slide-left">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-1/3 px-4  whitespace-nowrap"
              >
                <div className="px-4 py-6  bg-why-gradient border-2 border-[#2961CD] rounded-md inline-block">
                  <div>
                    <div className="flex gap-4 items-center">
                      <img src="/assets/journey/loren.png" />
                      <div>
                        <h6 className="font-bold">Loren Doherty</h6>
                        <p className="text-gray-400 text-sm">@tease</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-wrap lg:text-base text-sm">
                      There’s no other program that walks you through exactly
                      what you need to know to start an online store fast,
                      written by someone who has built several 7-figure
                      ecommerce businesses from scratch.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="mt-16 overflow-x-hidden whitespace-nowrap card-container  lg:block hidden"
        >
          <div className="cards-slide-right">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-1/3 px-4  whitespace-nowrap"
              >
                <div className="px-4 py-6  bg-why-gradient border-2 border-[#2961CD] rounded-md inline-block">
                  <div>
                    <div className="flex gap-4 items-center">
                      <img src="/assets/journey/loren.png" />
                      <div>
                        <h6 className="font-bold">Loren Doherty</h6>
                        <p className="text-gray-400 text-sm">@tease</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-wrap lg:text-base text-sm">
                      There’s no other program that walks you through exactly
                      what you need to know to start an online store fast,
                      written by someone who has built several 7-figure
                      ecommerce businesses from scratch.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cards-slide-right">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="inline-block w-1/3 px-4  whitespace-nowrap"
              >
                <div className="px-4 py-6  bg-why-gradient border-2 border-[#2961CD] rounded-md inline-block">
                  <div>
                    <div className="flex gap-4 items-center">
                      <img src="/assets/journey/loren.png" />
                      <div>
                        <h6 className="font-bold">Loren Doherty</h6>
                        <p className="text-gray-400 text-sm">@tease</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-wrap lg:text-base text-sm">
                      There’s no other program that walks you through exactly
                      what you need to know to start an online store fast,
                      written by someone who has built several 7-figure
                      ecommerce businesses from scratch.{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
