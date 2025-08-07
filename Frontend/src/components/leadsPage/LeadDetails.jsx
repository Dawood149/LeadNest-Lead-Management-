import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';




const LeadDetails = ({ onClose, onOpen, details }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '69vw',
    height: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    overflowY: 'auto'
  };

  return (
    <Modal
      open={onOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="h-full w-full ">
          <div className='flex relative '>
            <h1 className='text-2xl'>Lead Details</h1>
            <button onClick={() => onClose()} className='absolute right-0 cursor-pointer bg-gray-800 p-3 text-white rounded-lg'>Close</button>
          </div>

          <div className='mt-10'>


            <Card sx={{ minWidth: 300, borderRadius: 2, boxShadow: 3, p: 2 }}>
              <CardContent>
                <Divider sx={{ mb: 2 }} />

                <Stack spacing={1}>
                  <Typography><strong>Name:</strong> {details.leadName}</Typography>
                  <Typography><strong>Phone:</strong> {details.leadPhone}</Typography>
                  <Typography><strong>Email:</strong> {details.leadEmail}</Typography>
                  <Typography><strong>Date:</strong> {details.date}</Typography>
                  <Typography><strong>Status:</strong> {details.status}</Typography>
                  <Typography><strong>Agent Assigned:</strong> {details.agentAssigned}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </div>

          <div className='mt-7'>
            
          {(details.type=='Buyer' ?
          <div>
              <h1 className='text-2xl'>Buyers Preferences</h1>
              <Card sx={{ minWidth: 300, borderRadius: 2, boxShadow: 3, p: 2 }}>
                <CardContent>
                  <Divider sx={{ mb: 2 }} />

                  <Stack spacing={1}>
                    <Typography><strong>Property Type:</strong> Single Family Home</Typography>
                    <Typography><strong>Location:</strong> Philadelphia, PA</Typography>
                    <Typography><strong>Budget Range:</strong> $150,000 - $121,000</Typography>
                    <Typography><strong>Beds:</strong> 3</Typography>
                    <Typography><strong>Baths:</strong> 2</Typography>
                    <Typography><strong>Sqft:</strong> 2100 sqft</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </div> 
            :
            <div>
              <h1 className='text-2xl'>Sellers Requirements</h1>

              <Card sx={{ minWidth: 300, borderRadius: 2, boxShadow: 3, p: 2 }}>
                <CardContent>
                  <Divider sx={{ mb: 2 }} />

                  <Stack spacing={1}>
                    <Typography><strong>Address:</strong> 123 Main St, Austin, Texas, 19212</Typography>
                    <Typography><strong>Property Type:</strong> Apartment</Typography>
                    <Typography><strong>Location:</strong> Austin, TX</Typography>
                    <Typography><strong>Asking Price:</strong> $250,000</Typography>
                    <Typography><strong>Beds:</strong> 4</Typography>
                    <Typography><strong>Baths:</strong> 2</Typography>
                    <Typography><strong>Sqft:</strong> 2800 sqft</Typography>
                    <Typography><strong>Mortage:</strong> Paid Off</Typography>

                  </Stack>
                </CardContent>
              </Card>
            </div>)}


            
          </div>


        </div>
      </Box>
    </Modal>
  );
};

export default LeadDetails