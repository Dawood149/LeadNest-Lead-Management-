import React from 'react'

const TaskDue = () => {
  return (
    <>
    <div className="mt-10 bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200">
      <h3 className="text-3xl font-medium text-gray-900 mb-3 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M360-853.33V-920h240v66.67H360Zm86.67 444.66h66.66V-642h-66.66v233.33Zm33.33 328q-74 0-139.5-28.5T226-186.67q-49-49-77.5-114.5T120-440.67q0-74 28.5-139.5t77.5-114.5q49-49 114.5-77.5t139.5-28.5q65.33 0 123.67 21.67 58.33 21.67 105.66 61L762-770.67 808.67-724 756-671.33Q792.67-628 816.33-571 840-514 840-440.67q0 74-28.5 139.5T734-186.67q-49 49-114.5 77.5T480-80.67Zm0-66.66q122 0 207.67-85.67 85.66-85.67 85.66-207.67 0-122-85.66-207.66Q602-734 480-734q-122 0-207.67 85.67-85.66 85.66-85.66 207.66T272.33-233Q358-147.33 480-147.33ZM480-440Z"/></svg>

        Tasks Due
      </h3>

      <div className="space-y-3">
        {/* Task 1 */}
        <div className="flex items-center p-2 hover:bg-gray-100 rounded transition-colors">
          <input 
            type="checkbox" 
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3" 
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Follow up with client</p>
            <p className="text-xs text-gray-500 mt-0.5">Due: Today, 3:00 PM</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>
        </div>

        {/* Task 2 */}
        <div className="flex items-center p-2 hover:bg-gray-100 rounded transition-colors">
          <input 
            type="checkbox" 
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3" 
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Send proposal draft</p>
            <p className="text-xs text-gray-500 mt-0.5">Due: Tomorrow</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
            Not Started
          </span>
        </div>

        {/* Task 3 */}
        <div className="flex items-center p-2 hover:bg-gray-100 rounded transition-colors">
          <input 
            type="checkbox" 
            checked 
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-3" 
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 line-through">Update CRM records</p>
            <p className="text-xs text-gray-400 mt-0.5">Completed: Today</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
            Completed
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default TaskDue