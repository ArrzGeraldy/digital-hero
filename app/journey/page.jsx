import { digitalDatas, teams } from "../data";
import DigitalMarketCard from "@/components/DigitalMarketCard";
import TeamCard from "@/components/TeamCard";
import { Check, Minus, Plus } from "lucide-react";

const page = () => {
  return (
    <main className="h-full bg-hero relative mx-auto w-[90%] pb-14">
      <section className="flex flex-col lg:flex-row w-full mt-8 lg:mt-0 items-center lg:justify-between justify-center min-h-screen">
        <div className="lg:w-1/2 w-full">
          <h4 className="lg:text-[50px] text-[40px] font-bold text-center lg:text-start ">
            The Heroes Journey:{" "}
            <span className="text-gradient">A Path to Digital Mastery</span>
          </h4>
          <div className="hidden lg:block">
            <p className="mt-8 text-xl font-semibold text-gray-300 text-center lg:text-start">
              <span className="text-gradient">Don’t walk this path alone!</span>{" "}
              We’ve summarized the experience of industry experts and turned it
              into a clear digitalization roadmap, helping you avoid the
              mistakes we have had. Start your journey with expert guidance
              along the way to fast-track your success.
            </p>
            <button className="px-6 py-4 rounded-md bg-gradient mt-12 text-xl font-semibold">
              Start My Journey
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src="/assets/journey/hero.png" />
          <div className="lg:hidden flex flex-col items-center ">
            <p className="mt-8 text-xl font-semibold text-gray-300 text-center lg:text-start">
              <span className="text-gradient">Don’t walk this path alone!</span>{" "}
              We’ve summarized the experience of industry experts and turned it
              into a clear digitalization roadmap, helping you avoid the
              mistakes we have had. Start your journey with expert guidance
              along the way to fast-track your success.
            </p>
            <button className="px-6 py-4 rounded-md bg-gradient mt-12 text-xl font-semibold">
              Start My Journey
            </button>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center ">
          What Will
          <span className="text-gradient">I Benefit from This Journey?</span>
        </h4>
        <p className="mt-8 text-xl font-semibold text-gray-300 w-3/4 mx-auto text-center">
          <span className="text-gradient">The Heroes Journey</span> equips
          individuals with essential skills and knowledge to excel in the
          digital era, offering expert-crafted guidance and best-practice
          methods to accelerate your progress.
        </p>

        <div className="mt-12">
          <div className="bg-why-gradient border-2 mt-6 flex flex-col lg:flex-row gap-4 px-4 py-6 border-[#2961CD] rounded-md">
            <div className="w-auto">
              <h4 className="text-[40px] bg-red-400 text-center lg:hidden text-gradient font-bold">
                2 Weeks Program
              </h4>
              <p className="text-xl font-bold text-center lg:hidden">
                Intensive Live Webinar Session
              </p>
              <img src="/assets/journey/program.png" />
            </div>

            <div className="lg:w-3/4 w-full">
              <h4 className="text-[50px] hidden lg:block text-gradient font-bold">
                2 Weeks Program
              </h4>
              <p className="text-xl font-bold hidden lg:block">
                Intensive Live Webinar Session
              </p>

              <div className="lg:w-[90%] w-full lg:text-xl">
                {" "}
                <p className="mt-8">
                  Discover your full potential in the digital era with The
                  <span className="text-gradient"> Heroes Journey.</span> This
                  live webinar takes you through a{" "}
                  <span className="text-gradient">step-by-step</span> roadmap to
                  <span className="text-gradient">
                    {" "}
                    mastering digitalization.
                  </span>{" "}
                  Gain insights and proven strategies from{" "}
                  <span className="text-gradient">Experts</span> in various
                  industries.
                </p>
                <p className="mt-8">
                  This roadmap aims to help{" "}
                  <span className="text-gradient">you succeed in today’s</span>{" "}
                  digital landscape.{" "}
                </p>
                <p className="mt-8">
                  “Ready to thrive in today’s competitive digital market?"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12  grid grid-cols-2 lg:grid-cols-3 gap-8">
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
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center ">
          {" "}
          This roadmap is designed to be{" "}
          <span className="text-gradient">
            practical, easy to implement, and actionable.
          </span>
        </h4>

        <p className="mt-16 w-3/4 mx-auto lg:text-2xl text-xl font-semibold text-gray-200 text-center">
          <span className="text-[#00C6FF]">
            The Heroes Journey: A Path to Digital Mastery
          </span>{" "}
          is created for business owners, professionals, and entrepreneurs eager
          to embrace digital transformation and unlock their full potential in
          the digital era.
        </p>
        <p className="mt-12 w-3/4 mx-auto text-2xl font-semibold text-gray-200 text-center hidden lg:block">
          This roadmap is perfect not only for those starting their digital
          journey but also for established businesses aiming to optimize and
          scale their operations through strategic digitalization.
        </p>
        <p className="mt-12 w-3/4 mx-auto text-2xl font-semibold text-gray-200 text-center hidden lg:block">
          If you're still uncertain whether this journey is the right step for
          you, click the button below to connect with our team for a
          consultation.
        </p>
        <div className="w-full flex justify-center">
          <button className="px-6 py-2.5 rounded-md bg-gradient mt-12 text-xl font-semibold">
            Consult With Out Team
          </button>
        </div>
      </section>

      <section className="mt-32">
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center">
          Learn from <span className="text-gradient">The Digital Heroes</span>,
          who are experts in the digital landscapes across diverse industries
        </h4>

        <div className="mt-32 grid lg:grid-cols-3 gap-8 w-[90%] mx-auto">
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
        <h4 className="lg:text-[50px] text-[40px] font-bold text-center">
          Choose Your Path:{" "}
          <span className="text-gradient lg:inline block">Be The Hero!</span>
        </h4>

        <div className="mt-16 grid lg:grid-cols-3 gap-4">
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
        <h4 className="lg:text-[50px] text-[40px] font-bold   text-gradient text-center">
          Ready to be a Digital Hero?
        </h4>

        <div className="px-4 pt-6 pb-16 flex flex-col mt-8  bg-why-gradient border-2 border-[#2961CD] rounded-md">
          <h4 className="lg:text-[50px] text-[40px] font-bold  text-gradient text-center">
            The Heroes Journey Batch 1
          </h4>
          <p className="lg:text-[30px] text-xl text-center w-[90%] mx-auto">
            {" "}
            Register now and Implement our Framework to Your Journey and Win
          </p>

          <div className="mt-12 flex flex-col lg:flex-row  items-start w-[90%]  lg:w-auto mx-auto gap-4 ">
            <div className="rounded-full text-sm  px-6 py-2.5 lg:text-xl bg-[#3853A4]">
              Proven Best-practiced Frameworks{" "}
            </div>
            <div className="rounded-full text-sm  px-6 py-2.5 lg:text-xl bg-[#3853A4]">
              Brand Checkup Hands-on
            </div>
          </div>
          <div className="lg:mt-8 mt-4 flex flex-col lg:flex-row  items-start w-[90%]  lg:w-auto mx-auto gap-4">
            <div className="rounded-full px-6 py-2.5 text-sm lg:text-xl bg-[#3853A4]">
              Experience 20+ Digital Marketing Templates
            </div>
            <div className="rounded-full text-sm  px-6 py-2.5 lg:text-xl bg-[#3853A4]">
              Exclusive Community
            </div>
          </div>

          <div className="mt-16 pb-12 grid gap-y-8 w-[90%] mx-auto border-b-2">
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="lg:text-[32px] text-lg ">
                10 Intensive Live Webinar Sessions
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="lg:text-[32px] text-lg">
                2 QnA Sessions with The Digital Heroes
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="lg:text-[32px] text-lg">
                Access to Exclusive Networking Events
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Check size={28} className="text-xs" />{" "}
              <span className="lg:text-[32px] text-lg">
                Lifetime Access to Exclusive Heroes Community
              </span>
            </div>
          </div>

          <div className="mt-8 lg:w-2/3 w-[80%] mx-auto flex justify-center">
            <div>
              <p className="line-through lg:text-xl">Rp 5.000.000</p>
              <div className="rounded-md px-10 py-4 lg:w-fit w-full bg-white text-black lg:text-6xl text-3xl font-semibold mt-2 relative">
                <p>Rp 2.499.000</p>
                <img
                  src="/assets/journey/discount.png"
                  className="absolute -top-1/4 -right-12 lg:w-auto w-1/4"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <button className="lg:w-[40%] px-4 lg:px-0 w-auto py-3 lg:py-4 rounded-md bg-gradient mt-16 lg:text-2xl text-lg font-semibold">
              Register Now
            </button>
          </div>
          <p className="text-center mt-6">
            Learn Now and Let’s Digitalize The Future!
          </p>
        </div>
      </section>

      <section className="mt-32 lg:w-2/3 mx-auto">
        <h4 className="lg:text-[50px] text-[40px] font-bold   text-gradient text-center">
          The Heroes Journey Agenda
        </h4>
        <p className="lg:text-2xl text-xl text-center font-semibold mt-4 mb-8">
          03 March - 14 March 2025
        </p>

        <div className="mt-16">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="w-full pb-8 border-b mt-8">
              <div className="flex justify-between">
                <div>
                  <p className="lg:text-2xl ">Monday, 03 March 2025</p>
                  <p className="text-gray-400 text-centerlg:text-lg text-sm mt-6">
                    18.30 - 20.30 WIB
                  </p>
                </div>
                <div>
                  <p className="lg:text-2xl  text-[#00C6FF]">
                    Digitalization Roadmap 01
                  </p>
                  <p className="text-center lg:text-3xl text-lg font-bold mt-6">
                    Tittle of Module
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32">
        <h4 className="lg:text-[50px] text-[40px] font-bold   text-gradient text-center">
          Frequently Asked Question
        </h4>
        <div className="mt-12 lg:grid flex flex-col-reverse grid-cols-2 items-center justify-center w-full gap-4">
          <div className="">
            {/* card 1 */}
            <div className="bg-color-black border-2 flex flex-col justify-start items-start px-4 py-3 border-[#2961CD] rounded-md">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg text-start text-gray-200 ">
                  What Is AI Business Growth?
                </p>

                <div className=" border text-lg px-2 py-2 rounded-full">
                  <Plus size={20} />
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className="bg-why-gradient border-2 mt-6 flex flex-col justify-start items-start px-4 py-6 border-[#2961CD] rounded-md">
              <div className="flex justify-between w-full">
                <div className="w-[75%]">
                  <p className="text-lg text-start text-gray-200 ">
                    How can your AI solutions benefit my business?
                  </p>
                  <p className="mt-4">
                    Our AI solutions can make help you optimize marketing
                    efforts, improve sales proccess, enhance customer
                    relationship.
                  </p>
                </div>

                <div className=" border text-lg px-2 py-2 rounded-full h-fit">
                  <Minus size={20} />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="bg-color-black border-2 mt-6 flex flex-col justify-start items-start px-4 py-3 border-[#2961CD] rounded-md">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg text-start text-gray-200 ">
                  What Is AI Business Growth?
                </p>

                <div className=" border text-lg px-2 py-2 rounded-full">
                  <Plus size={20} />
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="bg-color-black border-2 mt-6 flex flex-col justify-start items-start px-4 py-3 border-[#2961CD] rounded-md">
              <div className="flex items-center justify-between w-full">
                <p className="text-lg text-start text-gray-200 ">
                  What Is AI Business Growth?
                </p>

                <div className=" border text-lg px-2 py-2 rounded-full">
                  <Plus size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-self-end">
            <img src="/assets/journey/fre.png" className="w-3/4" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
