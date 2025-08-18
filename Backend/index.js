import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import {jsonMiddleware, urlencodedMiddleware, corsMiddleware} from "./middlewares/builtIn.js"
import agentRouter from "./routes/agentRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT

app.listen(port, () => {    
    console.log(`Server started at port ${port}`);
});

//----------DB CONNECTION
connectDB();

//----------Middlewares

app.use(jsonMiddleware)
app.use(urlencodedMiddleware)
app.use(corsMiddleware)

//-----------EXPRESS
app.use("/", agentRouter)