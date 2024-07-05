import UserModel from "../models/userModel.js";
import { imageUpload } from "../utils/imageManagement.js";
import { hashPassword } from "../utils/passwordServices.js";

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
  // custom validation goes here
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(500).json({ error: "Email already registered" });
      return;
    }

    if (!existingUser) {
      //if email for registration is not in the database, we first upload the userProfile pic

      try {
        const uploadedImage = await imageUpload(req.file, "B.Garden_avatars");
        console.log("uploadedImage::::", uploadedImage);

        const hashedPassword = await hashPassword(req.body.password);
        const newUser = new UserModel({
          email: req.body.email,
          name: req.body.name,
          password: hashedPassword,
          profilePic: uploadedImage,
        });

        const savedUser = await newUser.save();

        res.status(200).json({
          message: "user registered succesfully",
          user: {
            name: savedUser.name,
            email: savedUser.email,
            profilePic: savedUser.profilePic,
          },
        });
      } catch (error) {
        console.log("error", error);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
