const JourneyCard = ({ title, content, image }) => {
  return (
    <div className="py-8 px-6 flex flex-col bg-why-gradient border-2 relative border-[#2961CD] rounded-md">
      <div>
        <h4 className="2xl:text-5xl xl:text-4xl font-bold text-[#2961CD] text-gradient text-center  lg:text-start">
          {title}
        </h4>
      </div>
      <div className="flex gap-8 items-center">
        <p className="2xl:text-2xl  mt-8">{content}</p>
        <img src={`/assets/homepage/watch/${image}`} />
      </div>
      {/* <img
        src={`/assets/homepage/watch/${image}`}
        className="lg:hidden block"
      />
      <h4 className="xl:text-4xl lg:text-2xl text-xl font-bold text-[#2961CD] text-gradient text-center  lg:text-start">
        {title}
      </h4>
      <div className="flex gap-4 lg:flex-row flex-col-reverse">
        <p className="lg:w-3/4 w-full text-sm lg:text-xl text-center lg:text-start">
          {content}
        </p>
        <img
          src={`/assets/homepage/watch/${image}`}
          className="hidden lg:block"
        />
      </div> */}
    </div>
  );
};

export default JourneyCard;
