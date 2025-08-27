import express from 'express'
import {handleIncomingLead}  from '../controllers/leadsController.js';

const leadRouter = express.Router();

leadRouter.post('/get-started', handleIncomingLead)


export default  leadRouter;