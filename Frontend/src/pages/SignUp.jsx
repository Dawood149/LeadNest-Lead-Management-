import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-nobackground.png'


const SignUp = () => {

     const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    
      } = useForm();

       function formSubmit(data) {
    console.log(data)
  }
    
  return (
   <>
  
  <div className="p-6  w-full flex flex-col items-center justify-center">

    <div className='bg-gray-500 border-8 w-screen '>

    </div>

    <div className='w-full  h-80 flex flex-col items-center justify-center'>
    <div className='h-30 w-70 '>
    <img src={logo} alt="logo" />
    </div>
    <div className=''>
    <h2 className="text-2xl text-center mb-6">Good Decision.</h2>
    <p className='text-center text-gray-500 text-xl'>Create your free account and join over thousands of teams getting their work done on LeadNest.</p>
    </div>
    </div>

    <div className=' w-[40%]'>
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-7">
        <label htmlFor="name" className="text-lg block font-medium text-gray-700 mb-3">
          Your Full Name
        </label>
        <input
          {...register('name', {
            required: true,
            maxLength: { value: 20, message: "Name should not be more than 20 letters" },
            minLength: { value: 3, message: "Name should be at least three characters" },
          })}
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        {errors.Name && <p className="text-red-500 text-sm mt-1">! {errors.Name.message}</p>}
      </div>

      <div className="mb-7">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-3">
          Your Work Email Address
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
      </div>

      <div className="mb-7">
        <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-3">
          Create a Password
        </label>
        <input
          {...register('password')}
          type="password"
          id="password"
          placeholder="Enter your password"
          required
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-3xl cursor-pointer transitio"
      >
        Register
      </button>
    </form>

    <div className="text-center mt-10">
      <p className="text-gray-600 text-sm mb-6">Already have an account?</p>
      <NavLink
        to="/login"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
      >
        Login here
      </NavLink>
    </div>
  </div>
  </div>

   </>
  )
}

export default SignUp