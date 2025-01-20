import {
  Facebook,
  Instagram,
  InstagramIcon,
  Linkedin,
  Mail,
  Music2,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-color-black relative z-10 pb-6 pt-10 mt-24 border-t border-gray-200">
      <div className="w-[90%] mx-auto flex  justify-between px-8">
        <div className="flex flex-col justify-start">
          <img src="/assets/nav/digital-title.png" className="w-[80%]" />
          <div className="ms-4 2xl:text-xl xl:text-base ">
            <p className="">Digital Hero is your partner</p>
            <p className="">in unlocking the full potential of your</p>
            <p className=""> business and career in the digital era.</p>
          </div>
        </div>
        <div>
          <h1 className="2xl:text-3xl xl:text-xl font-bold pt-3">
            Contact Info
          </h1>
          <div className="2xl:block hidden">
            <div className="flex gap-2 mt-4 2xl:text-2xl xl:text-base">
              <Mail size={28} />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mt-4 2xl:text-2xl xl:text-base">
              <Phone size={28} />
              <span>+62 819 5888 9510</span>
            </div>
          </div>
          <div className="2xl:hidden block">
            <div className="flex items-center gap-2 mt-4 2xl:text-2xl xl:text-base">
              <Mail size={20} />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mt-4 2xl:text-2xl xl:text-base">
              <Phone size={20} />
              <span>+62 819 5888 9510</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="2xl:text-3xl xl:text-xl font-bold pt-3">Explore</h1>
          <div className="flex flex-col 2xl:text-2xl xl:text-base">
            <Link href={"/"} className="mt-4">
              Home
            </Link>
            <Link href={"/journey"} className="mt-4">
              The Heroes Journey
            </Link>
            <Link href={"/career"} className="mt-4">
              Career
            </Link>
          </div>
        </div>
        <div>
          <h1 className="2xl:text-3xl xl:text-xl font-bold pt-3">Follow Us</h1>
          <div className="flex gap-4 2xl:hidden xl:text-lg mt-4">
            <Instagram size={24} />
            <Music2 size={24} />
            <Linkedin size={24} />
            <Facebook size={24} />
          </div>
          <div className="gap-4 2xl:flex hidden mt-4">
            <Instagram size={28} />
            <Music2 size={28} />
            <Linkedin size={28} />
            <Facebook size={28} />
          </div>
        </div>
      </div>
      <p className="text-center mt-8 py-4 hidden lg:block">
        Copy Right &copy; Digital Hero. Hak Cipta Dilindungi Undang Undang
      </p>
    </footer>
  );
};

export default Footer;
