import Link from "next/link";

const BtnGradient = ({
  text,
  className = "2xl:px-12 2xl:py-8 px-6 py-4",
  size = "2xl:text-3xl xl:text-2xl text-base",
  href = "#",
}) => {
  return (
    <div className="relative mx-auto w-fit ">
      <span className="bounce-btn absolute inline-flex top-0 left-0 h-full p-4 w-full rounded-lg bg-gradient opacity-75"></span>
      <Link
        href={href}
        className={`font-semibold text-center rounded-lg block relative bg-gradient mx-auto ${size} ${className}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default BtnGradient;
