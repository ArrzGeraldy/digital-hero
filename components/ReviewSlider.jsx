"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";

const ReviewSlider = () => {
  const spliteOption = {
    pagination: false,
    isOverflow: false,
    type: "loop",
  };

  return (
    <div className="overflow-x-hidden">
      <Splide options={spliteOption}>
        {[...Array(2)].map((_, i) => (
          <SplideSlide key={i}>
            <div className="flex gap-4 items-center justify-center pt-20">
              {/* card 1 */}
              <div className="relative flex">
                <img
                  src="/assets/homepage/from-zero/card-1.png"
                  className="2xl:h-[600px]"
                />
                <div className="absolute flex flex-col w-full justify-center items-center">
                  <img
                    src="/assets/homepage/from-zero/sarah.png"
                    className="2xl:h-32"
                  />
                  <h4 className="2xl:text-2xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                    Sarah
                  </h4>
                  <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                    Pemilik Toko
                  </p>
                  <img
                    src="/assets/homepage/from-zero/quote.png"
                    className="2xl:h-auto xl:h-6"
                  />
                  <p className="text-gray-300 2xl:text-lg xl:text-xs 2xl:mt-2 w-[60%] text-center mx-auto ">
                    {" "}
                    Dulu saya gagap teknologi, sekarang bisnis saya online dan
                    mendunia. Digital Hero adalah game-changer!
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className="relative flex">
                <img
                  src="/assets/homepage/from-zero/card-2.png"
                  className="2xl:h-[600px]"
                />
                <div className="absolute -top-20 flex flex-col w-full justify-center items-center">
                  <img
                    src="/assets/homepage/from-zero/rizky.png"
                    className="2xl:h-40 xl:h-32"
                  />
                  <h4 className="2xl:text-4xl xl:text-2xl font-bold 2xl:mt-4 xl:mt-1">
                    Rizky
                  </h4>
                  <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2">
                    Pemilik Studio Sewa
                  </p>
                  <img
                    src="/assets/homepage/from-zero/quote.png"
                    className="2xl:h-14 xl:h-8"
                  />
                  <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
                    {" "}
                    Dulu saya gagap teknologi, sekarang bisnis saya online dan
                    mendunia. Digital Hero adalah game-changer!
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className="relative flex">
                <img
                  src="/assets/homepage/from-zero/card-3.png"
                  className="2xl:h-[600px]"
                />
                <div className="absolute -left-4 flex flex-col w-full justify-center items-center">
                  <img
                    src="/assets/homepage/from-zero/andi.png"
                    className="2xl:h-32"
                  />
                  <h4 className="2xl:text-2xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                    Andi
                  </h4>
                  <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                    Pemilik Toko
                  </p>
                  <img
                    src="/assets/homepage/from-zero/quote.png"
                    className="2xl:h-auto xl:h-6"
                  />
                  <p className="text-gray-300 2xl:text-lg xl:text-xs 2xl:mt-2 w-[60%] text-center mx-auto ">
                    {" "}
                    Dulu saya gagap teknologi, sekarang bisnis saya online dan
                    mendunia. Digital Hero adalah game-changer!
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ReviewSlider;
