import express from "express";
import {getMessages, sendMessage} from "../controllers/message.js";
import {getUserProfile} from "../middleware/userProfile.js";

const router = express.Router();

router.post("/send/:id", getUserProfile, sendMessage);

router.get("/get/:id", getUserProfile, getMessages);

export default router;