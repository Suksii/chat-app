import express from "express";
import {getUsers} from "../controllers/users.js";
import {authenticateUser} from "../middleware/userProfile.js";
import {uploadImage} from "../controllers/users.js";
import multer from "multer";

const router = express.Router();

const photoUpload = multer({dest: "uploads"});

router.get("/", authenticateUser, getUsers);

router.post("/upload", photoUpload.array("photo", 100), uploadImage);

export default router;