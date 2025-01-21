"use client";
import BtnGradient from "@/components/BtnGradient";
// import { digitalDatas, teams } from "../../data";
import DigitalMarketCard from "@/components/DigitalMarketCard";
import TeamCard from "@/components/TeamCard";
import { Check, Minus, Plus } from "lucide-react";
import CardToggle from "@/components/Journey/CardToggle";
import { digitalDatas, teams } from "@/app/data";
import TypingText from "@/components/TypingText";

const page = () => {
  return (
    <main className="h-full relative pb-14 w-10/12 mx-auto">
      <section className="flex h-screen items-center 2xl:mt-8 xl:mt-16 relative">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full 2xl:w-2/3 lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bold montserrat">
              The Heroes Journey:{" "}
              <TypingText
                text={"A Path to Digital Mastery"}
                className="text-gradient block"
              />
            </h1>

            <p className="text-lg  xl:text-xl 2xl:text-3xl text-gray-300 montserrat">
              <span className="text-gradient font-semibold">
                Don't walk this path alone!
              </span>{" "}
              We've summarized the experience of industry experts and turned it
              into a clear digitalization roadmap, helping you avoid the
              mistakes we have had. Start your journey with expert guidance
              along the way to fast-track your success.
            </p>

            <BtnGradient text={"Start My Journey"} />
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/assets/journey/hero.png"
              alt="Hero Journey"
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-3xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div data-aos="fade-up">
          <h4 className="text-3xl md:text-4xl xl:text-[40px] 2xl:text-[60px] font-bold text-center montserrat">
            What Will I
            <span className="text-gradient"> Benefit from This Journey?</span>
          </h4>
          <p className="w-3/4 mx-auto text-center mt-12 2xl:text-4xl lg:text-xl xl:text-2xl text-xl text-gray-200 font-normal leading-loose">
            <span className="text-gradient font-semibold">
              The Heroes Journey
            </span>{" "}
            equips individuals with essential skills and knowledge to excel in
            the digital era, offering expert-crafted guidance and best-practice
            methods to accelerate your progress.
          </p>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <div className="bg-why-gradient border-2 mt-6 grid lg:grid-cols-5 gap-8 items-center py-12 2xl:py-16 px-8 border-[#2961CD] rounded-md">
            <div className="xl:col-span-2 xl:row-span-2 row-start-2 xl:row-start-1">
              <img src="/assets/journey/2-weeks-program.png" alt="" />
            </div>
            <div className="xl:col-span-3 xl:col-start-3">
              <h1 className="text-gradient 2xl:text-6xl xl:text-5xl lg:text-3xl text-3xl font-bold montserrat">
                2 Weeks Program
              </h1>
              <p className="font-semibold  2xl:text-2xl xl:text-xl montserrat">
                Intensive Live Webinar Session
              </p>
            </div>
            <div className="flex flex-col xl:col-span-3 space-y-8">
              <p className="2xl:text-2xl xl:text-xl text-slate-200">
                Discover your full potential in the digital era with{" "}
                <span className="text-[#00C6FF] font-semibold">
                  The Heroes Journey
                </span>
                . This live webinar takes you through a{" "}
                <span className="text-[#00C6FF] font-semibold">
                  step-by-step
                </span>{" "}
                roadmap to mastering digitalization. Gain insights and proven
                strategies from{" "}
                <span className="text-[#00C6FF] font-semibold">Expert</span> in
                various industries.
              </p>
              <p className="2xl:text-2xl xl:text-xl text-slate-200">
                This roadmap aims to help{" "}
                <span className="text-[#00C6FF] font-semibold">
                  you succeed in today’s
                </span>{" "}
                digital landscape.{" "}
              </p>
              <p className="2xl:text-2xl xl:text-xl text-slate-200">
                “Ready to thrive in today’s competitive digital market?"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24  grid grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalDatas.map((data) => (
            <DigitalMarketCard
              key={data.title}
              content={data.content}
              image={data.image}
              title={data.title}
            />
          ))}
        </div>
      </section>

      <section className="mt-32">
        <h4
          className="2xl:text-[60px] text-[40px] font-bold text-center montserrat"
          data-aos="fade-up"
        >
          {" "}
          This roadmap is designed to be{" "}
          <span className="text-gradient">
            practical, easy to implement, and actionable.
          </span>
        </h4>

        <p
          className="mt-12 w-[80%] mx-auto 2xl:text-4xl text-2xl font-semibold text-gray-300 text-center"
          data-aos="fade-up"
        >
          <span className="text-[#00C6FF]">
            The Heroes Journey: A Path to Digital Mastery
          </span>{" "}
          is created for business owners, professionals, and entrepreneurs eager
          to embrace digital transformation and unlock their full potential in
          the digital era.
        </p>
        <p
          className="mt-12 w-[80%] mx-auto 2xl:text-4xl text-2xl font-semibold text-gray-300 text-center hidden lg:block"
          data-aos="fade-up"
        >
          This roadmap is perfect not only for those starting their digital
          journey but also for established businesses aiming to optimize and
          scale their operations through strategic digitalization.
        </p>
        <p
          className="mt-12 w-[80%] mx-auto 2xl:text-4xl text-2xl font-semibold text-gray-300 text-center hidden lg:block"
          data-aos="fade-up"
        >
          If you're still uncertain whether this journey is the right step for
          you, click the button below to connect with our team for a
          consultation.
        </p>
        <div className="w-full flex justify-center mt-12" data-aos="zoom-in">
          <BtnGradient text={"Consult With Our Team"} />
        </div>
      </section>

      <section className="mt-32">
        <h4
          className="2xl:text-[50px] text-[40px] font-bold text-center montserrat"
          data-aos="fade-up"
        >
          Learn from <span className="text-gradient">The Digital Heroes</span>,
          who are experts in the digital landscapes across diverse industries
        </h4>

        <div
          className="mt-12 grid lg:grid-cols-3 gap-8 2xl:gap-16 w-[90%] mx-auto"
          data-aos="zoom-in"
        >
          {teams.map((team) => (
            <TeamCard
              key={team.name}
              image={team.image}
              name={team.name}
              position={team.position}
            />
          ))}
        </div>
      </section>

      <section className="mt-32">
        <h4
          className="2xl:text-[60px] text-[40px] font-bold text-center montserrat"
          data-aos="fade-up"
        >
          Choose Your Path:{" "}
          <span className="text-gradient lg:inline block">Be The Hero!</span>
        </h4>

        <div className="mt-16 grid lg:grid-cols-3 gap-4" data-aos="fade-up">
          {[...Array(3)].map((_, i) => (
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

      <section className="mt-32 lg:w-2/3 mx-auto">
        <h4
          className="2xl:text-6xl xl:text-5xl text-[40px] font-bold   text-gradient text-center  montserrat"
          data-aos="fade-up"
        >
          Ready to be a Digital Hero?
        </h4>

        <div
          className="px-4 pt-6 pb-16 flex flex-col mt-8  bg-why-gradient border-2 border-[#2961CD] rounded-md"
          data-aos="fade-up"
        >
          <h4 className="2xl:text-[50px] text-[40px] font-bold  text-gradient text-center montserrat">
            The Heroes Journey Batch 1
          </h4>
          <p className="2xl:text-[30px]  xl:text-xl text-center w-[90%] mx-auto">
            {" "}
            Register now and Implement our Framework to Your Journey and Win
          </p>

          <div className="mt-12 flex flex-col lg:flex-row  items-start w-[90%]  lg:w-auto mx-auto gap-4 2xl:text-xl">
            <div className="rounded-full  px-6 py-2.5  bg-[#3853A4]">
              Proven Best-practiced Frameworks{" "}
            </div>
            <div className="rounded-full  px-6 py-2.5  bg-[#3853A4]">
              Brand Checkup Hands-on
            </div>
          </div>
          <div className="lg:mt-8 mt-4 flex flex-col lg:flex-row  items-start w-[90%]  lg:w-auto mx-auto gap-4">
            <div className="rounded-full px-6 py-2.5  bg-[#3853A4]">
              Experience 20+ Digital Marketing Templates
            </div>
            <div className="rounded-full  px-6 py-2.5  bg-[#3853A4]">
              Exclusive Community
            </div>
          </div>

          <div className="mt-16 pb-12 grid gap-y-8 w-[90%] mx-auto border-b-2 2xl:text-[32px] text-2xl">
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className=" ">10 Intensive Live Webinar Sessions</span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="">2 QnA Sessions with The Digital Heroes</span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="">Access to Exclusive Networking Events</span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="">
                Lifetime Access to Exclusive Heroes Community
              </span>
            </div>
          </div>

          <div className="mt-8 lg:w-2/3 w-[80%] mx-auto flex justify-center">
            <div data-aos="zoom-out">
              <p className="line-through lg:text-xl">Rp 5.000.000</p>
              <div className="rounded-md px-10 py-4 lg:w-fit w-full bg-white text-black 2xl:text-6xl xl:text-5xl text-3xl font-semibold mt-2 relative">
                <p>Rp 2.499.000</p>
                <img
                  src="/assets/journey/discount.png"
                  className="absolute -top-1/4 -right-10 lg:w-auto xl:h-3/4 w-1/4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center" data-aos="zoom-out">
            <button className="lg:w-[40%] px-4 lg:px-0 w-auto py-3 lg:py-4 rounded-md bg-gradient mt-16 lg:text-2xl text-lg font-semibold bounce-btn">
              Register Now
            </button>
          </div>
          <p className="text-center mt-6">
            Learn Now and Let’s Digitalize The Future!
          </p>
        </div>
      </section>

      <section className="mt-32 ">
        <h4 className="2xl:text-[50px] text-[40px] font-bold   text-gradient text-center  montserrat">
          The Heroes Journey Agenda
        </h4>
        <p className="2xl:text-4xl text-2xl text-center font-medium mb-8">
          03 March - 14 March 2025
        </p>

        <div className="mt-16 lg:w-2/3 mx-auto">
          {[...Array(11)].map((_, i) => (
            <div
              key={i}
              className="w-full pb-8 border-b mt-8"
              data-aos="fade-up"
            >
              <div className="flex justify-between">
                <div data-aos="fade-right">
                  <p className="2xl:text-2xl text-xl ">Monday, 03 March 2025</p>
                  <p className="text-gray-400 lg:text-lg text-sm mt-6">
                    18.30 - 20.30 WIB
                  </p>
                </div>
                <div data-aos="fade-left">
                  <p className="2xl:text-2xl text-xl  text-[#00C6FF]">
                    Digitalization Roadmap 01
                  </p>
                  <p className="text-center 2xl:text-3xl xl:text-2xl text-lg font-bold mt-6">
                    Tittle of Module
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32">
        <h4
          className="2xl:text-[50px] text-[40px] font-bold   text-gradient text-center montserrat"
          data-aos="fade-up"
        >
          Frequently Asked Question
        </h4>
        <div className="mt-12 lg:grid flex flex-col-reverse grid-cols-2 w-full gap-16 items-center">
          <div data-aos="fade-right">
            <CardToggle />
          </div>

          <div className="h-full flex items-center" data-aos="fade-left">
            <img src="/assets/journey/QnA.png" className="2xl:w-[70%]" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
