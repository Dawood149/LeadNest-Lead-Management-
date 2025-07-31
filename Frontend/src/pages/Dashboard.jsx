import React from 'react'
import { useState, useEffect } from 'react';
import datentimeIcon from '../assets/datentimeIcon.png'
import DashboardCards from '../components/DashboardCards';

const Dashboard = () => {

  const [date, setDate] = useState()

  /* function updateDateTime() 
  {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setDate(now.toLocaleString('en-US', options))
    }
    useEffect(() => {
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []); */

  return (
    <>
      <div className='p-1'>
        <h1 className='text-2xl font-bold'>Welcome Back User! <br /> </h1>
        <div className='flex items-center'>
          <img className='h-12 w-12' src={datentimeIcon} alt="img" />
          <p>date{date}</p>

        </div>
        
        <div className='border flex gap-[30%] p-3'>
          <DashboardCards />

        </div>


      </div>
    </>
  )
}

export default Dashboard