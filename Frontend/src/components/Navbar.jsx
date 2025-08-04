import React from 'react'
import { useState } from 'react'
import userImg from '../assets/user-avatar.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isLogoutDropdownOpen, setLogoutDropdown] = useState(false)
    const [notificationPanelOpen, setNotificationPanel] = useState(false)

    return (

        <>
            <nav className='m-2'>
                <div className='bg-zinc-700  flex relative h-15 rounded p-2'>


                    <div className='absolute right-50 flex gap-15'>
                        <div className="flex">
                            <input
                                type="email"
                                id="email"
                                placeholder="Search"
                                className="w-full px-4 py-2  border-gray-600 rounded-l-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:shadow-md transition duration-200"
                            />
                            <button className="rounded-r-md bg-white px-3 hover:bg-gray-100 transition duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="28px"
                                    viewBox="0 -960 960 960"
                                    width="28px"
                                    fill="#4b5563"
                                >
                                    <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <button className='cursor-pointer transition duration-300 ease-in-out hover:scale-120 ' onClick={() => setNotificationPanel(!notificationPanelOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z" /></svg>
                            </button>
                            {notificationPanelOpen && (
                                <div className="bg-white text-black left-0 absolute mt-3 w-100 h-100 bg-white-700 rounded-lg shadow-xl py-1 z-10 border">
                                    <button

                                        className=" cursor-pointer block w-full text-left px-4 py-2 text-sm  hover:bg-zinc-400 border-b-1"
                                    >
                                        Notification
                                    </button>
                                    <button className="cursor-pointer block w-full text-left px-4 py-2 text-sm  hover:bg-zinc-400">
                                        Notification</button>
                                </div>
                            )}
                        </div>



                    </div>

                    <div className="absolute right-0 text-white p-3 ">
                        <button onClick={() => setLogoutDropdown(!isLogoutDropdownOpen)}

                            className="flex items-center space-x-2 focus:outline-none cursor-pointer"
                        >
                            <img
                                src={userImg}
                                alt="User"
                                className="w-9 h-8 rounded-full"
                            />
                            <span>Username</span>
                        </button>

                        {/* Dropdown menu */}
                        {isLogoutDropdownOpen && (

                            <div className="text-white absolute right-0 mt-2 w-48 bg-zinc-700 rounded-lg shadow-xl py-1 z-10 border">
                                <NavLink to='/login'>
                                <button

                                    className=" cursor-pointer block w-full text-left px-4 py-2 text-sm  hover:bg-zinc-400"
                                >
                                    Logout
                                </button>
                                </NavLink>
                                <button className="cursor-pointer block w-full text-left px-4 py-2 text-sm  hover:bg-zinc-400">Profile</button>
                            </div>
                        )}


                    </div>

                </div>
            </nav>
        </>

    )
}

export default Navbar