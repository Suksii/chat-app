import express from "express";
import {getUsers} from "../controllers/users.js";
import {getUserProfile} from "../middleware/userProfile.js";

const router = express.Router();

router.get("/", getUserProfile, getUsers);

export default router;