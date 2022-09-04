import React, { useEffect, useState } from "react";
import Transportation from "./Transportation";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ComplaintInfo from "./ComplaintInfo";
import { useNavigate } from "react-router-dom";
import CarouselPage from "./CarouselPage";
import Footer from "./Footer";
import logo from "../images/logo.jpg";
import userlogo from "../images/userlogo.jpg";
import cab from "../images/cab.jpg";
import auto from "../images/auto.jpg";
import busSchool from "../images/busSchool.png";
import Modal from "@mui/material/Modal";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${userlogo}`,
};
const navigation = [
  { name: "Home", href: "/homePage", current: false },
  
  { name: "Lodge Complaint", href: "/mainPage", current: false },
  { name: "Travel", href: "/travel", current: true },
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Travel = ({ showModal, setShowModal }) => {
  const [destination, setDestination] = useState(``);
  const [fName, setFname] = useState(``);
  const [name, setName] = useState("");
  const [transport, setTransport] = useState(``);
  const [vehicle, setVehicle] = useState("");
  const [mode,setMode] = useState(``);
  const navigate = useNavigate();
  const [clicked, setClicked] = React.useState(false);
  const postData = async (e) => {
    e.preventDefault();
    const data = await fetch("http://127.0.0.1:5000/travel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transport, destination }),
    });
    const getData = await data.json();
    if (getData.status != "Already Booked") {
      setFname(getData.fName);
      setTransport(getData.transport);
      setMode(getData.transport);
      setDestination(getData.destination);
    } else {
      setName(getData.fName);
      setVehicle(getData.transport);
      setMode(getData.transport);
      setShowModal(true);
    }
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      {showModal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Alert severity="success">
            {name}, Your {mode} has already been booked.Do you want to make
            changes to your ride???
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/travelEdit")}
            >
              YES
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => navigate("/homePage")}
            >
              NO
            </Button>
          </Alert>
        </Modal>
      )}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8" src={logo} alt="Workflow" />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                              style={{ backgroundColor: "white" }}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <div
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Profile
                              </div>
                            </Menu.Item>
                            <Menu.Item>
                              <div
                                className={classNames(
                                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                )}
                                onClick={async (e) => {
                                  console.log("CLicked");
                                  e.preventDefault();
                                  const data = await fetch(
                                    "http://127.0.0.1:5000/signOut",
                                    {
                                      method: "POST",
                                    }
                                  );
                                  const getData = await data.json();
                                  navigate("/");
                                }}
                              >
                                SignOut
                              </div>
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Your Blogging Page
            </h1>
          </div>
        </header> */}
        <main>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",

              justifyContent: "space-evenly",
              margin: "25px 0px",
            }}
          >
            <Transportation
              image={cab}
              transporter={`Cab`}
              transport={transport}
              setTransport={setTransport}
              clicked={clicked}
              setClicked={setClicked}
            />
            <Transportation
              image={auto}
              transport={transport}
              transporter={`Auto`}
              setTransport={setTransport}
              clicked={clicked}
              setClicked={setClicked}
            />
            <Transportation
              image={busSchool}
              transporter={`Bus`}
              transport={transport}
              setTransport={setTransport}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
          {transport != `` && (
            <div>
              <input
                style={{
                  display: "block",
                  border: "1px solid",
                  margin: " auto",
                }}
                type="text"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                placeholder="Enter your destination"
              />
              <button
                onClick={postData}
                style={{ marginTop: "30px" }}
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Submit
              </button>
            </div>
          )}
          {fName != `` && (
            <>
              <p>
                Miss/Mrs. {fName.toUpperCase()}, Your {transport} has been
                booked for {destination}.{" "}
              </p>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Travel;
