import React from 'react'

const DashboardCards = () => {
    return (
        <>
            <div className='flex flex-col gap-10'>
                <div className='w-auto flex text-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                    <span>Total Leads</span>
                </div>
                <div className='text-4xl text-gray-600'>
                    <p>
                        123</p></div>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View All</button>
            </div>


            <div className='flex flex-col gap-10'>
                <div className='flex text-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#434343"><path d="m795.67-137.67 28-28-75-75v-112h-40v128l87 87Zm-609 17.67q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h586.66q27.5 0 47.09 19.58Q840-800.83 840-773.33v308.66q-15.67-8.33-32.67-13.83t-34-8.5v-286.33H186.67v586.66h286.66q3.67 18 9.19 34.79 5.51 16.78 13.15 31.88h-309Zm0-111.33v44.66-586.66V-487v-3.67V-231.33ZM280-280h195q3.67-17.67 9.17-34.33 5.5-16.67 13.5-32.34H280V-280Zm0-166.67h310.67q20-14.66 41.83-24.33 21.83-9.67 47.5-14.67v-27.66H280v66.66Zm0-166.66h400V-680H280v66.67ZM728.33-40.67q-79.33 0-135.5-56.5-56.16-56.5-56.16-134.83 0-79.96 56.16-136.31 56.16-56.36 135.84-56.36 79 0 135.5 56.36 56.5 56.35 56.5 136.31 0 78.33-56.5 134.83-56.5 56.5-135.84 56.5Z" /></svg>
                    <span>Follow Ups</span>
                </div>
                <div className='text-4xl text-gray-600'>
                    <p>24</p>
                </div>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View All</button>
            </div>


            <div className='flex flex-col gap-10'>
                <div className=' w-auto flex text-2xl '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34ZM480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>                    <span>Appointments</span>
                </div>
                <div className='text-4xl text-gray-600'>
                    <p>2</p>
                </div>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View All</button>
            </div>




        </>
    )
}

export default DashboardCards