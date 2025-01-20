"use client";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CardToggle = () => {
  const [openCards, setOpenCards] = useState([2]);

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
      <div className="gradient-border-wrapper-2 mb-8">
        <div
          className={`flex flex-col  p-4 rounded-lg ${
            openCards.includes(1) ? "bg-why-gradient" : "bg-color-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className={`text-lg 2xl:text-xl text-start `}>
              What Is AI Business Growth?
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg px-2 py-2 rounded-full bg-color-black cursor-pointer`}
              onClick={() => toggleCard(1)}
            >
              {openCards.includes(1) ? (
                <div>
                  <Minus size={20} />
                </div>
              ) : (
                <div>
                  <div className=" ">
                    <Plus size={20} />
                  </div>
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
            <p className="xl:text-lg 2xl:text-lg text-start font-normal mt-2 text-gray-200 w-[90%]">
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
      <div className="gradient-border-wrapper-2 mb-8">
        <div
          className={`flex flex-col  p-4 rounded-lg ${
            openCards.includes(2) ? "bg-why-gradient" : "bg-color-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className={`text-lg 2xl:text-xl text-start`}>
              How can your AI solutions benefit my business?
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg px-2 py-2 rounded-full bg-color-black cursor-pointer`}
              onClick={() => toggleCard(2)}
            >
              {openCards.includes(2) ? (
                <div>
                  <Minus size={20} />
                </div>
              ) : (
                <div>
                  <div className=" ">
                    <Plus size={20} />
                  </div>
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
            <p className="xl:text-lg text-start font-normal mt-2 text-gray-200 w-[90%]">
              We are open to partner with institutions to offer training
              programs, workshops, or digital skill courses for employees,
              students, or members. This could include programs on digital
              marketing, coding, project management, and other relevant digital
              skills.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="gradient-border-wrapper-2 mb-8">
        <div
          className={`flex flex-col  p-4 rounded-lg ${
            openCards.includes(3) ? "bg-why-gradient" : "bg-color-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className={`text-lg 2xl:text-xl text-start `}>
              What Is AI Business Growth?
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg px-2 py-2 rounded-full bg-color-black cursor-pointer`}
              onClick={() => toggleCard(3)}
            >
              {openCards.includes(3) ? (
                <div>
                  <Minus size={20} />
                </div>
              ) : (
                <div>
                  <div className=" ">
                    <Plus size={20} />
                  </div>
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
            <p className="xl:text-lg  text-start font-normal mt-2 text-gray-200 w-[90%]">
              We are open to partner with institutions to offer training
              programs, workshops, or digital skill courses for employees,
              students, or members. This could include programs on digital
              marketing, coding, project management, and other relevant digital
              skills.
            </p>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="gradient-border-wrapper-2 mb-8">
        <div
          className={`flex flex-col  p-4 rounded-lg ${
            openCards.includes(4) ? "bg-why-gradient" : "bg-color-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className={`text-lg 2xl:text-xl text-start`}>
              What Is AI Business Growth?
            </h4>
            {/* button toggle */}
            <div
              className={`border text-lg px-2 py-2 rounded-full bg-color-black cursor-pointer`}
              onClick={() => toggleCard(4)}
            >
              {openCards.includes(4) ? (
                <div>
                  <Minus size={20} />
                </div>
              ) : (
                <div>
                  <div className=" ">
                    <Plus size={20} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
            style={{
              maxHeight: openCards.includes(4) ? "300px" : "0px",
              opacity: openCards.includes(4) ? 1 : 0,
            }}
          >
            <p className="xl:text-lg 2xl:text-lg text-start font-normal mt-2 text-gray-200 w-[90%]">
              We are open to partner with institutions to offer training
              programs, workshops, or digital skill courses for employees,
              students, or members. This could include programs on digital
              marketing, coding, project management, and other relevant digital
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardToggle;
