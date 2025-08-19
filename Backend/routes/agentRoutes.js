import express from "express";
import handleAgentSignUp  from "../controllers/userControllers.js";
import { handleLoginForm } from "../controllers/userControllers.js";

const router=express.Router();

router.post('/signup', handleAgentSignUp)
router.post('/login', handleLoginForm)

export default router;