import express from "express";
import handleAgentSignUp  from "../controllers/userControllers.js";

const router=express.Router();

router.post('/signup', handleAgentSignUp)

export default router;