import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet /> 
        </main>
      </div>
    </div>
  )
}

export default Layout