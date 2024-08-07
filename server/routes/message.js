import express from "express";
import {getMessages, sendMessage} from "../controllers/message.js";
import {authenticateUser} from "../middleware/userProfile.js";

const router = express.Router();

router.post("/send/:id", authenticateUser, sendMessage);

router.get("/get/:id", authenticateUser, getMessages);

export default router;