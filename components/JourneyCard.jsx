const JourneyCard = ({ title, content, image }) => {
  return (
    <div
      className="gradient-border-wrapper-2 lg:w-full w-[90%] mx-auto"
      data-aos="fade-up"
    >
      <div className="py-8 2xl:pb-24 px-6 grid lg:grid-cols-3 bg-why-gradient 2xl:gap-y-8 xl:gap-4 gap-4  relative border-[#2961CD] rounded-md h-full">
        <h4 className="2xl:text-[44px] mt-4 lg:mt-0 xl:text-2xl text-xl font-bold text-[#2961CD] text-gradient text-center  lg:text-start lg:col-span-3">
          {title}
        </h4>

        <p className="2xl:text-2xl xl:text-lg text-sm lg:col-span-2  h-full lg:text-start text-center leading-relaxed ">
          {content}
        </p>
        <div className=" h-44  lg:row-start-auto row-start-1">
          <img
            src={`/assets/homepage/watch/${image}`}
            className={`${
              image == "img-3.png" && "mt-4"
            }  h-44 lg:h-auto w-auto mx-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
