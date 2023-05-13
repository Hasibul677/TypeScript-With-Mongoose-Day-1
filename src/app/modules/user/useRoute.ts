import express from "express";
import { createNewUser, getUsers, userById } from "./userController";

const router = express();

router.get("/", getUsers);
router.post("/create-user", createNewUser);
router.get("/:id", userById)


export default router;