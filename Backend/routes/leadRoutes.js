import express from 'express'
import {handleIncomingLead}  from '../controllers/leadsController.js';
import { handleGetAllLeads } from '../controllers/leadsController.js';

const leadRouter = express.Router();

leadRouter.post('/get-started', handleIncomingLead)
leadRouter.get('/leads', handleGetAllLeads)


export default  leadRouter;