import User from "./userModel";

export const createUser = async () => {
  const user = new User({
    name: "Md Hasibul Hasan",
    role: "sudent",
    email: "hhasibul@gmail.com",
    password: "12345",
  });
  let result = await user.save();
  return result;
};
