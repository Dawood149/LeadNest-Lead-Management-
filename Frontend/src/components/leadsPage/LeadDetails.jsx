import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const LeadDetails = ({ onClose, onOpen }) => {

    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

  return (
    <>
   <Modal
        open={onOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className=' h-100 w-100'>

            </div>
         
        </Box>
      </Modal>

    </>
  )
}

export default LeadDetails