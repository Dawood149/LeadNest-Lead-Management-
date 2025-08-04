import React from 'react'

const Leads = () => {
  return (
    <>
      <div className='flex gap-20'>

        <div className=' flex rounded-2xl w-70'>
          <input
            type="email"
            id="email"
            placeholder="Search"
            className="w-full px-4 py-2  border-gray-600 rounded-l-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:shadow-md transition duration-200"
          />
          <button className="rounded-r-md bg-white px-3 hover:bg-gray-100 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#4b5563"
            >
              <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
            </svg>
          </button>
        </div>

        <div className='border'>
          {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Button
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
        </div>

        <div className='border'>
          Status
        </div>

        <div className='border'>
          Assigned to
        </div>

        <div className='border'>
          <button>Add Lead +</button>
        </div>

      </div>
    </>
  )
}

export default Leads