import express from "express";
import {sendMessage} from "../controllers/message.js";
import {getUserProfile} from "../middleware/userProfile.js";

const router = express.Router();

router.post("/send/:id", getUserProfile, sendMessage);

export default router;