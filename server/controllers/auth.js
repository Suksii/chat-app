import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

const cookieOptions = () => ({
  httpOnly: true,
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: TOKEN_MAX_AGE_MS,
});

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

const publicUser = (user) => ({
  _id: user._id,
  username: user.username,
  fullName: user.fullName,
  profilePicture: user.profilePicture,
  online: user.online,
  lastSeen: user.lastSeen,
  createdAt: user.createdAt,
});

export const register = async (req, res) => {
  try {
    const { username, fullName, password, confirmPassword, profilePicture } =
      req.body;

    if (
      !isNonEmptyString(username) ||
      !isNonEmptyString(fullName) ||
      !isNonEmptyString(password)
    ) {
      return res
        .status(400)
        .json({ message: "Username, full name and password are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (profilePicture !== undefined && typeof profilePicture !== "string") {
      return res.status(400).json({ message: "Invalid profile picture" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const salt = await bcrypt.genSalt(12);
    const newUser = await User.create({
      username,
      fullName,
      password: await bcrypt.hash(password, salt),
      profilePicture: profilePicture || "",
    });

    return res.status(201).json(publicUser(newUser));
  } catch (error) {
    console.error(error);
    if (error?.code === 11000) {
      return res.status(400).json({ message: "Username is already taken" });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isNonEmptyString(username) || !isNonEmptyString(password)) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });
    const isPasswordCorrect = user
      ? await bcrypt.compare(password, user.password)
      : false;

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .cookie("token", token, cookieOptions())
      .status(200)
      .json(publicUser(user));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    const { maxAge, ...clearOptions } = cookieOptions();
    return res
      .clearCookie("token", clearOptions)
      .json({ message: "Logged out" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
