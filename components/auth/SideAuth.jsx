import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stars from "../Stars";

const SideAuth = ({ children }) => {
  return (
    <div className="relative  flex items-center justify-center bg-auth">
      <Link href={"/"} className="absolute top-5 left-7 z-10">
        <Image
          src={"/assets/nav/digital-title.png"}
          width={200}
          height={200}
          alt="..."
        />
      </Link>
      <Stars />
      {children}
    </div>
  );
};

export default SideAuth;
