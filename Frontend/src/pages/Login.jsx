import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImg from "../assets/login-bg.png";
import logo from "../assets/logo-nobackground.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setisLoading]=useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function formSubmit(data) {
    setisLoading(true);
    axios
      .post("http://localhost:8000/login", data)
      .then((result) => {
        navigate("/dashboard");
      })
      .catch((err) => console.log("error while signing in", err));

    //console.log(data);
  }

  return (
    <>
      <div className="w-full flex bg-gradient-to-r from-gray-100 via-gray-400 to-gray-800">
        <div className="w-[55%]">
          <img src={backgroundImg} alt="Login Page Image" />
        </div>

        {/*    --------------------------Login Form */}

        <div className="flex justify-center items-center w-[45%]">
          <div className=" p-6 rounded-lg w-full max-w-md">
            <img src={logo} alt="logo" />
            <h2 className="text-4xl text-center mb-6 mt-10 text-gray-900">
              Login
            </h2>
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900 mb-1"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-900 mb-1"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                />

               
                <span
                  className="absolute right-3 top-11 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 rounded border-gray-300 "
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <button
  type="submit"
  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-3xl cursor-pointer transition flex items-center justify-center gap-2"
>
  {/* Loader (Static) */}
  {isLoading ?  
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>: null}
 

  Login
</button>

              <div className="text-center mt-3">
                <a
                  href="#forgot-password"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Forgot password?
                </a>
              </div>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-800 text-sm mb-7">
                Don't have an account?
              </p>
              <NavLink
                to="/signup"
                className="bg-red-500 text-white px-5 py-2.5 rounded-md  transition disabled:opacity-50"
                disabled={isSubmitting}
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
