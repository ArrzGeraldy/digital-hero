import React from "react";

const DigitalMarketCard = ({ title, content, image }) => {
  return (
    <div className="gradient-border-wrapper-2" data-aos="fade-up">
      <div className="px-8 py-6 flex flex-col items-center  h-full   bg-why-gradient  rounded-md">
        <img src={`/assets/journey/${image}`} className="h-48 2xl:h-56" />
        <h4 className="text-lg 2xl:text-3xl xl:text-xl text-center text-[#00C6FF] font-bold mt-6">
          {title}
        </h4>
        <p className="2xl:text-2xl xl:text-lg mt-6 2xl:mt-8 text-sm text-slate-200 leading-loose">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketCard;
