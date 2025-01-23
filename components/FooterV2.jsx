"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";

const FooterV2 = () => {
  const [openCards, setOpenCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = (index) => {
    setOpenCards((prevOpenCards) =>
      prevOpenCards.includes(index)
        ? prevOpenCards.filter((card) => card !== index)
        : [...prevOpenCards, index]
    );
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Tailwind's lg = 1024px
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <footer className=" bg-color-black relative h-[744px] mt-24 lg:pt-[120px] pt-8 pb-[30px]">
      <div className="mx-auto max-h-full 2xl:max-w-[calc(1150px+10vw)] xl:w-10/12 px-[5vw] ">
        <div className="flex lg:flex-row flex-col gap-y-4 justify-between items-start">
          <img src="/assets/nav/digital-title.png" className="h-12 lg:h-auto" />
          {/* Section 1 */}
          <div className="w-full lg:w-auto">
            <h4
              onClick={() => isMobile && toggle(1)} // Only toggle on mobile
              className="font-bold lg:border-b-0 lg:pb-0 pb-3 border-b w-full lg:block flex items-center gap-2 lg:cursor-auto cursor-pointer"
            >
              <span>Layanan</span>
              {isMobile && (
                <span className="lg:hidden block">
                  {openCards.includes(1) ? (
                    <ChevronRight size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              )}
            </h4>
            <div
              className={`flex flex-col text-sm gap-y-2 overflow-hidden transition-all duration-300 ${
                openCards.includes(1) || !isMobile
                  ? "mt-5 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>Point of Sale</p>
              <p>Payment</p>
              <p>Manajemen Stok</p>
              <p>Manajemen Meja</p>
              <p>Manajemen Karyawan</p>
              <p>Capital</p>
            </div>
          </div>
          {/* Section 2 */}
          <div className="w-full lg:w-auto">
            <h4
              onClick={() => isMobile && toggle(2)}
              className="font-bold lg:border-b-0 lg:pb-0 pb-3 border-b w-full lg:block flex items-center gap-2 lg:cursor-auto cursor-pointer"
            >
              <span>Solusi Bisnis</span>
              {isMobile && (
                <span className="lg:hidden block">
                  {openCards.includes(2) ? (
                    <ChevronRight size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              )}
            </h4>
            <div
              className={`flex flex-col text-sm gap-y-2 overflow-hidden transition-all duration-300 ${
                openCards.includes(2) || !isMobile
                  ? "mt-5 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>Kedai Kopi</p>
              <p>Restoran</p>
              <p>Restoran Saji</p>
              <p>Retail</p>
              <p>Barbershop & Salon</p>
              <div className="flex flex-col text-base font-bold mt-1 gap-y-4">
                <p>Hardware</p>
                <p>Harga</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
          {/* Section 3 */}
          <div className="w-full lg:w-auto">
            <h4
              onClick={() => isMobile && toggle(3)}
              className="font-bold lg:border-b-0 lg:pb-0 pb-3 border-b w-full lg:block flex items-center gap-2 lg:cursor-auto cursor-pointer"
            >
              <span>Company</span>
              {isMobile && (
                <span className="lg:hidden block">
                  {openCards.includes(3) ? (
                    <ChevronRight size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              )}
            </h4>
            <div
              className={`flex flex-col text-sm gap-y-2 overflow-hidden transition-all duration-300 ${
                openCards.includes(3) || !isMobile
                  ? "mt-5 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p>Informasi Perusahaan</p>
              <p>Support</p>
              <p>Karir</p>
              <p>Hubungi Kami</p>
              <img src="/assets/homepage/goggle_play.png" className="w-36 " />
              <img src="/assets/homepage/ios.png" className="w-36 " />
            </div>
          </div>
        </div>
        <div className="lg:mt-[81px] pt-[48px] relative flex lg:flex-row flex-col-reverse justify-between lg:border-t gap-y-4 border-white items-center">
          <div className="flex text-sm gap-4 flex-wrap justify-center mt-4 lg:mt-0 lg:flex-nowrap">
            <Link href={"/"}>Kebijakan Privasi</Link>
            <Link href={"/"}>Syarat Ketentuan</Link>
            <Link href={"/"}>Pengaturan Cookie</Link>
          </div>
          <div className="flex gap-4 items-center">
            <SiFacebook size={28} />
            <div className="px-1.5 py-1.5 rounded-full bg-white">
              <SiInstagram size={20} className="text-black" />
            </div>
            <div className="px-1.5 py-1.5 rounded-full bg-white">
              <SiTiktok size={20} className="text-black" />
            </div>
            <div className="px-1.5 py-1.5 rounded-full bg-white">
              <SiLinkedin size={20} className="text-black" />
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm text-center lg:text-start">
          Copy Right &copy; Digital Hero. Hak Cipta Dilindungi Undang Undang
        </div>
      </div>
    </footer>
  );
};

export default FooterV2;
