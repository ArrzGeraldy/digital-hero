"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";
import "@splidejs/splide/css/sea-green";

// or only core styles
import "@splidejs/splide/css/core";

const cards = [
  [
    {
      img: "card-1.png",
      personImg: "/assets/homepage/from-zero/sarah.png",
      name: "Sarah",
      title: "Pemilik Toko",
      quote:
        "Dulu saya gagap teknologi, sekarang bisnis saya online dan mendunia. Digital Hero adalah game-changer!",
    },
    {
      img: "card-2.png",
      personImg: "/assets/homepage/from-zero/rizky.png",
      name: "Rizky",
      title: "Pemilik Studio Sewa",
      quote:
        "Digital Hero membantu saya mempermudah semua proses bisnis saya. Sangat luar biasa!",
    },
    {
      img: "card-3.png",
      personImg: "/assets/homepage/from-zero/andi.png",
      name: "Andi",
      title: "Pemilik Toko",
      quote:
        "Dengan Digital Hero, saya merasa bisnis saya menjadi lebih profesional dan modern.",
    },
  ],
  [
    {
      img: "card-1.png",
      personImg: "/assets/homepage/from-zero/andi.png",
      name: "Rafi",
      title: "Pemilik Usaha Digital",
      quote:
        "Digital Hero mengubah cara saya melihat dunia digital. Saya sangat merekomendasikan.",
    },
    {
      img: "card-2.png",
      personImg: "/assets/homepage/from-zero/rizky.png",
      name: "Amelia",
      title: "Pemilik Restoran",
      quote:
        "Platform ini benar-benar membantu usaha kecil seperti saya untuk berkembang lebih besar.",
    },
    {
      img: "card-3.png",
      personImg: "/assets/homepage/from-zero/sarah.png",
      name: "Farhan",
      title: "Pemilik Workshop",
      quote:
        "Dengan Digital Hero, pengelolaan bisnis saya menjadi lebih mudah dan efektif.",
    },
  ],
];

const ReviewSlider = () => {
  const spliteOption = {
    pagination: false,
    isOverflow: false,
  };

  return (
    <div className="overflow-x-hidden">
      <Splide options={spliteOption}>
        <SplideSlide>
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
                <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                  Sarah
                </h4>
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                  Pemilik Toko
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-auto xl:h-6"
                />
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
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
                  className="2xl:h-44 xl:h-32"
                />
                <h4 className="2xl:text-5xl xl:text-2xl font-bold 2xl:mt-4 xl:mt-1">
                  Rizky
                </h4>
                <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2">
                  Pemilik Studio Sewa
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-14 xl:h-8"
                />
                <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2 w-[60%] text-center mx-auto ">
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
                <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                  Andi
                </h4>
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                  Pemilik Toko
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-auto xl:h-6"
                />
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
                  {" "}
                  Dulu saya gagap teknologi, sekarang bisnis saya online dan
                  mendunia. Digital Hero adalah game-changer!
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
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
                <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                  Sarah
                </h4>
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                  Pemilik Toko
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-auto xl:h-6"
                />
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
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
                  className="2xl:h-44 xl:h-32"
                />
                <h4 className="2xl:text-5xl xl:text-2xl font-bold 2xl:mt-4 xl:mt-1">
                  Rizky
                </h4>
                <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2">
                  Pemilik Studio Sewa
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-14 xl:h-8"
                />
                <p className="text-gray-300 2xl:text-2xl xl:text-base 2xl:mt-2 w-[60%] text-center mx-auto ">
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
                <h4 className="2xl:text-4xl xl:text-xl font-bold 2xl:mt-4 xl:mt-1">
                  Andi
                </h4>
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2">
                  Pemilik Toko
                </p>
                <img
                  src="/assets/homepage/from-zero/quote.png"
                  className="2xl:h-auto xl:h-6"
                />
                <p className="text-gray-300 2xl:text-xl xl:text-sm 2xl:mt-2 w-[60%] text-center mx-auto ">
                  {" "}
                  Dulu saya gagap teknologi, sekarang bisnis saya online dan
                  mendunia. Digital Hero adalah game-changer!
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ReviewSlider;
