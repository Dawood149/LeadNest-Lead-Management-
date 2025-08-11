import React, { useState } from "react";
import { Trash2, Circle } from "lucide-react";

const Agents = () => {
 const [agents, setAgents] = useState([
    { id: 1, name: "John Doe", status: "online", email: "john@example.com" },
    { id: 2, name: "Jane Smith", status: "away", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", status: "online", email: "mike@example.com" },
  ]);

  const handleDelete = (id) => {
    setAgents((prev) => prev.filter((agent) => agent.id !== id));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Agents Management</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-gray-700">Email</th>
              <th className="py-3 px-4 text-left text-gray-700">Status</th>
              <th className="py-3 px-4 text-right text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium">{agent.name}</td>
                <td className="py-3 px-4">{agent.email}</td>
                <td className="py-3 px-4 flex items-center">
                  <Circle
                    size={12}
                    className={`mr-2 ${
                      agent.status === "online"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    fill="currentColor"
                  />
                  {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => handleDelete(agent.id)}
                    className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {agents.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 text-center text-gray-500 italic"
                >
                  No agents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agents