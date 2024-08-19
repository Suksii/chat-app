import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authenticateUser = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if (!token) return res.status(401).json({message: "Unauthorized - No token"})

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, decoded) => {
            if (err) {
                return res.status(401).json({message: "Unauthorized - Invalid token"})
            }
            const userProfile = await User.findById(decoded.id).select("-password")

            if (!userProfile) return res.status(404).json({message: "User not found"})

            req.user = userProfile;

            next();
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const user = req.user
        if(!user) return res.status(401).json({message: "Unauthorized - No user profile found"})
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}