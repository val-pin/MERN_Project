import PostModel from "../models/postModel";
import mongoose from "mongoose";

//read about Model-View-Controller (MVC)! Separation of concerns

const allPosts = async (req, res) => {
  try {
    const allPosts = await PostModel.find({});
    console.log("allPosts :>> ", allPosts);

    res.status(200).json({
      message: "These are all posts in the back-end",
      number: allPosts.length,
      allPosts,
    });
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({
      message: "something went wrong",
    });
  }
};

export { allPosts };
