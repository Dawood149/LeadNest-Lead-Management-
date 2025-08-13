import React from "react";
import logo from "../../assets/LeadNest-Logo.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HomeNavbar = () => {
  return (
    <>
      <nav>
        <div className="relative w-full h-20 flex gap-20 p-5">
          <div className="w-40 h-100">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>

          <div className="pt-2">
            <ul className="inline-flex gap-20 list-none text-xl">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">About Us</NavLink>
              <NavLink to="/"></NavLink>
              <NavLink
        to="/get-started"
        className="relative inline-block px-6 py-3 font-medium text-white rounded-lg 
          bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
          shadow-lg hover:scale-[1.02] active:scale-95 
          transition-all duration-300 hover:shadow-xl 
          animate-gradient-x border border-gray-600/30"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </NavLink>
            </ul>
          </div>

          <div className="absolute right-0">
            <NavLink
              to="/login"
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
            >
              Join Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
