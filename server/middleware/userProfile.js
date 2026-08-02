import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyToken = (token) => {
  if (!token) throw new Error("No token");
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const authenticateUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    let decoded;
    try {
      decoded = verifyToken(token);
    } catch {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userProfile = await User.findById(decoded.id).select("-password");
    if (!userProfile) return res.status(401).json({ message: "Unauthorized" });

    req.user = userProfile;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
