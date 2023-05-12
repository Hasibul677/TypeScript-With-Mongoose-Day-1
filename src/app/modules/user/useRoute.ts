import express from "express";
import { createNewUser } from "./userController";

const router = express();

router.get("/", createNewUser);


export default router;