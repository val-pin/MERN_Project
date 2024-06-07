import express from "express";
import PostModel from "../models/postModel.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const allPosts = await PostModel.find({});
    console.log("allPosts :>> ", allPosts);

    res.status(200).json({
      number: allPosts.length,
      allPosts,
    });
  } catch (error) {
    console.log("error :>> ", error);
  }
});

export default router;
