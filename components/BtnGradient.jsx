import React from "react";

const BtnGradient = ({ text }) => {
  return (
    <button className="bg-gradient mx-auto 2xl:px-8 2xl:py-6 px-5 py-4 2xl:text-2xl xl:text-xl  font-semibold rounded-lg bounce-btn">
      {text}
    </button>
  );
};

export default BtnGradient;
