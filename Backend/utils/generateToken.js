import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role }, 
    process.env.JWT_SECRET, 
    { expiresIn: "7d" }
  );
};

export default generateToken;