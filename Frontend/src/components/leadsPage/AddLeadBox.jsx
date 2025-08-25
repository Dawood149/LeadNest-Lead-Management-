import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import BuyerForm from "../getStarted/BuyerForm";
import SellerForm from "../getStarted/SellerForm";

const AddLeadBox = ({ handleClose, open }) => {
  const [selectedRole, setSelectedRole] = useState("buyer"); // default role

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700, // wider for toggle + form
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };

  return (
    <div className="rounded">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center">
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
        </Box>
      </Modal>
    </div>
  );
};

export default AddLeadBox;
