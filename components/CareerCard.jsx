const CareerCard = ({ title, content, image }) => {
  return (
    <div className="xl:px-6 xl:py-6 2xl:px-8 flex flex-col   bg-why-gradient border-2  border-[#2961CD] rounded-md relative text-center lg:text-start">
      <div className="flex  w-full lg:absolute 2xl:-top-[35%] xl:-top-[25%] items-center">
        <img src={`/assets/career/${image}`} className={`2xl:h-52 xl:h-44`} />
      </div>
      <h4 className="2xl:text-4xl xl:text-3xl text-[#00C6FF] font-bold mt-6 pt-12">
        {title}
      </h4>
      <p className="2xl:text-xl xl:text-lg 2xl:mt-8 xl:mt-6 text-gray-300 pb-4">
        {content}
      </p>
    </div>
  );
};

export default CareerCard;
