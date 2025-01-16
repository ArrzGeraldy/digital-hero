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
      <div className="w-[93%] mx-auto flex  justify-between px-8">
        <div className="flex flex-col justify-start">
          <img src="/assets/nav/digital-title.png" className="" />
          <div className="ms-4 2xl:text-2xl xl:text-lg">
            <p className="mt-4">Digital Hero is your partner</p>
            <p className="mt-4">in unlocking the full potential of your</p>
            <p className="mt-4"> business and career in the digital era.</p>
          </div>
        </div>
        <div>
          <h1 className="2xl:text-4xl xl:text-2xl font-bold pt-6">
            Contact Info
          </h1>
          <div className="flex items-center gap-2 mt-8 2xl:text-2xl xl:text-lg">
            <Mail size={28} />
            <span>info@gmil.com</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Phone size={28} />
            <span>+62 819 5888 9510</span>
          </div>
        </div>
        <div>
          <h1 className="2xl:text-4xl xl:text-2xl font-bold pt-6">Explore</h1>
          <div className="flex flex-col 2xl:text-2xl xl:text-lg">
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
          <h1 className="2xl:text-4xl xl:text-2xl font-bold pt-6">Follow Us</h1>
          <div className="flex gap-4 2xl:text-2xl xl:text-lg mt-6">
            <Instagram size={32} />
            <Music2 size={32} />
            <Linkedin size={32} />
            <Facebook size={32} />
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
