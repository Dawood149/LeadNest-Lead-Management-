import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImage from '../assets/heroSection.webp'

const HeroSection = () => {

    return (
        <>
            <div className='bg-black flex w-full mt-10'>

                <div className='w-2/5 text-white flex flex-col justify-center items-center p-6'>
                    <h1 className="text-6xl font-bold mb-2">LeadNest gets your team working in sync</h1>
                    <h2 className="text-4xl mb-4 mt-5">Build powerful low-code business solutions to customize work and communication</h2>
                    <NavLink to={"/signup"}
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                         focus:ring-gray-300 rounded-full text-xl px-10 py-4 mb-2 mt-5 dark:bg-gray-800 
                         dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer"
                    >
                        Sign up now
                    </NavLink>
                </div>


                <div className='w-3/5 h-[50rem]'>
                    <img src={heroImage} alt="" className="w-full h-full object-cover" />
                </div>

            </div>

        </>
    )
}

export default HeroSection