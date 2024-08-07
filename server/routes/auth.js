import express from "express";
import {login, register, logout} from "../controllers/auth.js";
import {authenticateUser, getCurrentUser} from "../middleware/userProfile.js";
const router = express.Router();

router.post("/register", register)

router.post("/login", login)

router.post("/logout", logout)

router.get("/profile", authenticateUser, getCurrentUser)
export default router