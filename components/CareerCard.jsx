const CareerCard = ({ title, content, image }) => {
  return (
    <div
      data-aos="fade-up"
      className="xl:px-6 xl:py-6 2xl:px-8 p-4 flex flex-col   bg-why-gradient border-2  border-[#2961CD] rounded-md relative text-center lg:text-start lg:w-full w-[86%] mx-auto"
    >
      <div className="flex lg:justify-start justify-center  w-full lg:absolute 2xl:-top-[35%] xl:-top-[25%] items-center">
        <img src={`/assets/career/${image}`} className={`2xl:h-52 h-44`} />
      </div>
      <h4 className="2xl:text-4xl xl:text-3xl text-xl text-[#00C6FF] font-bold lg:mt-6 lg:pt-12 mt-4">
        {title}
      </h4>
      <p className="2xl:text-xl xl:text-lg text-sm 2xl:mt-8 xl:mt-6 mt-2 text-gray-300 pb-4">
        {content}
      </p>
    </div>
  );
};

export default CareerCard;
