import express from "express";
import { getAllUsers } from "../controller/usersController.js";

const router = express.Router();

router.get("/all", getAllUsers);

export default router;
