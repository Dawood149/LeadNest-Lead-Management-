import React from 'react'
import { useState, useEffect } from 'react';
import datentimeIcon from '../assets/datentimeIcon.png'
import DashboardCards from '../components/dashboard/DashboardCards';
import DashboardCardsAdmin from '../components/dashboard/DashboardCardsAdmin';
import LeadPipeline from '../components/dashboard/LeadPipeline';
import UpcomingAppointments from '../components/dashboard/UpcomingAppointments';
import TaskDue from '../components/dashboard/TaskDue';
import { updateDateTime } from '../utils';

const Dashboard = () => {

  const [date, setDate] = useState()

  const [isAdmin, setIsAdmin] = useState(false)

  
/*   useEffect(() => {
  const interval = setInterval(() => {
    setDate(updateDateTime());
  }, 1000);

  return () => clearInterval(interval);
}, [date]); */

  return (
    
      <div className='p-1'>
        <h1 className='text-2xl font-bold'>Welcome Back User! <br /> </h1>
        <div className='flex items-center mb-10 mt-5 text-xl'>
          <img className='h-12 w-12' src={datentimeIcon} alt="img" />
          <p>{date}</p>

        </div>

        {isAdmin ? (
          <div className='h-auto shadow-xl rounded-2xl flex gap-[17%] p-3 text-center'>
            <DashboardCardsAdmin />
          </div>
        ) : (
          <div className='h-auto shadow-xl rounded-2xl flex gap-[28%] p-3 text-center'>
            <DashboardCards />
          </div>
        )}

        <div className=' mt-10 rounded shadow-2xl p-4'>
          <div className='flex items-center gap-2 mb-10'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M653.33-160v-280H800v280H653.33Zm-246.66 0v-640h146.66v640H406.67ZM160-160v-440h146.67v440H160Z"/></svg>
            <h1 className='text-4xl'>Leads Pipeline</h1>
          </div>

          <LeadPipeline/>

        </div>

        <div className=' mt-10 rounded shadow-2xl p-4'>
          <div className='flex items-center gap-2 mb-10'>
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M577.33-80v-66.67h196v-420H186.67v200H120v-380q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80h-196ZM320-9.33 273.33-56 383-166.67H46.67v-66.66H383L273.33-344 320-390.67 510.67-200 320-9.33Zm-133.33-624h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Z"/></svg>
            <h1 className='text-4xl'>Upcoming Appointments</h1>
          </div>

        <UpcomingAppointments/>
        </div>

          
          <TaskDue/>

      </div>
    
  )
}

export default Dashboard