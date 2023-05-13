import express from "express";
import { createNewUser, getUsers } from "./userController";

const router = express();

router.get("/", getUsers);
router.post("/create-user", createNewUser);


export default router;