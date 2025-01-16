import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const CardToggle = () => {
  const [openCards, setOpenCards] = useState([1]); // Ubah dari satu nilai ke array

  const toggleCard = (index) => {
    setOpenCards(
      (prevOpenCards) =>
        prevOpenCards.includes(index)
          ? prevOpenCards.filter((card) => card !== index) // Tutup jika sudah ada
          : [...prevOpenCards, index] // Tambahkan jika belum ada
    );
  };

  return (
    <div className="2xl:w-1/2 w-[60%]">
      {/* Card 1 */}
      <div className="gradient-border-wrapper-2 mb-8">
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4
              className={`text-xl 2xl:text-3xl font-semibold text-start ${
                openCards.includes(1) && "text-[#00C6FF]"
              }`}
            >
              Training and Skill Development
            </h4>
            {/* button toggle */}
            <div
              className={`p-2 rounded-full cursor-pointer ${
                openCards.includes(1)
                  ? "bg-white text-black"
                  : "text-white bg-black"
              }`}
              onClick={() => toggleCard(1)}
            >
              {openCards.includes(1) ? (
                <div>
                  <ChevronDown size={28} className="2xl:block hidden" />
                  <ChevronDown
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
                </div>
              ) : (
                <div>
                  <ChevronRight size={28} className="2xl:block hidden" />
                  <ChevronRight
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
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
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
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
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4
              className={`text-xl 2xl:text-3xl font-semibold text-start ${
                openCards.includes(2) && "text-[#00C6FF]"
              }`}
            >
              Consultation and Digital Strategy Development
            </h4>
            {/* button toggle */}
            <div
              className={`p-2 rounded-full cursor-pointer ${
                openCards.includes(2)
                  ? "bg-white text-black"
                  : "text-white bg-black"
              }`}
              onClick={() => toggleCard(2)}
            >
              {openCards.includes(2) ? (
                <div>
                  <ChevronDown size={28} className="2xl:block hidden" />
                  <ChevronDown
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
                </div>
              ) : (
                <div>
                  <ChevronRight size={28} className="2xl:block hidden" />
                  <ChevronRight
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
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
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
              Get guidance and consultation on developing digital strategies to
              achieve your business goals and leverage technology effectively.
            </p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="gradient-border-wrapper-2 mb-8">
        <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4
              className={`text-xl 2xl:text-3xl font-semibold text-start ${
                openCards.includes(3) && "text-[#00C6FF]"
              }`}
            >
              Technology Integration and System Development
            </h4>
            {/* button toggle */}
            <div
              className={`p-2 rounded-full cursor-pointer ${
                openCards.includes(3)
                  ? "bg-white text-black"
                  : "text-white bg-black"
              }`}
              onClick={() => toggleCard(3)}
            >
              {openCards.includes(3) ? (
                <div>
                  <ChevronDown size={28} className="2xl:block hidden" />
                  <ChevronDown
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
                </div>
              ) : (
                <div>
                  <ChevronRight size={28} className="2xl:block hidden" />
                  <ChevronRight
                    size={26}
                    className="xl:block 2xl:hidden hidden"
                  />
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
            <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%]">
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
