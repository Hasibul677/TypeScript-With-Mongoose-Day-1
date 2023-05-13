import { IUser } from "./userInterface";
import User from "./userModel";

export const createUser = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  let result = await user.save();
  return result;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const findUserFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findById({ _id: payload }, {email:1});
  return user;
};
