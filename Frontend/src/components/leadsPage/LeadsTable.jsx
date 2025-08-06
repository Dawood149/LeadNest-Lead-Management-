import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LeadDetails from './LeadDetails';


const LeadsTable = () => {

  const dummyLeads = [
    {
      leadName: "Sarah Johnson",
      leadPhone: "212-555-0187",
      leadEmail: "sarah.j@protonmail.com",
      status: "Contacted",
      date: "2025-09-05",
      agentAssigned: "You"
    },
    {
      leadName: "Michael Chen",
      leadPhone: "415-832-6543",
      leadEmail: "michael.chen@outlook.com",
      status: "In Progress",
      date: "2025-09-01",
      agentAssigned: "Nelson Vallejo"
    },
    {
      leadName: "Amanda Rodriguez",
      leadPhone: "305-555-9123",
      leadEmail: "arodriguez@gmail.com",
      status: "Converted",
      date: "2025-08-28",
      agentAssigned: "Valentin Sotomayor"
    },
    {
      leadName: "James Wilson",
      leadPhone: "617-555-3478",
      leadEmail: "jwilson22@yahoo.com",
      status: "Dropped",
      date: "2025-08-30",
      agentAssigned: "Allyson Carlquist"
    },
    {
      leadName: "Emily Park",
      leadPhone: "310-555-4289",
      leadEmail: "emily.park@icloud.com",
      status: "New",
      date: "2025-09-03",
      agentAssigned: "Katrina Vitale"
    },
    {
      leadName: "Robert Kim",
      leadPhone: "404-555-8765",
      leadEmail: "rkim@business.com",
      status: "Contacted",
      date: "2025-09-04",
      agentAssigned: "Keller Williams"
    },
    {
      leadName: "Lisa Thompson",
      leadPhone: "312-555-2398",
      leadEmail: "lisa.t@realestate.com",
      status: "In Progress",
      date: "2025-09-02",
      agentAssigned: "Katrina Vitale"
    },
    {
      leadName: "David Martinez",
      leadPhone: "713-555-7654",
      leadEmail: "dmartinez@mail.com",
      status: "New",
      date: "2025-09-06",
      agentAssigned: "You"
    },
    {
      leadName: "Jennifer Lee",
      leadPhone: "206-555-9821",
      leadEmail: "j.lee@nwre.com",
      status: "Converted",
      date: "2025-08-29",
      agentAssigned: "Allyson Carlquist"
    },
    {
      leadName: "Thomas Brown",
      leadPhone: "303-555-0145",
      leadEmail: "tbrown@denverhomes.com",
      status: "Dropped",
      date: "2025-08-31",
      agentAssigned: "Garrett Serwatka"
    }
  ]

  const [currentPage, setCurrentPage] = useState(1)


  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = dummyLeads.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(dummyLeads.length / recordsPerPage)
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1)

  
    function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  function changeCurrentPage(n) {
    setCurrentPage(n)
  }

  function nextPage() {
    if (currentPage <= numberOfPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const [openLeadDetails, setOpenLeadDetails] = React.useState(false);
  const handleOpen = () => setOpenLeadDetails(true);
  const handleClose = () => setOpenLeadDetails(false);


  return (
    <>
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg border-gray-300">
              <table className=" min-w-full  rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Lead Name{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Lead Phone{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Lead Email{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Status{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Date{" "}
                    </th>
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Agent{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 ">
                  {currentRecords.map((data, index) => (
                    <tr key={index} onDoubleClick={handleOpen} className="cursor-pointer hover:bg-gray-300">

                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{data.leadName}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{data.leadPhone}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{data.leadEmail}</td>
                      <td className=" p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.status}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{data.date}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{data.agentAssigned}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <nav aria-label="Page navigation example ">
            <ul class="inline-flex -space-x-px text-sm cursor-pointer">
              <li>
                <a onClick={prevPage} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg
                     hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                      dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li key={i}>
                    <a onClick={() => changeCurrentPage(n)} className={`${currentPage === n ? 'active' : null} flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg
                     hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                      dark:hover:bg-gray-700 dark:hover:text-white`} >{n}</a>
                  </li>
                ))
              }

              <li>
                <a onClick={nextPage} h class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 
                    bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 
                    dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                    dark:hover:text-white">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {
        (openLeadDetails ? <LeadDetails onClose={handleClose} onOpen={handleOpen}/> : null)
      }
    </>

  )



}

export default LeadsTable