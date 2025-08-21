import express from "express";
import handleAgentSignUp  from "../controllers/userControllers.js";
import { handleLoginForm } from "../controllers/userControllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { handleLogout } from "../controllers/userControllers.js";

const router=express.Router();

router.post('/signup', handleAgentSignUp)
router.post('/login', handleLoginForm)
router.get('/verify-token', verifyToken, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
})
router.get('/logout', handleLogout )

export default router;