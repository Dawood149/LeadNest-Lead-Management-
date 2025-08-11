import React from 'react'

const Appointments = () => {


  const dummyAppointments=[
    {leadName:"BryceWalker", dateAndTime:"Today 2:00am", meetingLink:"Join Meeting www.zoom.com"},
    {leadName:"Emilia De Souza", dateAndTime:"Tomorrow, 2:00 pm", meetingLink:"Join Meeting www.zoom.com"},
    {leadName:"Jackson Brown", dateAndTime:"Aug, 28th 3:30 pm	", meetingLink:"Join Meeting www.zoom.com"},
    {leadName:"Warren Hansberg", dateAndTime:"Sep 12th, 11:00 am", meetingLink:"Join Meeting www.zoom.com"}
  ]

  return (
     <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">My Meetings</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {dummyAppointments.map((appt, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-800">
                {appt.leadName}
              </h3>
              <span className="text-sm text-gray-500">
                {appt.dateAndTime}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Meeting Link:</span>
              <a
                href={appt.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Join Meeting
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appointments