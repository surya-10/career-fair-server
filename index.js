import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { database } from "./db connection/db.connect.js";
import authRouter from "./controllers/userContollers/user.control.js";
import dataRouter from "./controllers/dataContollers/data.controller.js";
import { isAuth } from "./auth/isAuth.js";

dotenv.config()
let app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRouter);

app.use("/property", isAuth, dataRouter)
app.listen(process.env.port, ()=>{
    console.log("server created");
})

app.get("/", (req, res)=>{
    res.send("Hello !")
})