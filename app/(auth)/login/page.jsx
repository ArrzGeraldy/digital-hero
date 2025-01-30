import SideAuth from "@/components/auth/SideAuth";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-screen  grid lg:grid-cols-2 text-color-black relative">
      <SideAuth>
        <img src="/assets/auth/login.png" className="w-3/4 mt-16 lg:mt-0" />
      </SideAuth>
      <div className="bg-white flex flex-col items-center justify-center lg:relative absolute w-full bottom-0 lg:bottom-auto rounded-t-[48px] lg:rounded-t-none py-8 lg:py-0">
        <h4 className="text-center 2xl:text-4xl xl:text-[26px] font-semibold">
          Login
        </h4>
        <form
          action=""
          className="lg:w-3/5 w-10/12 mt-4 text-[#344054] xl:text-sm 2xl:text-lg text-xs"
        >
          <div className="flex flex-col gap-2">
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
            <label htmlFor="email">Password</label>
            <div className="gradient-border-wrapper-2 p-2">
              <input
                type="password"
                className="w-full rounded-md px-4 py-3 focus:outline-none"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-2 mt-6 font-semibold rounded-lg w-full py-3 text-white"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-1 mt-4 xl:text-base 2xl:text-lg text-sm">
          <p className="text-[#98A2B3]">Don’t Have An Account ?</p>{" "}
          <Link href={"/sign-up"} className="text-[#2961CD]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
