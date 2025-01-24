import SideAuth from "@/components/auth/SideAuth";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-2 text-color-black">
      <SideAuth>
        <img src="/assets/auth/sign-up.png" className="w-3/4 hidden lg:block" />
      </SideAuth>
      <div className="bg-white flex flex-col items-center justify-center lg:relative absolute bottom-0 lg:bottom-auto w-full pt-12 pb-12 rounded-t-[48px] lg:rounded-none">
        <h4 className="text-center 2xl:text-4xl xl:text-[26px]  font-semibold">
          Create an account
        </h4>
        <form
          action=""
          className="lg:w-3/5 w-10/12 mt-4 text-[#344054] text-xs "
        >
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-2 mt-6 font-semibold rounded-lg w-full py-3 text-white"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="gradient-border-wrapper-2 p-1 lg:w-3/5 w-10/12 mt-6">
          <div className="bg-white rounded-md w-full py-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <p className="text-[#2961CD] font-semibold text-xs">
              Continue with Google
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 mt-4 text-sm lg:text-base">
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
