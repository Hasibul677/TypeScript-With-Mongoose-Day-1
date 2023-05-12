import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

// Application routes
import userRoute from "./app/modules/user/useRoute"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use("/api/v1/user", userRoute)


export default app;
