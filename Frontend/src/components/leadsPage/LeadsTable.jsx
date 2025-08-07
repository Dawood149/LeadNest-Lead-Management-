import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LeadDetails from './LeadDetails';
import { dummyLeads } from '../../data';


const LeadsTable = () => {



  const [currentPage, setCurrentPage] = useState(1)
  const [openActionIndex, setOpenActionIndex] = useState(null);

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
  const [leadDetails, setLeadDetails]=useState(null)

  const handleOpen = (data) => {
    setOpenLeadDetails(true);
    setLeadDetails(data)

    console.log(data)
  }
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
                      Type{" "}
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
                    <th
                      scope="col"
                      className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"
                    >
                      {" "}
                      Actions{" "}
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-300 ">
                  {currentRecords.map((data, index) => (
                    <tr
                      key={index}
                      onDoubleClick={() => handleOpen(data)}
                      className="relative cursor-pointer hover:bg-gray-300"
                    >
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.leadName}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.leadPhone}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.leadEmail}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.type}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.status}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.date}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.agentAssigned}</td>
                      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 relative">
                        <button
                          onClick={() =>
                            setOpenActionIndex(openActionIndex === index ? null : index)
                          }
                          className="p-1 cursor-pointer hover:bg-gray-400 hover:rounded-3xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                          </svg>
                        </button>

                        {/* Dropdown menu */}
                        {openActionIndex === index && (
                          <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-50">
                            <ul className="py-1 text-sm text-gray-700">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

           {
        (openLeadDetails ? <LeadDetails details={leadDetails} onClose={handleClose} onOpen={handleOpen} /> : null)
      }


    {/* --------------------PAGINATION */}


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

     
    </>

  )



}

export default LeadsTable