import React from "react";

const DigitalMarketCard = ({ title, content, image }) => {
  return (
    <div className="gradient-border-wrapper-2">
      <div className="px-8 py-6 flex items-center justify-center h-full  flex-col bg-why-gradient  rounded-md">
        <img src={`/assets/journey/${image}`} className="2xl:px-16 xl:px-8" />
        <h4 className="text-lg 2xl:text-4xl xl:text-2xl text-center lg:text-start text-[#00C6FF] font-semibold mt-6">
          {title}
        </h4>
        <p className="2xl:text-2xl xl:text-xl mt-6 2xl:mt-8 text-sm text-slate-200 leading-loose">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketCard;
