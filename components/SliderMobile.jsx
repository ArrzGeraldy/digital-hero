"use client";
import { Splide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";
const SliderMobile = ({ children }) => {
  const spliteOption = {
    pagination: false,
    isOverflow: false,
    type: "loop",
  };

  return (
    <div className="overflow-x-hidden">
      <Splide options={spliteOption}>{children}</Splide>
    </div>
  );
};

export default SliderMobile;
