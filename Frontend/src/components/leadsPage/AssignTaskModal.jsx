import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const AssignTaskModal = ({ handleClose}) => {
  return (
   <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Enter Task
          </Typography>
            <TextField  sx={{marginTop: 3, width: '50ch'}} id="standard-basic" variant="standard" />

            <button className='mt-4 bg-gray-800 p-3 rounded text-white text-md cursor-pointer hover:bg-gray-700'>Add a Task</button>
          
        </Box>
      </Modal>

    
    </div>
  )
}

export default AssignTaskModal