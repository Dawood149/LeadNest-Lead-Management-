import React, { useState } from "react";
import HomeNavbar from "../components/LandingPage/HomeNavbar";
import Footer from "../components/LandingPage/Footer";

const GetStarted = () => {
  const [selectedRole, setSelectedRole] = useState("buyer");

  return (
    <>
      <HomeNavbar />
      <div className="min-h-screen  flex items-center justify-center p-6">
        <div className="bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setSelectedRole("buyer")}
              className={`px-6 py-2 rounded-l-full font-semibold transition-all duration-300 ${
                selectedRole === "buyer"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Buyer
            </button>
            <button
              onClick={() => setSelectedRole("seller")}
              className={`px-6 py-2 rounded-r-full font-semibold transition-all duration-300 ${
                selectedRole === "seller"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Seller
            </button>
          </div>

          {/* Buyer Form */}
          {selectedRole === "buyer" && (
            <form className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Buyer Details
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="phone"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Select property type</option>
                <option value="single-family">Single Family Home</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
                <option value="duplex">Duplex</option>
                <option value="triplex">Triplex</option>
              </select>
              <input
                type="text"
                placeholder="Preferred Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="number"
                placeholder="Sqft Required"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="number"
                placeholder="Budget ($150,000 - $170,000)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Beds</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Baths</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <input
                type="text"
                placeholder="Notes"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
                Submit
              </button>
            </form>
          )}

          {/* Seller Form */}
          {selectedRole === "seller" && (
            <form className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Seller Details
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="phone"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Select property type</option>
                <option value="single-family">Single Family Home</option>
                <option value="townhouse">Townhouse</option>
                <option value="apartment">Apartment</option>
                <option value="duplex">Duplex</option>
                <option value="triplex">Triplex</option>
              </select>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="text"
                placeholder="Location (City, State, Zip)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="number"
                placeholder="Sqft"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="number"
                placeholder="Asking Price"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Beds</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Baths</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <input
                type="text"
                placeholder="Notes"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
                <option value="">Mortgage</option>
                <option value="">Paid Off</option>
                <option value="">Pending`</option>
              </select>
              <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;
