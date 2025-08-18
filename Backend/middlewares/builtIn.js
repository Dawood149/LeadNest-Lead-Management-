import express, { json } from "express";
import cors from 'cors'
import dotenv  from 'dotenv';

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};  

export const jsonMiddleware = express.json();
export const urlencodedMiddleware = express.urlencoded({ extended: true });
export const corsMiddleware = cors(corsOptions);


