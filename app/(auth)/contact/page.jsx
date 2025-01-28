"use client";
import SideAuth from "@/components/auth/SideAuth";
import Link from "next/link";
import { useState } from "react";
const Contact = () => {
  const [isSlidUp, setIsSlidUp] = useState(false);

  const handleTouchStart = (e) => {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) {
      return;
    }
    const touchStartY = e.touches[0].clientY;
    e.currentTarget.dataset.touchStartY = touchStartY;
  };

  const handleTouchMove = (e) => {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) {
      return;
    }
    const touchStartY = parseFloat(e.currentTarget.dataset.touchStartY);
    const currentTouchY = e.touches[0].clientY;
    const translateY = Math.max(0, currentTouchY - touchStartY);
  };

  const handleTouchEnd = (e) => {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(e.target.tagName)) {
      return;
    }
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
        {/* <img src="/assets/auth/sign-up.png" className="w-3/4 mt-16 lg:mt-0" /> */}
      </SideAuth>
      <div
        className={`bg-white flex flex-col items-center justify-center lg:relative absolute bottom-0 lg:bottom-auto w-full lg:pt-12 py-6 pb-12 rounded-t-[48px] lg:rounded-none transition-transform duration-300 ${
          isSlidUp ? "translate-y-0" : "translate-y-1/3 lg:translate-y-0"
        } `}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <span className="w-8 h-1 rounded-full bg-black/65 block lg:hidden"></span>
        <h4 className="text-center 2xl:text-4xl xl:text-[26px] mt-5 lg:mt-0  font-semibold">
          Contact
        </h4>
        <form className="lg:w-3/5 w-10/12 mt-4 text-[#344054] text-xs ">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Organization Name</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="text"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Organization Name"
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
            <label htmlFor="phone">Phone Number</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="number"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="Collaboration Type">Collaboration Type </label>
            <div className="gradient-border-wrapper-2 p-2">
              <select
                name=""
                id="Collaboration Type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Collaboration Type</option>
                <option value="Training & Skill Development">
                  Training & Skill Development
                </option>
                <option value="Consultation and Digital Strategy Development">
                  Consultation and Digital Strategy Development
                </option>
                <option value="Technology Integration and System Development">
                  Technology Integration and System Development
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-2 mt-6 font-semibold rounded-lg w-full py-3 text-white"
            >
              Let’s Collaborate
            </button>
          </div>
        </form>

        <Link
          href={"/#partner-with-us"}
          className="gradient-border-wrapper-2 p-1 lg:w-3/5 w-10/12 mt-6"
        >
          <div className="bg-white rounded-md w-full py-2 flex items-center justify-center gap-2">
            <p className="text-[#2961CD] font-semibold text-xs">Learn More</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
