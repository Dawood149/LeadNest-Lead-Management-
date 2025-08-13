import React, { useState } from "react";
import HomeNavbar from "../components/LandingPage/HomeNavbar";
import Footer from "../components/LandingPage/Footer";
import BuyerForm from "../components/getStarted/BuyerForm";
import SellerForm from "../components/getStarted/SellerForm";

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
            <BuyerForm selectedRole={selectedRole} />
          )}

          {/* Seller Form */}
          {selectedRole === "seller" && (
            <SellerForm selectedRole={selectedRole} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStarted;
