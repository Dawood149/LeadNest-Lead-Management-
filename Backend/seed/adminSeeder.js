import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "../models/userModel.js";
import connectDB from "../config/db.js";
import bcrypt from "bcrypt";

async function seedAdmin() {
  try {
    connectDB();
    const adminExists = await userModel.findOne({ role: "admin" });
    if (adminExists) {
      console.log("✅ Admin already exists");

    }
      const hashedPassword = await bcrypt.hash("Admin@123", 10);

      await userModel.create({
        fullName: "Admin",
        workEmail: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      });

      console.log("Admin seeding done!!!");
  } 
  
  catch (error) {
    console.log("Error while seeding Admin", error)
  }
};
seedAdmin();
