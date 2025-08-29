import React from "react";
import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BuyersPreference from "./BuyersPreference";
import SellersRequirements from "./SellersRequirements";
import AddNotes from "./AddNotes";
import AppointmentsAndTasks from "./AppointmentAndTasks";
import AssignTaskModal from "./AssignTaskModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  overflowY: "auto",
};

const LeadDetails = ({ onClose, onOpen, details }) => {
  const [assignTaskOpen, setAssignTaskOpen] = React.useState(false);
  const handleAssignTaskOpen = () => setAssignTaskOpen(true);
  const handleAssignTaskClose = () => setAssignTaskOpen(false);


const { role } = useSelector((state) => state.user);


  return (
    <Modal
      open={onOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <button
          onClick={() => onClose()}
          className="absolute right-3 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#000000"
          >
            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
          </svg>
        </button>

        <div className="h-auto w-full flex gap-10">
          <div className="mt-10">
            <div className="flex relative mb-3">
              <h1 className="text-2xl">Lead Details</h1>
            </div>

            <Card
              sx={{
                width: 500,
                height: 350,
                borderRadius: 2,
                boxShadow: 3,
                p: 2,
              }}
            >
              <CardContent>
                <Divider sx={{ mb: 2 }} />

                <Stack spacing={2}>
                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                    <strong>Name:</strong> {details.leadName}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
                    </svg>
                    <strong>Phone:</strong> {details.leadPhone}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="m480-920 362 216q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l362-216Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z" />
                    </svg>
                    <strong>Email:</strong> {details.leadEmail}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                    </svg>
                    <strong>Date:</strong> {details.date}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M480-480Zm-400 0q0-88 34-163t93-130q59-55 136-83.5T508-879q17 2 27 14.5t7 29.5q-3 17-16.5 27t-30.5 9q-69-3-129.5 19.5T259-713q-46 44-72.5 103.5T160-480q0 134 93 227t227 93q69 0 128.5-26.5T712-259q46-48 68-109t19-127q-1-17 9-30.5t27-16.5q17-3 29.5 7t14.5 27q6 87-22.5 164T774-208q-57 62-133 95T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480Zm640-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
                    </svg>
                    <strong>Status:</strong> {details.status}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" />
                    </svg>
                    <strong>Agent Assigned:</strong> {details.agentAssigned}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            {details.selectedRole == "buyer" ? (
              <BuyersPreference details={details}/>
            ) : (
              <SellersRequirements details={details} />
            )}
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <h1 className="text-2xl mb-4">Actions</h1>

             <button className="flex items-center gap-2 p-2 bg-gray-200 rounded text-black hover:bg-gray-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000000"
    >
      <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Z" />
    </svg>
    <span>Schedule Appointment</span>
  </button>

  {/* Change Status Dropdown */}
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28px"
      viewBox="0 -960 960 960"
      width="28px"
      fill="#000000"
    >
      <path d="M480-480Zm-400 0q0-88 34-163t93-130q59-55 136-83.5T508-879q17 2 27 14.5t7 29.5q-3 17-16.5 27t-30.5 9q-69-3-129.5 19.5T259-713q-46 44-72.5 103.5T160-480q0 134 93 227t227 93q69 0 128.5-26.5T712-259q46-48 68-109t19-127q-1-17 9-30.5t27-16.5q17-3 29.5 7t14.5 27q6 87-22.5 164T774-208q-57 62-133 95T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480Zm640-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
    </svg>
    <select
      id="status"
      className="block w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm transition-all"
    >
      <option value="">Change Status</option>
      <option value="New">New</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>

  {/* Assigned To Dropdown */}
  {role=='admin'?<div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="28px"
      viewBox="0 -960 960 960"
      width="28px"
      fill="#000000"
    >
      <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z" />
    </svg>
    <select
      id="assignedTo"
      className="block w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white shadow-sm transition-all"
    >
      <option value="">Assign Agent</option>
      <option value="Agent 1">Agent 1</option>
      <option value="Agent 2">Agent 2</option>
      <option value="Agent 3">Agent 3</option>
      <option value="Agent 4">Agent 4</option>
      <option value="Agent 5">Agent 5</option>
    </select>
  </div> : null}

  {/* Assign Task Button */}
  {role=='admin' ?
  <button
    onClick={handleAssignTaskOpen}
    className="flex items-center gap-2 p-2 bg-gray-200 rounded text-black cursor-pointer hover:bg-gray-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#000000"
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z" />
    </svg>
    <span>Assign Task</span>
  </button>
  : null}
  
            {assignTaskOpen ? (
              <AssignTaskModal handleClose={handleAssignTaskClose} />
            ) : null}
          </div>
        </div>
        {/* I need a design for my modal. The modal I want to design is Appointment and tasks. The admin assign tasks to agents which are shown in this tasks section. And the agent itself can schedule a meeting and the meeting date and link will be shown in this with the tasks. I want a figma design for it */}

        <AppointmentsAndTasks />
        <AddNotes />
      </Box>
    </Modal>
  );
};

export default LeadDetails;
