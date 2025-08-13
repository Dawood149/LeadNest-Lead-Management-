import React from "react";
import { useForm } from "react-hook-form";

const SellerForm = ({selectedRole}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function sellerFormSubmit(sellerData) {
    const payload = { ...sellerData, selectedRole }; 
     console.log(payload);
  }

  return (
    <>
      <form onSubmit={handleSubmit(sellerFormSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Seller Details
        </h2>
        <input
          {...register("Name")}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("Email")}
          type="Email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("Phone")}
          type="number"
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("date")}
          type="date"
          placeholder="Date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <select
          {...register("propertyType", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Select property type</option>
          <option value="Single Family Home">Single Family Home</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Apartment">Apartment</option>
          <option value="Duplex">Duplex</option>
          <option value="Triplex">Triplex</option>
        </select>

        <input
          {...register("propertyAddress")}
          type="text"
          placeholder="Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("location")}
          type="text"
          placeholder="Location (City, State, Zip)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("sqft")}
          type="number"
          placeholder="Sqft"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("askingPrice")}
          type="number"
          placeholder="Asking Price"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <select
          {...register("beds", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          {...register("baths", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Baths</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <input
          {...register("notes")}
          type="text"
          placeholder="Notes"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <select
          {...register("mortgage", { required: true })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="Mortgage">Mortgage</option>
          <option value="Paid Off">Paid Off</option>
          <option value="Pending">Pending</option>
        </select>
        <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
          Submit
        </button>
      </form>
    </>
  );
};

export default SellerForm;
