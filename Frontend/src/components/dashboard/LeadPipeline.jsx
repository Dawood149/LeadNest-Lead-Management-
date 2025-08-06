import React from 'react'

const LeadPipeline = () => {
    const arr=[{
        name: "John Doe",
        email: "johndoe1@gmail.com",
        phone: "845-967-3212"
    },
    {
        name: "John Doe",
        email: "johndoe1@gmail.com",
        phone: "845-967-3212"
    },
    {
        name: "John Doe",
        email: "johndoe1@gmail.com",
        phone: "845-967-3212"
    },
    {
        name: "John Doe",
        email: "johndoe1@gmail.com",
        phone: "845-967-3212"
    },


]
    return (
        <div className='mt-2 flex gap-10'>

            <div className=''>
                <h1 className='text-2xl text-center mb-5'>New (96)</h1>

                {
                    arr.map((item)=>{
                    return (
                     <a href="#" className="mt-2 block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{item.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                </a>
                    )
                    })
                }


            </div>

            <div >
                <h1 className='text-2xl mb-5'>Contacted (24)</h1>
                {
                    arr.map((item)=>{
                    return (
                     <a href="#" className="mt-2 block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{item.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                </a>
                    )
                    })
                }
            </div>

            <div>
                <h1 className='text-2xl mb-5'>In Progress (18)</h1>
                {
                    arr.map((item)=>{
                    return (
                     <a href="#" className="mt-2 block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{item.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                </a>
                    )
                    })
                }
            </div>

            <div>
                <h1 className='text-2xl mb-5'>Converted (7)</h1>
                {
                    arr.map((item)=>{
                    return (
                     <a href="#" className="mt-2 block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{item.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                </a>
                    )
                    })
                }
            </div>

            <div>
                <h1 className='text-2xl mb-5'>Dropped (12)</h1>
                {
                    arr.map((item)=>{
                    return (
                     <a href="#" className="mt-2 block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 ">

                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{item.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.email}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone}</p>
                </a>
                    )
                    })
                }
            </div>

        </div>
    )
}

export default LeadPipeline