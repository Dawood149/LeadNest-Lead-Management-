import express from "express";
import handleAgentSignUp  from "../controllers/userControllers.js";
import { handleLoginForm } from "../controllers/userControllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { handleLogout } from "../controllers/userControllers.js";

const agentRouter=express.Router();

agentRouter.post('/signup', handleAgentSignUp)
agentRouter.post('/login', handleLoginForm)
agentRouter.get('/verify-token', verifyToken, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
})
agentRouter.get('/logout', handleLogout )

export default agentRouter;