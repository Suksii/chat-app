import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const getUserProfile = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) return res.status(401).json({message: "Unauthorized - No token"})

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
            if (err) {
                return res.status(401).json({message: "Unauthorized - Invalid token"})
            }
            const userProfile = await User.findById(user.id).select("-password")

            if (!userProfile) return res.status(404).json({message: "User not found"})

            req.user = userProfile;

            next();
        })
    } catch (error) {
        console.log(error)
    }
}