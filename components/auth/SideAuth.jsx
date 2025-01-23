import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "../Stars";

const SideAuth = ({ children }) => {
  return (
    <div className="relative  flex flex-col lg:flex-row items-center lg:justify-center bg-auth">
      <Link
        href={"/"}
        className="lg:absolute lg:top-5 lg:left-7 z-10 mt-6 lg:mt-0"
      >
        <Image
          src={"/assets/nav/digital-title.png"}
          width={200}
          height={200}
          alt="..."
        />
      </Link>
      <div className="lg:hidden flex flex-col items-center">
        <p className="text-gray-300 w-1/2 text-center">Welcome!</p>
        <p className="text-gray-300 w-3/4 text-center">
          Take the first step now and transform the future through digital
          innovation.
        </p>
      </div>
      <Stars />
      {children}
    </div>
  );
};

export default SideAuth;
