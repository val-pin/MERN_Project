import express from "express";
import { getAllUsers, register } from "../controller/usersController.js";
import { multerUpload } from "../middleware/multer.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/register", multerUpload.single("profilePic"), register);

export default router;
