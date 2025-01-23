"use client";
import { AlignJustify, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  {
    text: "The Heroes Journey",
    href: "/journey",
  },
  {
    text: "Career",
    href: "/career",
  },
];

const Navbar = () => {
  const btnRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSideBar = () => {
    if (btnRef.current) {
      btnRef.current.classList.toggle("sidebar-show");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathname = usePathname();
  return (
    <nav
      className={`fixed top-0 w-full  px-5 py-3 flex z-10 justify-between items-center text-white transition-all duration-300  ${
        isScrolled
          ? "bg-color-black border-b border-gray-700"
          : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <img
          src={"/assets/nav/digital-title.png"}
          alt="..."
          className="lg:w-[90%] w-3/5"
        />
      </Link>
      <div
        ref={btnRef}
        className="w-3/4 h-screen border-s border-gray-600 bg-color-black lg:hidden fixed top-0 right-0 sidebar px-4"
      >
        <button onClick={handleSideBar} className="absolute right-4 top-4">
          <X size={28} />
        </button>
        <div className="gap-4 flex flex-col items-center lg:hidden mt-24">
          {links.map((link, i) => (
            <Link
              onClick={handleSideBar}
              key={i}
              href={link.href}
              className={`pb-2 w-full text-center border-b ${
                pathname == link.href && "text-[#00C6FF]"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 lg:hidden">
        <button>
          <User />
        </button>
        <button onClick={handleSideBar}>
          <AlignJustify />
        </button>
      </div>
      <div className="lg:flex gap-8 hidden">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={`pb-2 hover:border-b  transition-all duration-300 ${
              pathname == link.href
                ? "text-[#00C6FF] border-b hover:text-[#00C6FF] "
                : "nav-link"
            } `}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="lg:flex gap-4 hidden ">
        <Link href={"/login"} className="gradient-border-wrapper">
          <div className="rounded-md px-10 py-2 bg-color-black">Login</div>
        </Link>
        <Link href={"/sign-up"} className="rounded-md px-10 py-2 bg-color-blue">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
