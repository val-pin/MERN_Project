import express from "express";
import PostModel from "../models/postModel.js";
import { allPosts } from "../controller/postsController.js";

const router = express.Router();

router.get("/all", allPosts);

export default router;
