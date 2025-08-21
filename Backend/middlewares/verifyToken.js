import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
//console.log("The token in verifyToken middleware is: ",token)

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } 
  
  catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
