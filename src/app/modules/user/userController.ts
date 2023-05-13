import { NextFunction, Request, Response } from "express";
import { createUser, getUsersFromDB } from "./userService";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUser(req.body);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const user = await getUsersFromDB();
    res.status(200).json({
      status: "success",
      data: user,
    });
  };
