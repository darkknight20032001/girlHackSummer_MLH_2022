import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import women_gif from "../images/women_gif.gif";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div
      className="relative "
      style={{ padding: "8px", backgroundColor: "white" }}
    >
      <div>
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-40">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* <polygon points="50,0 100,0 50,100 0,100" /> */}
          </svg>

          <main className="mx-auto mt-6 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span
                  className="block text-red-700 xl:inline"
                  style={{
                    fontFamily: "Vesper Libre ,serif",
                    fontSize: "68px",
                  }}
                >
                  PRIDE N POWER
                </span>
              </h1>
              <p
                className="mt-5 text-base text-black sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                style={{
                  fontFamily: "Permanent Marker, cursive",
                  fontSize: "35px",
                  marginLeft: "20px",
                  textDecoration: "underline",
                }}
              >
                Take pride in your power
              </p>
              <div
                className="mt-10 sm:flex sm:justify-center lg:justify-start"
                style={{ marginTop: "130px", marginLeft: "70px" }}
              >
                <div
                  className="cursor-pointer  rounded-md"
                  onClick={() => {
                    navigate("/loginPage");
                  }}
                >
                  <div
                    href="#"
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Login
                  </div>
                </div>
                <div
                  className="cursor-pointer sm:ml-5"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  <div
                    href="#"
                    className=" flex w-full items-center justify-center rounded-md border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-pink-600 md:py-4 md:px-10 md:text-lg"
                  >
                    Register
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 "
        style={{ margin: "80px 10px" }}
      >
        <img
          className=" object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={women_gif}
          alt=""
          style={{
            borderRadius: "20px",
            height: "450px",
            border: "4px solid red",
          }}
        />
      </div>
    </div>
  );
}
