const DigitalMarketCard = ({ title, content, image }) => {
  return (
    <div className="gradient-border-wrapper-2" data-aos="fade-up">
      <div className="lg:px-8 lg:py-8 2xl:py-10 p-4 flex flex-col items-center  h-full bg-why-gradient  rounded-md">
        <img
          src={`/assets/journey/${image}`}
          className="lg:h-48 2xl:h-56 h-[110px]"
        />
        <h4 className="2xl:text-4xl xl:text-2xl text-xl text-center text-gradient  font-bold mt-12">
          {title}
        </h4>
        <p className="2xl:text-2xl xl:text-lg text-sm text-center  text-slate-200 leading-loose">
          {content}
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketCard;
