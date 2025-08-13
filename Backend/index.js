import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});