"use client";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";
import { journeyDatas } from "./data";
import JourneyCard from "@/components/JourneyCard";
import { useState } from "react";

export default function Home() {
  const [openCard, setOpenCard] = useState(1); // State untuk melacak kartu yang terbuka

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index); // Jika kartu yang sama diklik, tutup
  };

  return (
    <main className="h-full relative mx-auto pb-14 w-[93%]">
      <section className="flex h-screen w-full items-center mt-8">
        <div className="w-[60%]">
          <h1 className="2xl:text-8xl xl:text-6xl lg:text-5xl text-4xl font-bold ">
            Digitalizing <span className="text-gradient">The Future</span>
          </h1>
          <p className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-3/4 mx-auto mt-8 text-center">
            Unlocking Full Digital Potential of Businesses and Individuals in
            Indonesia{" "}
          </p>
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
            src="/assets/homepage/hero/earth.png"
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="mt-32">
        <h4 className="2xl:text-6xl xl:text-6xl lg:text-5xl text-4xl font-bold text-center">
          From <span className="text-gradient">Zero to Hero</span>
        </h4>
        <p className="text-center mt-4 2xl:text-4xl xl:text-3xl text-2xl  font-semibold text-gray-300">
          Choose Your Path: <span className="text-gradient">Be The Hero</span>
        </p>

        <div className="flex justify-center mt-24 gap-36 items-end w-[93%] mx-auto">
          <div className="">
            <img src="/assets/homepage/from-zero/zero.png" />
            <h1 className="font-bold text-center 2xl:text-8xl mt-8 xl:text-6xl lg:text-4xl text-2xl">
              ZERO
            </h1>
          </div>
          <div className="relative border-4 rounded-lg border-[#2961CD] w-fit   white-shadow-box">
            <img src="/assets/homepage/from-zero/hero.png" className="p-12 " />
            <div className="rounded-t-2xl bg-[#1C55E0] font-bold text-center 2xl:text-8xl mt-8 xl:text-6xl lg:text-4xl text-2xl">
              HERO
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center mt-32">
          <div>
            <ChevronLeft className="hidden sm:block text-[#1C55E0]" size={24} />
            <ChevronLeft
              className="hidden md:block text-[#1C55E0] lg:hidden"
              size={48}
            />
            <ChevronLeft className="hidden lg:block text-[#1C55E0]" size={64} />
          </div>
          {/* card 1 */}
          <div className="relative flex">
            <img
              src="/assets/homepage/from-zero/card-1.png"
              className="2xl:h-[600px]"
            />
            <div className="absolute flex flex-col w-full justify-center items-center">
              <img
                src="/assets/homepage/from-zero/sarah.png"
                className="2xl:h-32"
              />
              <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                Sarah
              </h4>
              <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                Pemilik Toko
              </p>
              <img
                src="/assets/homepage/from-zero/quote.png"
                className="2xl:h-auto xl:h-6"
              />
              <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
                {" "}
                Dulu saya gagap teknologi, sekarang bisnis saya online dan
                mendunia. Digital Hero adalah game-changer!
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative flex">
            <img
              src="/assets/homepage/from-zero/card-2.png"
              className="2xl:h-[600px]"
            />
            <div className="absolute -top-20 flex flex-col w-full justify-center items-center">
              <img
                src="/assets/homepage/from-zero/rizky.png"
                className="2xl:h-44 xl:h-32"
              />
              <h4 className="2xl:text-5xl xl:text-2xl font-bold 2xl:mt-4 xl:mt-1">
                Rizky
              </h4>
              <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2">
                Pemilik Studio Sewa
              </p>
              <img
                src="/assets/homepage/from-zero/quote.png"
                className="2xl:h-14 xl:h-8"
              />
              <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2 w-[60%] text-center mx-auto ">
                {" "}
                Dulu saya gagap teknologi, sekarang bisnis saya online dan
                mendunia. Digital Hero adalah game-changer!
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="relative flex">
            <img
              src="/assets/homepage/from-zero/card-3.png"
              className="2xl:h-[600px]"
            />
            <div className="absolute -left-4 flex flex-col w-full justify-center items-center">
              <img
                src="/assets/homepage/from-zero/andi.png"
                className="2xl:h-32"
              />
              <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                Andi
              </h4>
              <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                Pemilik Toko
              </p>
              <img
                src="/assets/homepage/from-zero/quote.png"
                className="2xl:h-auto xl:h-6"
              />
              <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
                {" "}
                Dulu saya gagap teknologi, sekarang bisnis saya online dan
                mendunia. Digital Hero adalah game-changer!
              </p>
            </div>
          </div>
          <div>
            <ChevronRight
              className="hidden sm:block text-[#1C55E0]"
              size={24}
            />
            <ChevronRight
              className="hidden md:block text-[#1C55E0] lg:hidden"
              size={48}
            />
            <ChevronRight
              className="hidden lg:block text-[#1C55E0]"
              size={64}
            />
          </div>
        </div>
      </section>

      <section className="mt-44">
        <h4 className="2xl:text-8xl xl:text-6xl lg:text-5xl text-4xl font-bold text-center">
          Why You Should NOT <span className="text-gradient">Choose Us?</span>
        </h4>

        <div className="mt-24 ">
          {/* content-1 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute">
              1
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 border-b-2 border-dashed ">
              <div className="border-2 border-[#2961CD] bg-why-gradient w-[60%] rounded-lg px-8 py-6">
                <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Stay Comfortable
                </h4>
                <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                  We’ve dedicated countless hours in summarizing the best
                  practices from top digital experts into a clear roadmap for
                  success. We’ve also built a community of like-minded heroes
                  who thrive in the digital era. If you prefer comfort over
                  growth, we don’t think you're a good fit.
                </p>
              </div>
            </div>
          </div>
          {/* content-2 */}
          <div className="w-full relative flex">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute right-0 top-8">
              2
            </div>
            <div className="2xl:pe-20  pe-12 2xl:mx-12 mx-7 pb-8 border-e-2 border-b-2 border-dashed  flex justify-end py-8">
              <div className="border-2 border-[#2961CD] bg-why-gradient w-[60%] rounded-lg px-8 py-6">
                <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Result Aren’t For Everyone
                </h4>
                <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                  Our modules are designed to give you hands-on experience, not
                  just theory. So if you prefer to stay in the “Just Enough
                  Knowledge” mindset, we don't think you’re a good fit.
                </p>
              </div>
            </div>
          </div>
          {/* content-3 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute top-8">
              3
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 border-b-2 border-dashed py-8">
              <div className="border-2 border-[#2961CD] bg-why-gradient w-[60%] rounded-lg px-8 py-6">
                <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Who Needs Experts?
                </h4>
                <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                  We’ve got industry experts to walk you through the proven
                  framework, giving you the fastest route to success. But, hey,
                  if figuring it out on your own sounds like more fun, we
                  understand
                </p>
              </div>
            </div>
          </div>
          {/* content-4 */}
          <div className="w-full relative flex">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute right-0 top-8">
              4
            </div>
            <div className="2xl:pe-20  pe-12 2xl:mx-12 mx-7 w-full pb-8 border-e-2 border-b-2 border-dashed  flex justify-end py-8">
              <div className="border-2 border-[#2961CD] bg-why-gradient w-[60%] rounded-lg px-8 py-6">
                <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Success Is Overrated
                </h4>
                <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                  We’ve built a supportive network of ambitious learners who
                  inspire each other to grow. But if flying solo sounds more
                  appealing, we respect that.
                </p>
              </div>
            </div>
          </div>

          {/* content-5 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute top-8">
              5
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 h-[40px] border-dashed py-8">
              <div className="border-2 border-[#2961CD] bg-why-gradient w-[60%] rounded-lg px-8 py-6">
                <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  No Need for Community
                </h4>
                <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                  We’ve built a supportive network of ambitious learners who
                  inspire each other to grow. But if flying solo sounds more
                  appealing, we respect that.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid mt-24">
          <div className="w-full flex relative ">
            <div className="2xl:text-6xl lg:text-4xl font-semibold  flex items-center justify-center  rounded-full 2xl:h-20 2xl:w-20 h-14 w-14 bg-gradient absolute">
              1
            </div>
            <div className="w-full ms-6 2xl:ms-10 px-4 pb-6 border-s-2 lg:border-b-2 border-dashed lg:me-6">
              <div className="lg:w-[60%] px-6 py-4 bg-why-gradient border-2 ms-8 2xl:ms-12 border-[#2961CD] rounded-md">
                <h4 className="2xl:text-6xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Stay Comfortable
                </h4>
                <p className="mt-2 text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                  We’ve dedicated countless hours in summarizing the best
                  practices from top digital experts into a clear roadmap for
                  success. We’ve also built a community of like-minded heroes
                  who thrive in the digital era. If you prefer comfort over
                  growth, we don’t think you're a good fit.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex relative justify-end ">
            <div className="text-2xl xl:text-4xl font-semibold h-14  flex items-center justify-center rounded-full w-14 bg-gradient absolute top-10 left-0 lg:left-auto">
              2
            </div>
          </div>

          <div className="w-full flex relative ">
            <div className="text-2xl xl:text-4xl font-semibold h-14 flex items-center justify-center  rounded-full w-14 bg-gradient absolute top-8">
              3
            </div>
            <div className="w-full py-6   ms-6 px-4 pb-6 border-s-2 lg:border-b-2 border-dashed me-6">
              <div className="lg:w-[60%] w-full px-4 pt-2 pb-3  bg-why-gradient border-2 ms-8 border-[#2961CD] rounded-md min-h-40">
                <h4 className="xl:text-4xl lg:text-2xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Who Needs Experts?
                </h4>
                <p className="mt-2 text-sm lg:text-base xl:text-xl">
                  We’ve got industry experts to walk you through the proven
                  framework, giving you the fastest route to success. But, hey,
                  if figuring it out on your own sounds like more fun, we
                  understand
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex relative justify-end">
            <div className="text-2xl xl:text-4xl font-semibold h-14  flex items-center justify-center  rounded-full w-14 bg-gradient absolute top-10 left-0 lg:left-auto">
              4
            </div>
            <div className="w-full flex justify-end   px-4 pb-6 lg:border-e-2 lg:border-b-2 border-s-2 lg:border-s-0 border-dashed ms-6  lg:me-6 py-6">
              <div className="lg:w-[60%] w-full px-4 pt-2 pb-3  bg-why-gradient border-2 border-[#2961CD] rounded-md lg:me-8 min-h-40 ms-8 lg:ms-0">
                <h4 className="xl:text-4xl lg:text-2xl text-xl font-bold text-[#2961CD] text-gradient ">
                  Success Is Overrated
                </h4>
                <p className="mt-2 lg:text-base text-sm xl:text-xl ">
                  We’ve built a supportive network of ambitious learners who
                  inspire each other to grow. But if flying solo sounds more
                  appealing, we respect that.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex relative ">
            <div className="text-2xl xl:text-4xl font-semibold h-14 flex items-center justify-center  rounded-full w-14 bg-gradient absolute top-10">
              5
            </div>
            <div className="w-full py-6   ms-6 px-4 pb-6 border-s-2 border-dashed me-6"></div>
          </div>
        </div> */}

        <div className="lg:w-[90%] w-full mx-auto mt-80 relative">
          <img src="/assets/homepage/watch/watch.png" className="w-full" />
          <div className="flex  flex-col  items-center absolute px-4 w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h4 className="text-center lg:text-2xl xl:text-4xl 2xl:text-5xl  font-bold">
              Do you want to watch others succeed?{" "}
              <span className="text-gradient block">
                or you want to be the winner?
              </span>
            </h4>
            <div className=" w-[60%] mt-10 flex gap-8 font-semibold text-sm lg:text-base">
              <button className="gradient-border-wrapper w-1/2 2xl:text-4xl text-2xl font-semibold">
                <p className="py-6 rounded-lg  bg-[#00052a] ">Watch Others</p>
              </button>
              <button className="bg-gradient w-1/2 py-6 rounded-lg 2xl:text-4xl text-2xl font-semibold">
                I'm The Winner!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center">
          The Heroes Journey:{" "}
          <span className="text-gradient">A Path to Digital Mastery</span>
        </h4>
        <p className="text-gray-100 2xl:text-5xl xl:text-4xl lg:text-2xl text-xl mt-12 w-[90%] mx-auto text-center px-8">
          Don’t walk this path alone! We’ve summarized the experience of
          industry experts and turned it into a clear digitalization roadmap,
          helping you avoid the mistakes we have had. Start your journey with
          expert guidance along the way to fast-track your success.
        </p>
        <div className="w-full flex items-center mt-16">
          <button className="bg-gradient mx-auto 2xl:px-12 2xl:py-8 px-6 py-4 2xl:text-4xl text-2xl  font-semibold rounded-lg">
            Start My Journey
          </button>
        </div>

        {/* card */}
        <div className="mt-24 grid lg:grid-cols-2 gap-8 w-[93%] mx-auto">
          {journeyDatas.map((data) => (
            <JourneyCard
              key={data.title}
              title={data.title}
              content={data.content}
              image={data.image}
            />
          ))}
        </div>
      </section>

      <section className="mt-32">
        <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center">
          Looking to Make an Impact?{" "}
          <span className="text-gradient block lg:inline">
            Partner with Us!
          </span>
          <div className="w-full">
            <p className="2xl:text-5xl lg:text-2xl xl:text-4xl text-xl text-center text-gray-200 w-3/4 mt-12 mx-auto font-normal">
              From Project Kickoff to Large-scale Enterprise Solutions, We’re
              here to help!
            </p>
          </div>
          <div className="w-full flex items-center">
            <button className="bg-gradient mx-auto 2xl:text-4xl 2xl:px-14 2xl:py-8 xl:px-6 xl:py-4 text-lg xl:text-2xl mt-16  font-semibold rounded-lg">
              Let's Collabarate!
            </button>
          </div>
          <div className="mt-24 flex items-center justify-center gap-8 w-[93%] mx-auto">
            <div className="w-1/2">
              {/* Card 1 */}
              <div className="bg-why-gradient border-2 flex flex-col 2xl:p-8 p-4 border-[#2961CD] rounded-lg mb-8">
                <div className="flex justify-between items-center">
                  <h4
                    className={`text-xl 2xl:text-3xl font-semibold ${
                      openCard === 1 && "text-[#00C6FF]"
                    }`}
                  >
                    Training and Skill Development
                  </h4>
                  <div
                    className={` px-3 py-3 rounded-full cursor-pointer ${
                      openCard == 1
                        ? "bg-white text-black"
                        : "text-white bg-black"
                    }`}
                    onClick={() => toggleCard(1)} // Toggle Card 1
                  >
                    {openCard === 1 ? (
                      <ChevronDown size={28} />
                    ) : (
                      <ChevronRight size={28} />
                    )}
                  </div>
                </div>
                {openCard === 1 && (
                  <p className=" xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
                    We are open to partner with institutions to offer training
                    programs, workshops, or digital skill courses for employees,
                    students, or members. This could include programs on digital
                    marketing, coding, project management, and other relevant
                    digital skills.
                  </p>
                )}
              </div>

              {/* Card 2 */}
              <div className="bg-why-gradient border-2 flex flex-col 2xl:p-8 p-4 border-[#2961CD] rounded-lg mb-8">
                <div className="flex justify-between items-center">
                  <h4
                    className={`text-xl 2xl:text-3xl font-semibold text-start ${
                      openCard === 2 && "text-[#00C6FF] "
                    }`}
                  >
                    Consultation and Digital Strategy Development
                  </h4>
                  <div
                    className={` px-3 py-3 rounded-full cursor-pointer ${
                      openCard == 2
                        ? "bg-white text-black"
                        : "text-white bg-black"
                    }`}
                    onClick={() => toggleCard(2)} // Toggle Card 2
                  >
                    {openCard === 2 ? (
                      <ChevronDown size={28} />
                    ) : (
                      <ChevronRight size={28} />
                    )}
                  </div>
                </div>
                {openCard === 2 && (
                  <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
                    Get guidance and consultation on developing digital
                    strategies to achieve your business goals and leverage
                    technology effectively.
                  </p>
                )}
              </div>

              {/* Card 3 */}
              <div className="bg-why-gradient border-2 flex flex-col 2xl:p-8 p-4 border-[#2961CD] rounded-lg">
                <div className="flex justify-between items-center">
                  <h4
                    className={`text-xl 2xl:text-3xl font-semibold text-start ${
                      openCard === 3 && "text-[#00C6FF] "
                    }`}
                  >
                    Technology Integration and System Development
                  </h4>
                  <div
                    className={` px-3 py-3 rounded-full cursor-pointer ${
                      openCard == 3
                        ? "bg-white text-black"
                        : "text-white bg-black"
                    }`}
                    onClick={() => toggleCard(3)} // Toggle Card 3
                  >
                    {openCard === 3 ? (
                      <ChevronDown size={28} />
                    ) : (
                      <ChevronRight size={28} />
                    )}
                  </div>
                </div>
                {openCard === 3 && (
                  <p className=" xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
                    We help integrate new technologies into your business
                    processes and develop custom systems to streamline
                    operations.
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <img
                src="/assets/homepage/watch/collabrate.png"
                className="2xl:h-[700px]"
              />
            </div>
          </div>
        </h4>
      </section>

      <section className="mt-44">
        <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center text-gradient">
          We Are Digitalizing The Future!
        </h1>
        <p className="w-3/4 mx-auto text-center mt-12 2xl:text-5xl lg:text-2xl xl:text-4xl text-xl text-gray-200  font-normal">
          Empowering 10,000 digital heroes by building a powerful ecosystem that
          connects like-minded heroes to build a better tomorrow.
        </p>

        <div className="mt-12 flex items-center flex-col">
          <h1 className="2xl:text-[140px] xl:text-9xl lg:text-8xl text-6xl font-bold text-center ">
            1000+
          </h1>
          <p className="2xl:text-4xl lg:text-2xl xl:text-3xl text-xl   font-normal mt-4">
            Heroes Were Born!
          </p>
          <button className="bg-gradient mx-auto w-fit py-4 mt-12 font-semibold rounded-lg 2xl:text-3xl 2xl:px-12 2xl:py-8 text-2xl px-8 py-6">
            Join Our Community
          </button>
        </div>

        <div className="bg-why-gradient border-2 mt-24 flex flex-col justify-start items-start px-4 py-12 border-[#2961CD] rounded-md w-[93%] mx-auto">
          <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl text-center font-bold w-full">
            Be the Hero of Your{" "}
            <span className="text-gradient">Digital Journey</span>
          </h4>
          <div className="w-[95%] flex flex-col-reverse lg:flex-row gap-8 items-center justify-between mt-8 mx-auto">
            <div className="w-3/4  flex flex-col items-center">
              <p className="lg:text-2xl 2xl:text-5xl text-lg">
                Whether you're a business owner looking to stream-lined
                operations or an individual eager to enhance your digital
                skills, Digital Hero is here to support your success. We
                specialize in unlocking the full digital potential for both
                businesses and individuals in Indonesia. We’re very excited to
                witness the impact you’re going to make. Experience your own
                digital transformation, from ZERO to HERO, with Digital Hero:
                Let’s Digitalize The Future!
              </p>
              <button className="bg-gradient mx-auto w-1/2 2xl:py-8 py-4 2xl:text-[44px] text-3xl  mt-12 font-semibold rounded-xl">
                Join Now
              </button>
            </div>
            <div className="w-1/2 flex flex-col ">
              <img src="/assets/homepage/watch/phone.png" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
