import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const CardToggle = ({ data, dataOpen }) => {
  const [openCards, setOpenCards] = useState([dataOpen]);

  const toggleCard = (index) => {
    setOpenCards((prevOpenCards) =>
      prevOpenCards.includes(index)
        ? prevOpenCards.filter((card) => card !== index)
        : [...prevOpenCards, index]
    );
  };

  return (
    <div className="">
      {data.map((d, i) => (
        <div
          key={i}
          className="gradient-border-wrapper-2 mb-8 cursor-pointer"
          onClick={() => toggleCard(i + 1)}
        >
          <div className="bg-why-gradient flex flex-col 2xl:p-8 p-4 rounded-lg">
            <div className="flex justify-between items-center gap-4">
              <h4
                className={`xl:text-xl text-[15px] leading-relaxed 2xl:text-3xl font-semibold text-start ${
                  openCards.includes(i + 1) && "text-[#00C6FF]"
                }`}
              >
                {d.title}
              </h4>
              {/* button toggle */}
              <div
                className={`border text-lg lg:p-2 p-1 rounded-full bg-color-black cursor-pointer`}
                // onClick={() => toggleCard(1)}
              >
                {openCards.includes(i + 1) ? (
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
                maxHeight: openCards.includes(i + 1) ? "300px" : "0px",
                opacity: openCards.includes(i + 1) ? 1 : 0,
              }}
            >
              <p className="xl:text-lg 2xl:text-2xl text-start font-normal mt-2 text-gray-200 w-[90%] text-xs">
                {d.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardToggle;
