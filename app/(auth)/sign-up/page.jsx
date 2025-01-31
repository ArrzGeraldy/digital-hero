"use client";
import SideAuth from "@/components/auth/SideAuth";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [isSlidUp, setIsSlidUp] = useState(false);

  const handleTouchStart = (e) => {
    if (
      ["INPUT", "SELECT", "TEXTAREA", "BUTTON", "A"].includes(e.target.tagName)
    ) {
      return;
    }
    if (e.target.id == "inpur-form") return;
    const touchStartY = e.touches[0].clientY;
    e.currentTarget.dataset.touchStartY = touchStartY;
  };

  const handleTouchMove = (e) => {
    if (
      ["INPUT", "SELECT", "TEXTAREA", "BUTTON", "A"].includes(e.target.tagName)
    ) {
      return;
    }
    if (e.target.id == "inpur-form") return;
    const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY);
    const currentTouchY = e.touches[0].clientY;
    const translateY = Math.max(0, currentTouchY - touchStartY);
  };

  const handleTouchEnd = (e) => {
    if (
      ["INPUT", "SELECT", "TEXTAREA", "BUTTON", "A"].includes(e.target.tagName)
    ) {
      return;
    }
    if (e.target.id == "inpur-form") return;
    const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY);
    const currentTouchY = e.changedTouches[0].clientY;

    if (touchStartY - currentTouchY > 50) {
      setIsSlidUp(true);
    } else {
      setIsSlidUp(false);
    }
  };

  return (
    <div className="w-full h-screen grid lg:grid-cols-2 text-color-black relative overflow-hidden lg:overflow-auto">
      <SideAuth>
        <img src="/assets/auth/sign-up.png" className="w-3/4 mt-16 lg:mt-0" />
      </SideAuth>
      <div
        className={`bg-white flex flex-col items-center justify-center lg:relative absolute bottom-0 lg:bottom-auto w-full lg:pt-10 py-6  rounded-t-[48px] lg:rounded-none transition-transform duration-300 z-20 ${
          isSlidUp ? "translate-y-0" : "translate-y-1/3 lg:translate-y-0"
        } `}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <span className="w-8 h-1 rounded-full bg-black/65 block lg:hidden"></span>
        <h4 className="text-center 2xl:text-4xl xl:text-[26px] mt-5 lg:mt-0  font-semibold">
          Create an account
        </h4>
        <form className="lg:w-3/5 w-10/12 mt-4 text-[#344054] xl:text-sm 2xl:text-lg text-xs ">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="text"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="email">Email</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="email"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="password">Password</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="password"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="confirm">Confirmation Password</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="password"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <label htmlFor="intro">Introduce Yourself</label>
            <div className="gradient-border-wrapper-2 p-2">
              <textarea
                name=""
                id="intro"
                placeholder="Max character 100"
                className="w-full rounded-md px-4 py-3 focus:outline-none block h-44"
              ></textarea>
              {/* <Text type="number" placeholder="Enter Your Phone Number" /> */}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-2 mt-6 font-semibold rounded-lg w-full py-3 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-1 mt-4 xl:text-base 2xl:text-lg text-sme">
          <p className="text-[#98A2B3]">Already Have An Account ?</p>{" "}
          <Link href={"/login"} className="text-[#2961CD]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
