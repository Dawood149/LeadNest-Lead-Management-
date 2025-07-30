import React from 'react'
import logo from '../assets/LeadNest-Logo.jpg'
import { NavLink } from 'react-router-dom'

const HomeNavbar = () => {
    return (
        <>
            <nav>
                <div className='relative w-full h-20 flex gap-20 p-5 '>

                    <div className='w-40 h-100'>
                        <a href="/">
                            <img src={logo} alt="" />

                        </a>
                    </div>

                    <div className='pt-2'>
                        <ul className='inline-flex gap-20 list-none text-xl'>
                            <a className='hover:underline' href=""><li>Home</li></a>
                            <a className='hover:underline' href=""><li>About US</li></a>
                            <a className='hover:underline' href=""><li>Pricing</li></a>
                            <a className='hover:underline' href=""><li>Contact US</li></a>
                        </ul>
                    </div>

                    <div className='absolute right-0'>
                        <NavLink to="/login" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">
                            Login</NavLink>
                        <NavLink to="/signup" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">
                            Sign up</NavLink>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default HomeNavbar