import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

app.post("/createuser", (req: Request, res: Response) => {
  // 1. create an interface
  interface IUser {
    name: string;
    role: "sudent";
    email: string;
    password: string;
    dob?: string;
  }

  // 2. create Schema
  const userSchema = new Schema<IUser>({
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
  });

  // 3. Create a Model.
  const User = model<IUser>("User", userSchema);
});

export default app;
