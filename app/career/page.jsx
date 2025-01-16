import { careers } from "../data";
import CareerCard from "@/components/CareerCard";

const page = () => {
  return (
    <main className="h-full relative mx-auto flex flex-col w-[90%] pb-14">
      <section className="flex w-full justify-center flex-col min-h-screen">
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center ">
          Be The Agent of Transformation Delivering Impacts through
          Digitalization
        </h4>
        <p className="mt-12 lg:text-2xl text-xl text-gray-200 lg:text-white lg:font-semibold text-center">
          Explore our career opportunities now
        </p>
        <div className="w-full flex justify-center">
          <button className="px-6 py-2.5 rounded-md bg-gradient mt-12 lg:text-xl text-lg font-semibold">
            Make Impact Today!
          </button>
        </div>
      </section>

      <section className="mt-32">
        <p className="text-[#00C6FF] lg:text-3xl text-xl text-center font-bold">
          CAREER AT DIGITAL HERO
        </p>
        <h4 className="lg:text-[50px] text-[30px] font-bold text-center lg:text-start">
          Digitalizing Business, Empowering Heroes
        </h4>
        <div className="grid lg:grid-cols-3 lg:mt-36 mt-12 gap-8">
          {careers.map((career) => (
            <CareerCard
              key={career.title}
              content={career.content}
              image={career.image}
              title={career.title}
            />
          ))}
        </div>

        <div className="lg:w-[90%] mx-auto mt-40 relative">
          <img
            src="/assets/homepage/watch/watch.png"
            className="h-44 lg:h-auto"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <h4 className="text-center lg:text-6xl text-2xl font-bold">
              Our Vision
            </h4>
            <p className="lg:mt-8 mt-4  text-sm lg:text-xl font-semibold text-center">
              We empower companies to unlock their digital potential and
              individuals to build future-ready skills.
            </p>
            <p className="lg:mt-12 mt-4 text-sm  lg:text-xl font-semibold text-center">
              Dionysius Sentausa- Founder & CEO of Digital Hero
            </p>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center  text-gradient ">
          Featured Opening Jobs
        </h4>
        <p className="lg:w-3/4 mx-auto lg:text-xl lg:font-semibold text-center mt-8">
          Discover your ideal career journey at Digital Hero. Boost your skills
          and expertise while driving meaningful change and shaping tomorrow's
          future through digital innovation and growth
        </p>

        <div className="grid gap-y-8 mt-12 lg:w-[90%] lg:mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="px-4 py-6 flex flex-col bg-why-gradient border-2  border-[#2961CD] rounded-md"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start lg:gap-16 gap-8 w-full">
                <div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-4 w-3/4">
                    <h6 className="lg:text-2xl text-xl font-bold">
                      Full Stack Developer
                    </h6>
                    <div className="flex gap-4">
                      <div className="bg-[#3853A4] text-xs rounded-md px-3 py-1.5 lg:text-sm">
                        Mid-Level
                      </div>
                      <div className="bg-[#3853A4] text-xs rounded-md px-3 py-1.5 lg:text-sm">
                        Hybrid
                      </div>
                      <div className="bg-[#3853A4] text-xs rounded-md px-3 py-1.5 lg:text-sm">
                        Contract
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    Primary Responsibility: Designing and implementing user
                    interfaces using HTML, CSS, and JavaScript frameworks like
                    React or Angular. Building and maintaining server-side
                    application logic, databases....
                  </p>
                </div>
                <button className="bg-gradient px-4 py-2 rounded-md lg:w-1/4">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 lg:text-2xl w-[90%] mx-auto text-xl lg:font-semibold text-center text-gray-200">
          The impact becomes clear only when you’re part of the journey.
        </p>
      </section>

      <section className="mt-32 pb-28">
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center  text-gradient ">
          You will never know until you experienced it
        </h4>
        <div className="grid lg:grid-cols-3 gap-x-4 gap-y-8 mt-16">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="px-4 py-6 flex flex-col  bg-why-gradient border-2 ms-8 border-[#2961CD] rounded-md"
            >
              <div>
                <div className="flex gap-4 items-center">
                  <img src="/assets/journey/loren.png" />
                  <div>
                    <h6 className="font-bold">Loren Doherty</h6>
                    <p className="text-gray-400 text-sm">@tease</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  There’s no other program that walks you through exactly what
                  you need to know to start an online store fast, written by
                  someone who has built several 7-figure ecommerce businesses
                  from scratch.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
