import React from "react";

const DigitalMarketCard = ({ title, content, image }) => {
  return (
    <div className="px-4 py-6 flex items-center  flex-col  bg-why-gradient border-2  border-[#2961CD] rounded-md">
      <img src={`/assets/journey/${image}`} className="w-1/2 lg:w-auto" />
      <h4 className="text-lg lg:text-2xl text-center lg:text-start text-[#00C6FF] font-semibold mt-6">
        {title}
      </h4>
      <p className="lg:text-xl mt-6 text-sm text-gray-300 pb-4">{content}</p>
    </div>
  );
};

export default DigitalMarketCard;
