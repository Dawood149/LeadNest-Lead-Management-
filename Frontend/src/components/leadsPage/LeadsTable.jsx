import React from 'react'


const LeadsTable = () => {
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
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 ">
            <tr>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                {" "}
                John Doe
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                20010510{" "}
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Customer
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Accessories
              </td>
            </tr>
            <tr>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                {" "}
                Apple
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                20010511{" "}
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Partner
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Electronics
              </td>
            </tr>
            
            <tr>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                {" "}
                Starbucks
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                20010513{" "}
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Reseller
              </td>
              <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                {" "}
                Retail
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default LeadsTable