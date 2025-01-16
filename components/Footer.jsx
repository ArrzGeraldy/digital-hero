import {
  Facebook,
  Instagram,
  InstagramIcon,
  Linkedin,
  Mail,
  Music2,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-color-black relative z-10 py-6 border-t border-gray-200">
      <div className="w-[90%] mx-auto flex lg:flex-row flex-wrap justify-between lg:justify-start lg:items-start lg:gap-32 items-start gap-y-8 gap-x-8">
        <div className="lg:block flex flex-col items-center">
          <img src="/assets/nav/digital-title.png" className="-ms-4" />
          <div className="hidden lg:block">
            <p>Digital Hero is your partner in</p>
            <p className="mt-4">unlocking the full potential of your</p>
            <p className="mt-4"> business and career in the digital era.</p>
          </div>
          <p className="text-center lg:hidden">
            Digital Hero is your partner in unlocking the full potential of your
            business and career in the digital era.
          </p>
        </div>
        <div>
          <h4 className="lg:text-2xl text-xl font-bold mt-2">Contact Info</h4>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Mail size={20} className="text-sm" />{" "}
              <span> info@digialhero.id</span>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm lg:text-base">
              <Phone size={20} className="text-sm" />
              <span> {"(+62)"} 819 5888 9510</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="lg:text-2xl text-xl font-bold mt-2">Explore</h4>
          <div className="mt-4 text-sm">
            <p>Home</p>
            <p className="mt-4 text-sm">The Heroes Journey</p>
            <p className="mt-4 text-sm">Career</p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:block lg:w-auto items-center pb-4 lg:pb-0">
          <h4 className="lg:text-2xl text-xl font-bold mt-2">Follow Us</h4>
          <div className="mt-4 flex gap-4">
            <InstagramIcon size={20} />
            <Music2 size={20} />
            <Linkedin size={20} />
            <Facebook size={20} />
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
