import express from "express";
import {getUsers} from "../controllers/users.js";
import {authenticateUser} from "../middleware/userProfile.js";

const router = express.Router();

router.get("/", authenticateUser, getUsers);

export default router;