import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "../Stars";
import { ArrowLeft, ChevronLeft } from "lucide-react";

const SideAuth = ({ children }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:justify-center bg-auth min-h-screen">
      <div className="lg:absolute lg:top-5 lg:left-7 z-10 mt-6 lg:mt-0 relative text-white grid grid-cols-12 items-center justify-center w-full">
        {/* Back Button (di kiri) */}
        <Link href={"/"} className="col-span-3 ms-4 lg:ms-0 lg:col-span-1">
          <ArrowLeft size={24} />
        </Link>

        {/* Centered Image */}
        <Link href={"/"} className="col-span-9 lg:col-span-11">
          <Image
            src={"/assets/nav/digital-title.png"}
            width={200}
            height={200}
            alt="..."
          />
        </Link>
      </div>
      <Stars />
      {children}
    </div>
  );
};

export default SideAuth;
