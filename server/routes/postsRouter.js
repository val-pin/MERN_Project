import express from "express";
import PostModel from "../models/postModel.js";
import { allPosts, getPostById } from "../controller/postsController.js";

const router = express.Router();

router.get("/all", allPosts);
router.get("/:postid", getPostById);

export default router;
