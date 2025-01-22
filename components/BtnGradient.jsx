import React from "react";

const BtnGradient = ({ text, className = "" }) => {
  return (
    <div className="relative mx-auto w-fit ">
      <span className="bounce-btn absolute inline-flex h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
      <button
        className={`bg-gradient mx-auto 2xl:px-12 2xl:py-8 px-6 py-4 2xl:text-3xl xl:text-2xl text-base  font-semibold rounded-lg relative ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default BtnGradient;
