"use client";

import Link from "next/link";
import { journeyDatas } from "./data";
import JourneyCard from "@/components/JourneyCard";
import ReviewSlider from "@/components/ReviewSlider";
import AnimatedCounter from "@/components/homepage/AnimatedCounter";
import CardToggle from "@/components/homepage/CardToggle";

export default function Home() {
  return (
    <main className="h-full relative mx-auto pb-14 w-[93%]">
      <section className="flex h-screen w-full items-center mt-8">
        <div className="w-[60%]">
          <h1 className="2xl:text-[80px] xl:text-5xl lg:text-4xl text-4xl text-center font-bold montserrat">
            Digitalizing <span className="text-gradient">The Future</span>
          </h1>
          <p className="2xl:text-4xl xl:text-2xl text-xl text-gray-300 w-3/4 mx-auto mt-8 text-center montserrat">
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
        <h4 className="2xl:text-6xl xl:text-6xl lg:text-5xl text-4xl font-bold text-center montserrat">
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
        <div className="mt-44">
          <ReviewSlider />
        </div>
      </section>

      <section className="mt-44">
        <h4 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-4xl font-bold text-center montserrat">
          Why You Should NOT <span className="text-gradient">Choose Us?</span>
        </h4>

        <div className="mt-24 ">
          {/* content-1 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute">
              1
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 border-b-2 border-dashed ">
              <div className="gradient-border-wrapper-2 w-[60%]">
                <div className="bg-why-gradient rounded-lg px-8 py-6">
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
          </div>
          {/* content-2 */}
          <div className="w-full relative flex">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute right-0 top-8">
              2
            </div>
            <div className="2xl:pe-20  pe-12 2xl:mx-12 mx-7 pb-8 border-e-2 border-b-2 border-dashed  flex justify-end py-8">
              <div className="gradient-border-wrapper-2 w-[60%] ">
                <div className=" bg-why-gradient  rounded-lg px-8 py-6">
                  <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                    Result Aren’t For Everyone
                  </h4>
                  <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                    Our modules are designed to give you hands-on experience,
                    not just theory. So if you prefer to stay in the “Just
                    Enough Knowledge” mindset, we don't think you’re a good fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* content-3 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute top-8">
              3
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 border-b-2 border-dashed py-8">
              <div className="gradient-border-wrapper-2 w-[60%] ">
                <div className="bg-why-gradient rounded-lg px-8 py-6">
                  <h4 className="2xl:text-5xl xl:text-4xl text-xl font-bold text-[#2961CD] text-gradient ">
                    Who Needs Experts?
                  </h4>
                  <p className="mt-4 text-sm lg:text-base xl:text-xl 2xl:text-3xl">
                    We’ve got industry experts to walk you through the proven
                    framework, giving you the fastest route to success. But,
                    hey, if figuring it out on your own sounds like more fun, we
                    understand
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* content-4 */}
          <div className="w-full relative flex">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute right-0 top-8">
              4
            </div>
            <div className="2xl:pe-20  pe-12 2xl:mx-12 mx-7 w-full pb-8 border-e-2 border-b-2 border-dashed  flex justify-end py-8">
              <div className="gradient-border-wrapper-2 w-[60%] ">
                <div className="bg-why-gradient rounded-lg px-8 py-6">
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
          </div>

          {/* content-5 */}
          <div className="w-full relative">
            <div className="2xl:text-6xl text-4xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-24 2xl:h-24 w-14 h-14 absolute top-8">
              5
            </div>
            <div className=" 2xl:ps-20 ps-12 2xl:mx-12 mx-7 pb-8 border-s-2 h-[40px] border-dashed py-8">
              <div className="gradient-border-wrapper-2 w-[60%] ">
                <div className="bg-why-gradient rounded-lg px-8 py-6">
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
        </div>

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

      <section className="mt-44">
        <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center montserrat">
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

      <section className="mt-44">
        <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center montserrat">
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
            <CardToggle />
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
        <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center text-gradient montserrat">
          We Are Digitalizing The Future!
        </h1>
        <p className="w-3/4 mx-auto text-center mt-12 2xl:text-5xl lg:text-2xl xl:text-4xl text-xl text-gray-200  font-normal">
          Empowering 10,000 digital heroes by building a powerful ecosystem that
          connects like-minded heroes to build a better tomorrow.
        </p>

        <div className="mt-12 flex items-center flex-col">
          <AnimatedCounter />
          <p className="2xl:text-4xl lg:text-2xl xl:text-3xl text-xl   font-normal mt-4">
            Heroes Were Born!
          </p>
          <button className="bg-gradient mx-auto w-fit py-4 mt-12 font-semibold rounded-lg 2xl:text-3xl 2xl:px-12 2xl:py-8 text-2xl px-8 py-6">
            Join Our Community
          </button>
        </div>
        <div className="gradient-border-wrapper-2  mt-24 w-[93%] mx-auto">
          <div className="bg-why-gradient  flex flex-col justify-start items-start px-4  rounded-md py-12">
            <h4 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl text-center font-bold w-full montserrat">
              Be the Hero of Your{" "}
              <span className="text-gradient">Digital Journey</span>
            </h4>
            <div className="w-[95%] flex flex-col-reverse lg:flex-row gap-8 items-center justify-between mt-8 mx-auto">
              <div className="w-3/4  flex flex-col items-center">
                <p className="lg:text-2xl 2xl:text-4xl text-lg">
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
        </div>
      </section>
    </main>
  );
}
