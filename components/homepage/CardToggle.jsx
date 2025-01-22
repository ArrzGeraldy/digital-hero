import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CardToggle = () => {
  const [openCards, setOpenCards] = useState([1]);

  const toggleCard = (index) => {
    setOpenCards((prevOpenCards) =>
      prevOpenCards.includes(index)
        ? prevOpenCards.filter((card) => card !== index)
        : [...prevOpenCards, index]
    );
  };

  return (
    <div className="">
      {/* Card 1 */}
      <div
        className="gradient-border-wrapper-2 mb-8 cursor-pointer"
        onClick={() => toggleCard(1)}
      >
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center gap-4">
            <h4
              className={`xl:text-xl text-[15px] leading-relaxed 2xl:text-3xl font-semibold text-start ${
                openCards.includes(1) && "text-[#00C6FF]"
              }`}
            >
              Training and Skill Development
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg lg:p-2 p-1 rounded-full bg-color-black cursor-pointer`}
              // onClick={() => toggleCard(1)}
            >
              {openCards.includes(1) ? (
                <div>
                  <Minus size={20} className="lg:block hidden" />
                  <Minus size={16} className="block lg:hidden" />
                </div>
              ) : (
                <div className=" ">
                  <Plus size={20} className="lg:block hidden" />
                  <Plus size={16} className="block lg:hidden" />
                </div>
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{
              maxHeight: openCards.includes(1) ? "300px" : "0px",
              opacity: openCards.includes(1) ? 1 : 0,
            }}
          >
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%] text-xs">
              We are open to partner with institutions to offer training
              programs, workshops, or digital skill courses for employees,
              students, or members. This could include programs on digital
              marketing, coding, project management, and other relevant digital
              skills.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="gradient-border-wrapper-2 mb-8 cursor-pointer"
        onClick={() => toggleCard(2)}
      >
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center gap-4">
            <h4
              className={`xl:text-xl text-[15px] leading-relaxed 2xl:text-3xl font-semibold text-start ${
                openCards.includes(2) && "text-[#00C6FF]"
              }`}
            >
              Consultation and Digital Strategy Development
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg lg:p-2 p-1 rounded-full bg-color-black cursor-pointer`}
            >
              {openCards.includes(2) ? (
                <div>
                  <Minus size={20} className="lg:block hidden" />
                  <Minus size={16} className="block lg:hidden" />
                </div>
              ) : (
                <div className=" ">
                  <Plus size={20} className="lg:block hidden" />
                  <Plus size={16} className="block lg:hidden" />
                </div>
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{
              maxHeight: openCards.includes(2) ? "300px" : "0px",
              opacity: openCards.includes(2) ? 1 : 0,
            }}
          >
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%] text-xs">
              Get guidance and consultation on developing digital strategies to
              achieve your business goals and leverage technology effectively.
            </p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div
        className="gradient-border-wrapper-2 mb-8 cursor-pointer"
        onClick={() => toggleCard(3)}
      >
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center gap-4">
            <h4
              className={`xl:text-xl text-[15px] leading-relaxed 2xl:text-3xl font-semibold text-start ${
                openCards.includes(3) && "text-[#00C6FF]"
              }`}
            >
              Technology Integration and System Development
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg lg:p-2 p-1 rounded-full bg-color-black cursor-pointer`}
            >
              {openCards.includes(3) ? (
                <div>
                  <Minus size={20} className="lg:block hidden" />
                  <Minus size={16} className="block lg:hidden" />
                </div>
              ) : (
                <div className=" ">
                  <Plus size={20} className="lg:block hidden" />
                  <Plus size={16} className="block lg:hidden" />
                </div>
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{
              maxHeight: openCards.includes(3) ? "300px" : "0px",
              opacity: openCards.includes(3) ? 1 : 0,
            }}
          >
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%] text-xs">
              Get guidance and consultation on developing digital strategies to
              achieve your business goals and leverage technology effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardToggle;
