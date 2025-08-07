import React from 'react'
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




const AddLeadBox = ({handleClose, open}) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

  } = useForm();


  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

  return (
    <>

<div className='rounded'>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-sm">
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: true })}
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="First Name"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: true })}
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Last Name"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              {...register('phone', { required: true })}
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Phone"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Email"
            />
          </div>

          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none 
          hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
          dark:focus:ring-gray-700">Add</button>

        </form>
      </div>
        </Box>
      </Modal>

</div>




     
    </>
  )
}

export default AddLeadBox