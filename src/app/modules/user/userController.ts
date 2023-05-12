import { NextFunction, Request, Response } from "express";
import { createUser } from "./userService";


export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    
    const user = await createUser();
    res.status(200).json({
        status:"success",
        data:user
    })
  
  }