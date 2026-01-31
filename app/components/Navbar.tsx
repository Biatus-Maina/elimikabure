"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`}
      />
      <header className="sticky left-0 top-0 w-full flex items-center h-20 border-b border-b-gray-100 z-40 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="text-xl font-semibold flex items-center gap-x-3"
              >
                <Image
                  src="/web-app-manifest-192x192.png"
                  alt="elimikabure logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xl text-blue-600 font-bold leading-tight">
                    elimikabure
                  </span>
                  <span className="text-xs text-gray-500 leading-tight">
                    Free Education
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
          <div
            className={`
            absolute top-full left-0 bg-white border-b border-gray-200 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear
            ${navIsOpened ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 lg:w-full lg:justify-center">
              <li>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/"
                    className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600"
                  >
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/scholarships"
                    className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600"
                  >
                    Scholarships
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/courses"
                    className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600"
                  >
                    Courses
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/materials"
                    className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600"
                  >
                    Materials
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/about"
                    className="relative py-2.5 duration-300 ease-linear hover:text-blue-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-blue-600"
                  >
                    About
                  </Link>
                </motion.div>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contribute"
                  className="px-6 items-center h-12 rounded-3xl text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 duration-300 ease-linear flex justify-center w-full sm:w-auto"
                >
                  Contribute
                </Link>
              </motion.div>
            </div>
          </div>
          <div aria-hidden="true" className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-gray-200 pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
                flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
                ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
              `}
              />
              <span
                aria-hidden={true}
                className={`
                mt-2 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
                ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
                `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
