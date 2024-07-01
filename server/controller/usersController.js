import UserModel from "../models/userModel.js";
import { imageUpload } from "../utils/imageManagement.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).populate("posts");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server error" });
  }
};

export const register = async (req, res, next) => {
  console.log("req.body :>> ", req.body);
  console.log("req.file :>> ", req.file);
  //custom validation goes here
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(500).json({ error: "Email already registered" });
      return;
    }
    const newUser = new UserModel(req.body);
    if (req.file) {
      const avatarURL = await imageUpload(req.file, "B.Garden_avatars");
      newUser.avatar = avatarURL;
    }
    await newUser.save();
    const userForFront = {
      email: newUser.email,
      name: newUser.name,
      _id: newUser._id,
      avatar: newUser.avatar,
    };
    res.status(200).json(userForFront);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
