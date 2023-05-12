import { Schema, model } from "mongoose";
import { IUser } from "./userInterface";

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

 
  const User = model<IUser>("User", userSchema);

  export default User;