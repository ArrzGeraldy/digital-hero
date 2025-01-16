import React from "react";

const TeamCard = ({ image, name, position }) => {
  return (
    <div className="w-full mt-24 min-h-96 bg-white flex flex-col items-center ">
      <div className="w-[85%] h-64 bg-black mt-6 relative flex items-end justify-center">
        <img src={`/assets/journey/${image}`} className="w-3/4" />
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-2xl font-bold text-center">{name}</h4>
        <p className="text-center font-semibold text-lg">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
