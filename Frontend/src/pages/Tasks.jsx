import React, { useState } from "react"



const Tasks = () => {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Call Client", status: "Pending" },
    { id: 2, title: "Prepare Report", status: "In Progress" },
    { id: 3, title: "Follow Up Email", status: "Completed" },
    { id: 4, title: "Email Stephanie", status: "Completed" },
    { id: 5, title: "Follow Up Email", status: "Completed" },
    { id: 6, title: "Task 1", status: "Completed" },
    { id: 7, title: "Task 2", status: "Completed" },
    { id: 8, title: "Task 3", status: "Completed" },
    { id: 9, title: "Task 4", status: "Completed" },
    { id: 10, title: "Task 5", status: "Completed" },
    { id: 11, title: "Task 6", status: "Completed" },
    { id: 12, title: "Task 7", status: "Completed" },
    { id: 13, title: "Task 8", status: "Completed" },

  ]);

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const statusColors = {
    Pending: "bg-red-100 text-red-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 border-b">Task</th>
              <th className="py-2 border-b">Status</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-300">
                <td className="py-3">{task.title}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColors[task.status]}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="py-3">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(task.id, e.target.value)
                    }
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks