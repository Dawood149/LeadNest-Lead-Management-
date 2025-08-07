import React from 'react'
import AddLeadBox from '../components/leadsPage/AddLeadBox'
import LeadsTable from '../components/leadsPage/LeadsTable'
import { useState } from 'react'
import Button from '@mui/material/Button';


const Leads = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='flex gap-10 p-6 items-center'>

        <div className=' flex rounded-2xl w-70 h-10'>
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

        <div className=''>
          <label htmlFor="date" className="text-sm font-medium text-gray-700" >Date:</label><br />
          <input type="date" className='bg-white rounded-lg px-3 py-1 shadow cursor-pointer' />
        </div>

        <div className="relative w-48">
          <label for="status" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select
            id="status"
            className="block w-full px-3 py-2 pr-8 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm transition-all"
          >
            <option className='text-red-700' value="All">Buyer</option>
            <option className='text-green-700' value="New" >Seller</option>
          </select>

        </div>

        <div className="relative w-48">
          <label for="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            id="status"
            className="block w-full px-3 py-2 pr-8 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm transition-all"
          >
            <option value="All">All</option>
            <option value="New" >New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Converted">Converted</option>
            <option value="Dropped">Dropped</option>
          </select>

        </div>

        <div className="relative w-48">
          <label for="status" className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
          <select
            id="status"
            className="block w-full px-3 py-2 pr-8 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm transition-all"
          >
            <option value="All">Agent 1</option>
            <option value="New" >Agent 2</option>
            <option value="Contacted">Agent 3</option>
            <option value="In Progress">Agent 4</option>
            <option value="Converted">Agent 5</option>
            <option value="Dropped">Agent 6</option>
          </select>

        </div>

        

        <div className=''>
                <Button onClick={handleOpen}>Add Lead +</Button>
        </div>



      </div>
      {open ? (<AddLeadBox  handleClose={handleClose} open={open} />) : null}

      <div className=''>
      <LeadsTable/>
      </div>

    </>
  )
}

export default Leads