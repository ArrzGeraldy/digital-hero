"use client";

import BtnGradient from "@/components/BtnGradient";
import { journeyDatas, partnersData } from "../data";
import JourneyCard from "@/components/JourneyCard";
import ReviewSlider from "@/components/ReviewSlider";
import AnimatedCounter from "@/components/homepage/AnimatedCounter";
import CardToggle from "@/components/CardToggle";
import Hero from "@/components/homepage/Hero";
import SliderMobile from "@/components/SliderMobile";
import { SplideSlide } from "@splidejs/react-splide";

export default function Home() {
  return (
    <main className="h-full relative lg:w-full w-11/12 mx-auto  pb-14 ">
      <Hero />

      <section className="lg:mt-32 mt-8 lg:w-10/12 w-full mx-auto">
        <div data-aos="fade-up">
          <h4 className="2xl:text-6xl xl:text-6xl lg:text-5xl text-3xl font-bold text-center montserrat">
            From <span className="text-gradient">Zero to Hero</span>
          </h4>
          <p className="text-center mt-4 2xl:text-4xl xl:text-3xl text-xl  font-semibold text-gray-300">
            Choose Your Path: <span className="text-gradient">Be The Hero</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 justify-center lg:mt-24 mt-16 lg:gap-36 gap-24 items-end w-[93%] mx-auto">
          <div
            className="h-full flex flex-col justify-end"
            data-aos="fade-right"
          >
            <img src="/assets/homepage/from-zero/zero.png" />
            <h1 className="font-bold text-center 2xl:text-8xl mt-8 xl:text-6xl lg:text-4xl text-4xl">
              ZERO
            </h1>
          </div>
          <div
            className="relative border-4 rounded-lg border-[#2961CD] w-fit   white-shadow-box"
            data-aos="fade-left"
          >
            <img
              src="/assets/homepage/from-zero/hero.png"
              className="lg:p-12 p-6 "
            />
            <div className="rounded-t-2xl bg-[#1C55E0] font-bold text-center 2xl:text-8xl mt-8 xl:text-6xl lg:text-4xl text-4xl">
              HERO
            </div>
          </div>
        </div>
        <div className="mt-44 hidden lg:block" data-aos="fade-up">
          <ReviewSlider />
        </div>
        <div className="mt-6 lg:hidden block" data-aos="fade-up">
          <SliderMobile>
            {[...Array(2)].map((_, i) => (
              <SplideSlide key={i}>
                <div className="flex gap-4 w-full items-center justify-center pt-20">
                  {/* card 2 */}
                  <div className="relative flex">
                    <img
                      src="/assets/homepage/from-zero/card-2.png"
                      className="2xl:h-[600px]"
                    />
                    <div className="absolute -top-10 flex flex-col w-full justify-center items-center">
                      <img
                        src="/assets/homepage/from-zero/rizky.png"
                        className="2xl:h-40 xl:h-32 lg:h-32 h-20"
                      />
                      <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold 2xl:mt-4 xl:mt-1 mt-2">
                        Rizky
                      </h4>
                      <p className="text-gray-300 2xl:text-2xl xl:text-base text-sm 2xl:mt-2">
                        Pemilik Studio Sewa
                      </p>
                      <img
                        src="/assets/homepage/from-zero/quote.png"
                        className="2xl:h-14 xl:h-8 h-6"
                      />
                      <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto text-xs">
                        {" "}
                        Dulu saya gagap teknologi, sekarang bisnis saya online
                        dan mendunia. Digital Hero adalah game-changer!
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SliderMobile>
        </div>
      </section>

      <section className="lg:mt-44 mt-24 lg:w-10/12  mx-auto ">
        <h4
          data-aos="fade-up"
          className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center montserrat"
        >
          Why You Should NOT <span className="text-gradient">Choose Us?</span>
        </h4>

        <div
          className="lg:mt-24 mt-12 w-[80%] mx-auto lg:w-full"
          data-aos="fade-up"
        >
          {/* content-1 */}
          <div className="w-full relative">
            <div className=" lg:text-4xl text-xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 w-10 h-10 absolute lg:left-auto -left-5 ">
              1
            </div>
            <div className="2xl:ps-20 lg:lg:ps-12  ps-10 2xl:mx-10 lg:mx-7 pb-8 border-s-2 lg:border-b-2 border-dashed ">
              <div className="gradient-border-wrapper-2 lg:w-[60%] w-full">
                <div className="bg-why-gradient rounded-lg lg:px-8 lg:py-6 p-4">
                  <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold text-[#2961CD] text-gradient ">
                    Stay Comfortable
                  </h4>
                  <p className=" text-xs lg:text-base xl:text-base 2xl:text-2xl">
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
            <div className="lg:text-4xl text-xl  bg-gradient rounded-full flex items-center justify-center 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 w-10 h-10 absolute lg:left-auto lg:right-0 -left-5 top-8 ">
              2
            </div>
            <div className="2xl:pe-20 lg:pe-12 ps-10 2xl:mx-10 lg:mx-7 pb-8 lg:border-e-2 lg:border-b-2 lg:border-s-0 border-s-2 border-dashed  flex justify-end py-8">
              <div className="gradient-border-wrapper-2 lg:w-[60%] w-full ">
                <div className=" bg-why-gradient  rounded-lg lg:px-8 lg:py-6 p-4">
                  <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold text-[#2961CD] text-gradient ">
                    Result Aren’t For Everyone
                  </h4>
                  <p className=" text-xs lg:text-base xl:text-base 2xl:text-2xl">
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
            <div className="lg:text-4xl text-xl bg-gradient rounded-full flex items-center justify-center 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 w-10 h-10 absolute -left-5 top-8 lg:left-auto">
              3
            </div>
            <div className=" 2xl:ps-20 lg:ps-12 ps-10 2xl:mx-10 lg:mx-7 pb-8 border-s-2 lg:border-b-2 border-dashed py-8">
              <div className="gradient-border-wrapper-2 lg:w-[60%] w-full ">
                <div className="bg-why-gradient rounded-lg lg:px-8 lg:py-6 p-4">
                  <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold text-[#2961CD] text-gradient ">
                    Who Needs Experts?
                  </h4>
                  <p className=" text-xs lg:text-base xl:text-base 2xl:text-2xl">
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
            <div className="lg:text-4xl text-xl bg-gradient rounded-full flex items-center justify-center 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 w-10 h-10 absolute lg:left-auto lg:right-0 -left-5 top-8">
              4
            </div>
            <div className="2xl:pe-20  lg:pe-12 ps-10 2xl:mx-10 lg:mx-7 w-full pb-8 lg:border-e-2 lg:border-b-2 lg:border-s-0 border-s-2 border-dashed  flex justify-end py-8">
              <div className="gradient-border-wrapper-2 lg:w-[60%] w-full ">
                <div className="bg-why-gradient rounded-lg lg:px-8 lg:py-6 p-4">
                  <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold text-[#2961CD] text-gradient ">
                    Success Is Overrated
                  </h4>
                  <p className=" text-xs lg:text-base xl:text-base 2xl:text-2xl">
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
            <div className="lg:text-4xl text-xl bg-gradient rounded-full flex items-center justify-center 2xl:w-20 2xl:h-20 lg:w-14 lg:h-14 w-10 h-10 absolute lg:left-auto -left-5 top-8">
              5
            </div>
            <div className=" 2xl:ps-20 lg:ps-12 ps-10 2xl:mx-10 lg:mx-7 pb-8 border-s-2 h-[40px] border-dashed py-8">
              <div className="gradient-border-wrapper-2 lg:w-[60%] w-full ">
                <div className="bg-why-gradient rounded-lg lg:px-8 lg:py-6 p-4">
                  <h4 className="2xl:text-4xl xl:text-2xl text-base font-bold text-[#2961CD] text-gradient ">
                    No Need for Community
                  </h4>
                  <p className=" text-xs lg:text-base xl:text-base 2xl:text-2xl">
                    We’ve built a supportive network of ambitious learners who
                    inspire each other to grow. But if flying solo sounds more
                    appealing, we respect that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="lg:w-[85%] w-full mx-auto lg:mt-80 mt-44 relative"
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
            <h4 className="text-center lg:text-2xl xl:text-2xl 2xl:text-4xl text-sm  font-bold">
              Do you want to watch others succeed?{" "}
              <span className="text-gradient block">
                or you want to be the winner?
              </span>
            </h4>
            <div className=" lg:w-[60%] w-[90%] 2xl:mt-10 xl:mt-6  flex lg:gap-8 gap-4 justify-center font-semibold  ">
              <button className="gradient-border-wrapper lg:w-[40%] w-[42%] 2xl:text-2xl xl:text-xl text-xs font-semibold">
                <p className="2xl:py-6 xl:py-4 py-4  rounded-md px-4  bg-[#00052a] ">
                  Watch Others
                </p>
              </button>
              <div className="relative lg:w-[40%] w-[42%]  rounded-lg  font-semibold">
                <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
                <button className="bg-gradient 2xl:py-6 xl:py-4 py-4 w-full rounded-lg 2xl:text-2xl xl:text-xl text-xs relative font-semibold">
                  I'm The Winner!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-44 mt-24 lg:w-10/12 mx-auto" data-aos="fade-up">
        <h4 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-center font-bold montserrat">
          The Heroes Journey:{" "}
          <span className="text-gradient">A Path to Digital Mastery</span>
        </h4>
        <p className="text-gray-100 2xl:text-4xl xl:text-3xl lg:text-2xl text-base lg:mt-12 mt-8 w-[90%] mx-auto text-center lg:px-8">
          Don’t walk this path alone! We’ve summarized the experience of
          industry experts and turned it into a clear digitalization roadmap,
          helping you avoid the mistakes we have had. Start your journey with
          expert guidance along the way to fast-track your success.
        </p>
        <div className="w-full flex items-center lg:mt-16 mt-10">
          <BtnGradient text={"Start My Journey"} />
        </div>

        {/* card */}
        <div className="mt-24 grid lg:grid-cols-2 gap-8 mx-auto">
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

      <section className="lg:mt-44 mt-24 lg:w-10/12 mx-auto" data-aos="fade-up">
        <h4 className="2xl:text-6xl xl:text-4xl lg:text-4xl text-3xl font-bold text-center montserrat">
          Looking to Make an Impact?{" "}
          <span className="text-gradient block lg:inline">
            Partner with Us!
          </span>
          <div className="w-full">
            <p className="2xl:text-4xl lg:text-2xl xl:text-3xl text-base text-center text-gray-200 lg:w-3/4 lg:mt-12 mt-4 mx-auto font-normal">
              From Project Kickoff to Large-scale Enterprise Solutions, We’re
              here to help!
            </p>
          </div>
          <div className="w-full flex items-center lg:mt-12 mt-8">
            <BtnGradient text={"Let's Collabarate!"} />
          </div>
          <div
            data-aos="fade-up"
            className="mt-24 flex gap-8 items-center justify-center w-[93%] mx-auto flex-col-reverse lg:flex-row"
          >
            <CardToggle data={partnersData} dataOpen={1} />
            <div className="">
              <img src="/assets/homepage/watch/collabrate.png" className="" />
            </div>
          </div>
        </h4>
      </section>

      <section className="lg:mt-44 mt-24 lg:w-10/12 mx-auto" data-aos="fade-up">
        <h1 className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl font-bold text-center  montserrat">
          We Are <span className="text-gradient">Digitalizing The Future!</span>
        </h1>
        <p className="lg:w-3/4 w-[90%] mx-auto text-center lg:mt-12 mt-8 2xl:text-5xl lg:text-2xl xl:text-3xl text-base text-gray-200  font-normal">
          Empowering 10,000 digital heroes by building a powerful ecosystem that
          connects like-minded heroes to build a better tomorrow.
        </p>

        <div className="mt-12 flex items-center flex-col">
          <AnimatedCounter />
          <p className="2xl:text-4xl lg:text-2xl xl:text-3xl text-xl   font-normal mt-4">
            Heroes Were Born!
          </p>
          <div className="mt-6">
            <BtnGradient text={"Join Our Community"} />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="gradient-border-wrapper-2  mt-24 w-[83%] 2xl:w-3/4 mx-auto hidden lg:block"
        >
          <div className="bg-why-gradient flex items-center gap-4 justify-between  lg:px-12   rounded-md lg:py-10 py-6">
            <div className="w-[60%]">
              <h4 className="text-3xl  xl:text-4xl 2xl:text-5xl font-bold montserrat text-center lg:text-start">
                Be the Hero of Your{" "}
                <span className="text-gradient block">Digital Journey</span>
              </h4>
              <div className="lg:w-[100%]  flex flex-col  mt-4">
                <p className="xl:text-lg 2xl:text-xl text-sm ">
                  Whether you're a business owner or an individual seeking to
                  boost your digital skills, Digital Hero is here to help. We
                  unlock digital potential across Indonesia, empowering you to
                  transform from ZERO to HERO. Let’s digitalize the
                  future together!
                </p>

                <div className="mt-8 w-full grid relative">
                  <div className="mt-6 opacity-0">
                    <BtnGradient text={"Join Our Community"} />
                  </div>
                  <div className=" mx-auto flex absolute w-3/4">
                    <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
                    <button
                      className={`bg-gradient mx-auto 2xl:px-12 2xl:py-8 px-6 py-4 2xl:text-3xl xl:text-2xl text-base  font-semibold rounded-lg relative w-full`}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/assets/homepage/watch/phone.png"
              className="lg:w-[45%] "
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="gradient-border-wrapper-2  mt-24 w-[83%] 2xl:w-3/4 mx-auto lg:hidden block"
        >
          <div className="bg-why-gradient flex flex-col justify-start items-start px-4  rounded-md lg:py-12 py-6">
            <h4 className="2xl:text-5xl xl:text-4xl text-2xl text-center font-bold w-full montserrat">
              Be the Hero of Your{" "}
              <span className="text-gradient">Digital Journey</span>
            </h4>
            <div className="w-[95%] flex flex-col-reverse lg:flex-row lg:gap-16 items-center lg:justify-between lg:mt-8 mt-4 mx-auto">
              <div className="lg:w-[100%]  flex flex-col lg:items-center mt-4 lg:mt-0">
                <p className="xl:text-lg 2xl:text-2xl text-sm text-center lg:text-start">
                  Whether you're a business owner or an individual seeking to
                  boost your digital skills, Digital Hero is here to help. We
                  unlock digital potential across Indonesia, empowering you to
                  transform from ZERO to HERO. Let’s digitalize the
                  future together!
                </p>

                <div className="mt-8 w-full">
                  <div className="relative mx-auto lg:w-3/4 w-full flex">
                    <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
                    <button
                      className={`bg-gradient mx-auto 2xl:px-12 2xl:py-8 px-6 py-4 2xl:text-3xl xl:text-2xl text-base  font-semibold rounded-lg relative w-full `}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col ">
                <img
                  src="/assets/homepage/watch/phone.png"
                  className="lg:w-[90%] h-[170px] w-[160px] lg:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
