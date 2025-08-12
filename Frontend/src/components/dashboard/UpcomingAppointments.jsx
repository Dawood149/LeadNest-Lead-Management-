import React from 'react'

const UpcomingAppointments = () => {
    return (
        <>


            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Lead Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date and Time
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Agent Assigned
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Meeting
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="">
                            <th scope="row" class="px-6 py-4 font-medium text-black">
                                Bryce Walker
                            </th>
                            <td class="px-6 py-4">
                                Today 2:00 am
                            </td>
                            <td class="px-6 py-4">
                                <span className="text-xs px-2 py-1 rounded-4xl bg-gray-500 text-white">
                                    John Doe
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                Join Meeting www.zoom.com
                            </td>
                        </tr>
                        <tr class="">
                            <th scope="row" class="px-6 py-4 font-medium text-black ">
                                Bryce Walker
                            </th>
                            <td class="px-6 py-4">
                                Tomorrow, 2:00 pm
                            </td>
                            <td class="px-6 py-4">
                                <span className="text-xs px-2 py-1 rounded-4xl bg-gray-500 text-white">
                                    Bill Kimber
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                Join Meeting www.zoom.com
                            </td>
                        </tr>
                        <tr class="">
                            <th scope="row" class="px-6 py-4 font-medium text-black">
                                Bryce Walker
                            </th>
                            <td class="px-6 py-4">
                                Aug, 28th 3:30 pm
                            </td>
                            <td class="px-6 py-4">
                                <span className="text-xs px-2 py-1 rounded-4xl bg-gray-500 text-white">
                                    Shawn
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                Join Meeting www.zoom.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default UpcomingAppointments