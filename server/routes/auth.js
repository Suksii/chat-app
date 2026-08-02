import express from "express";
import { login, register, logout } from "../controllers/auth.js";
import { authenticateUser, getCurrentUser } from "../middleware/userProfile.js";
import { loginLimiter, registerLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/register", registerLimiter, register);

router.post("/login", loginLimiter, login);

router.post("/logout", logout);

router.get("/profile", authenticateUser, getCurrentUser);

export default router;
