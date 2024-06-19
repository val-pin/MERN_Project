//Model-View-Controller (MVC) architectural pattern

import PostModel from "../models/postModel.js";

//express middleware
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

const getPostById = async (req, res) => {
  console.log("req.params :>> ", req.params);
  // get the id of the post from the url parameters, and do a request to mongoDB using that id
  // Send response to client with the object of that single post
  const singlePost = await PostModel.findById(req.params.postid).exec();
  console.log("singlePost :>> ", singlePost);
  //this is what we respond to the  Client (what arrives inside the response of the Fetch)
  res.status(200).json({
    requestedPost: {
      picture: singlePost.picture,
      likes: singlePost.likes,
      name: singlePost.name,
      comment: singlePost.comment,
      date: singlePost.date,
      id: singlePost._id,
    },
    message: "this is the post you were asking for",
    dateOfResponse: new Date(),
  });
};
export { allPosts, getPostById };
