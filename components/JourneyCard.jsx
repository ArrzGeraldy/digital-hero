const JourneyCard = ({ title, content, image }) => {
  return (
    <div className="gradient-border-wrapper-2 " data-aos="fade-up">
      <div className="py-8 px-6 flex flex-col bg-why-gradient  relative border-[#2961CD] rounded-md h-full">
        <div>
          <h4 className="2xl:text-[44px] xl:text-2xl font-bold text-[#2961CD] text-gradient text-center  lg:text-start">
            {title}
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-8  mt-6">
          <p className="2xl:text-2xl text-lg col-span-2 leading-relaxed">
            {content}
          </p>
          <img
            src={`/assets/homepage/watch/${image}`}
            className={`${image == "img-3.png" && "mt-4"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
