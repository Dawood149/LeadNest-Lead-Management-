import React from "react";

const AppointmentsAndTasks = () => {
  const tasks = [
    { task: "Call Client", assigned: "John Smith", status: "In Progress", color: "bg-blue-100 text-blue-700" },
    { task: "Prepare Report", assigned: "Jane Dee", status: "Completed", color: "bg-green-200 text-gray-800" },
    { task: "Follow Up Email", assigned: "Alice Johnson", status: "Pending", color: "bg-red-200 text-gray-800" },
  ];

  const meetings = [
    { agent: "John Smith", date: "April 23, 2024" },
    { agent: "Alice Johnson", date: "April 25, 2024" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Appointment and Tasks</h2>
      </div>

      {/* Tasks Section */}
      <table className="w-full text-sm mb-8 text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="pb-2">Task</th>
            <th className="pb-2">Assigned to</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="py-2">{t.task}</td>
              <td>{t.assigned}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${t.color}`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Meetings Section */}
      <h3 className="text-lg font-bold mb-2">Meetings</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 text-left">
            <th className="pb-2">Agent</th>
            <th className="pb-2">Meeting Date</th>
            <th className="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((m, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="py-2">{m.agent}</td>
              <td>{m.date}</td>
              <td>
                <button className="text-blue-600 hover:underline">Join</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsAndTasks;
