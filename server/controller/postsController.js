import PostModel from "../models/postModel.js";
import mongoose from "mongoose";

//read about Model-View-Controller (MVC)! Separation of concerns

const allPosts = async (req, res) => {
  try {
    const allPosts = await PostModel.find({});
    console.log("allPosts :>> ", allPosts);
    const date = allPosts[0].date;
    console.log("date :>> ", date);
    // const formattedDate = new Date(date.clusterTime.getHighBits() * 1000);
    // console.log("formattedDate :>> ", formattedDate);
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

const getPostById = () => {
  // get the id of the post from the url parameters, and do a request to mongoDB using that id
  // Send response to client with the object of that single post
};
export { allPosts, getPostById };
