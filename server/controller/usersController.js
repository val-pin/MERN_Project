import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).populate("posts");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};
