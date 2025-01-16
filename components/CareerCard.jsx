const CareerCard = ({ title, content, image }) => {
  return (
    <div className="px-4 py-6 flex flex-col items-center lg:items-start  bg-why-gradient border-2  border-[#2961CD] rounded-md relative text-center lg:text-start">
      <img
        src={`/assets/journey/${image}`}
        className="lg:absolute -top-[30%] w-1/3 lg:w-auto"
      />
      <h4 className="lg:text-3xl text-2xl text-[#00C6FF] font-bold mt-6 pt-12">
        {title}
      </h4>
      <p className="lg:text-xl mt-6 text-gray-300 pb-4">{content}</p>
    </div>
  );
};

export default CareerCard;
