import React from "react";
import { useForm } from "react-hook-form";


const BuyerForm = ({selectedRole}) => {

     const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();

  function buyerFormSubmit(buyerData) 
  {
    const payload = { ...buyerData, selectedRole }; 
     console.log(payload);
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(buyerFormSubmit)}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Buyer Details</h2>
        <input
          {...register("Name")}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("phone")}
          type="phone"
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          {...register("date")}
          type="date"
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <select
          id="propertyType"
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
          {...register("Preferred Location")}
          type="text"
          placeholder="Preferred Location"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="number"
          {...register("sqft")}
          placeholder="Sqft Required"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="number"
          {...register("budget")}
          placeholder="Budget ($150,000 - $170,000)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <select
          id="beds"
          {...register("beds")}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Beds</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          id="baths"
          {...register("baths")}
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

        <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
          Submit
        </button>
      </form>
    </>
  );
};

export default BuyerForm;
