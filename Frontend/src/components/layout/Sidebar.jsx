import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Leads from '../../pages/Leads'
import Tasks from '../../pages/Tasks'
import Appointments from '../../pages/Appointments'
import Agents from '../../pages/Agents'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>

      <div on={toggleSidebar} className={`h-full bg-zinc-700 m-2 rounded transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
        {/* Header with toggle button */}
        <div className="flex items-center justify-between p-4 ">
          {isOpen ? (
            <h1 className="text-white text-3xl">LeadNest</h1>
          ) : (
            <button onClick={toggleSidebar} className="text-white p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          )}

          {isOpen && (
            <button onClick={toggleSidebar} className="text-white p-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-424.67 270.67-234.33l-46-46L434-470.67 224.67-680l46-46L480-516.67 689.33-726l46 46L526-470.67 735.33-260.33l-46 46L480-424.67Z" />
              </svg>
            </button>
          )}
        </div>

        <div className="text-white font-bold mt-8 flex justify-center">
          <ul className={`space-y-7 ${isOpen ? 'w-full px-4' : 'w-full px-2'}`}>
            {/* Dashboard */}
            <li className="transition duration-200 ease-in-out ">
              <NavLink
                to={'/dashboard'}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded transition duration-200 ease-in-out ${isActive
                    ? 'bg-gray-600 text-white shadow-lg'
                    : 'text-white hover:bg-zinc-600'
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                  <path d="M513.33-580v-260H840v260H513.33ZM120-446.67V-840h326.67v393.33H120ZM513.33-120v-393.33H840V-120H513.33ZM120-120v-260h326.67v260H120Zm66.67-393.33H380v-260H186.67v260ZM580-186.67h193.33v-260H580v260Zm0-460h193.33v-126.66H580v126.66Zm-393.33 460H380v-126.66H186.67v126.66ZM380-513.33Zm200-133.34Zm0 200ZM380-313.33Z" />
                </svg>
                {isOpen && <span>Dashboard</span>}
              </NavLink>
            </li>

            {/* Leads */}
            <li className="transition duration-200 ease-in-out ">
              <NavLink
                to={'/leads'}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded transition duration-200 ease-in-out  ${isActive
                    ? 'bg-gray-600 text-white shadow-lg'
                    : 'text-white hover:bg-zinc-600'
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                  <path d="M0-240v-56.33q0-40.05 42.33-65.19 42.34-25.15 111.25-25.15 12.45 0 23.93.5 11.49.5 22.49 2.27-10 18.57-15 38.11-5 19.55-5 40.79v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-21.91-4.5-41.29t-14.17-37.56q11-1.82 22.28-2.32 11.29-.5 23.06-.5 69 0 111.16 24.68Q960-337.31 960-296.33V-240H780Zm-471.67-66.67H652v-4q-3.33-31.33-52.17-52Q551-383.33 480-383.33t-119.83 20.66Q311.33-342 308.33-310v3.33ZM153.04-420q-30.04 0-51.54-21.54T80-493.33q0-30.67 21.54-52 21.54-21.34 51.79-21.34 30.67 0 52 21.34 21.34 21.33 21.34 52.29 0 30.04-21.34 51.54Q184-420 153.04-420Zm653.34 0q-30.05 0-51.55-21.54-21.5-21.54-21.5-51.79 0-30.67 21.55-52 21.54-21.34 51.79-21.34 30.66 0 52 21.34Q880-524 880-493.04q0 30.04-21.33 51.54-21.34 21.5-52.29 21.5ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.23-66.67q22.77 0 37.94-15.4 15.16-15.4 15.16-38.16 0-22.77-15.26-37.94-15.27-15.16-37.84-15.16-22.56 0-38.06 15.26-15.5 15.27-15.5 37.84 0 22.56 15.4 38.06 15.4 15.5 38.16 15.5Zm.1 240ZM480-600Z" />
                </svg>
                {isOpen && <span>Leads</span>}
              </NavLink>
            </li>

            {/* Tasks */}
            <li className="transition duration-200 ease-in-out">
              <NavLink
                to={'/tasks'}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded transition duration-200 ease-in-out  ${isActive
                    ? 'bg-gray-600 text-white shadow-lg'
                    : 'text-white hover:bg-zinc-600'
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                  <path d="m435.33-250 228-228L618-523.33l-183 183L338.33-437l-45 45 142 142ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z" />
                </svg>
                {isOpen && <span>Tasks</span>}
              </NavLink>
            </li>

            {/* Appointments */}
            <li className="transition duration-200 ease-in-out ">
              <NavLink
                to={'/appointments'}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded transition duration-200 ease-in-out  ${isActive
                    ? 'bg-gray-600 text-white shadow-lg'
                    : 'text-white hover:bg-zinc-600'
                  }`
                }
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                  <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
                {isOpen && <span>Appointments</span>}
              </NavLink>
            </li>

            <li>            
              <NavLink
              to={'/agents'}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded transition duration-200 ease-in-out ${isActive
                  ? 'bg-gray-600 text-white shadow-lg'
                  : 'text-white hover:bg-zinc-600'
                }`
              }
            >
<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M480-241.33q-63.33 0-121.67 21.5Q300-198.33 250-156v9.33h460V-156q-50-42.33-108.33-63.83-58.34-21.5-121.67-21.5Zm0-66.67q72.33 0 136 23.33 63.67 23.34 117.33 64v-592.66H226.67v592.66q53.66-40.66 117.33-64Q407.67-308 480-308Zm1.33-146q-30 0-51-21t-21-51q0-30 21-51t51-21q30 0 51 21t21 51q0 30-21 51t-51 21ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h506.66q27 0 46.84 19.83Q800-840.33 800-813.33v666.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm254.66-307.33q58 0 98.34-40.34Q620-468 620-526t-40.33-98.33q-40.34-40.34-98.34-40.34T383-624.33Q342.67-584 342.67-526T383-427.67q40.33 40.34 98.33 40.34ZM480-526Z"/></svg>
{isOpen && <span>Agents</span>}
            </NavLink>
            </li>
            
          </ul>
        </div>
      </div>

      {/*  <div className='h-full bg-zinc-700 m-2 rounded w-50'>
         <h1 className='text-white text-3xl p-5'>LeadNest</h1>

         <div className='text-white font-bold mt-15 flex justify-center h-screen'>
            <ul className='space-y-20 '>
                <li className='transition duration-200 ease-in-out hover:scale-110'>
                    <NavLink to={'/dashboard'} className={'flex items-center gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M513.33-580v-260H840v260H513.33ZM120-446.67V-840h326.67v393.33H120ZM513.33-120v-393.33H840V-120H513.33ZM120-120v-260h326.67v260H120Zm66.67-393.33H380v-260H186.67v260ZM580-186.67h193.33v-260H580v260Zm0-460h193.33v-126.66H580v126.66Zm-393.33 460H380v-126.66H186.67v126.66ZM380-513.33Zm200-133.34Zm0 200ZM380-313.33Z"/></svg>
                    <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className='transition duration-200 ease-in-out hover:scale-110'>
                    <NavLink to={'leads'} className={'flex items-center gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M0-240v-56.33q0-40.05 42.33-65.19 42.34-25.15 111.25-25.15 12.45 0 23.93.5 11.49.5 22.49 2.27-10 18.57-15 38.11-5 19.55-5 40.79v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-21.91-4.5-41.29t-14.17-37.56q11-1.82 22.28-2.32 11.29-.5 23.06-.5 69 0 111.16 24.68Q960-337.31 960-296.33V-240H780Zm-471.67-66.67H652v-4q-3.33-31.33-52.17-52Q551-383.33 480-383.33t-119.83 20.66Q311.33-342 308.33-310v3.33ZM153.04-420q-30.04 0-51.54-21.54T80-493.33q0-30.67 21.54-52 21.54-21.34 51.79-21.34 30.67 0 52 21.34 21.34 21.33 21.34 52.29 0 30.04-21.34 51.54Q184-420 153.04-420Zm653.34 0q-30.05 0-51.55-21.54-21.5-21.54-21.5-51.79 0-30.67 21.55-52 21.54-21.34 51.79-21.34 30.66 0 52 21.34Q880-524 880-493.04q0 30.04-21.33 51.54-21.34 21.5-52.29 21.5ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.23-66.67q22.77 0 37.94-15.4 15.16-15.4 15.16-38.16 0-22.77-15.26-37.94-15.27-15.16-37.84-15.16-22.56 0-38.06 15.26-15.5 15.27-15.5 37.84 0 22.56 15.4 38.06 15.4 15.5 38.16 15.5Zm.1 240ZM480-600Z"/></svg>
                    <span>Leads</span>
                    </NavLink>
                </li>
                <li className='transition duration-200 ease-in-out hover:scale-110'>
                    <NavLink to={'/tasks'} className={'flex items-center gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="m435.33-250 228-228L618-523.33l-183 183L338.33-437l-45 45 142 142ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>
                    <span>Tasks</span>
                    </NavLink>
                </li>
                <li className='transition duration-200 ease-in-out hover:scale-110'>
                    <NavLink to={'/appointments'} className={'flex items-center gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                    <span>Appointments</span>
                    </NavLink>
                </li>

            </ul>
         </div>
    </div> */}
    </>
  )
}

export default Sidebar