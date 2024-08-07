import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const getUserProfile = async (req, res) => {
    try {
        const {token} = req.cookies;
        if (!token) return res.status(401).json({message: "Unauthorized"});

        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
            if (err) {
                return res.status(401).json({message: "Unauthorized"})
            }
            const userProfile = await User.findById(user.id)
            res.json(userProfile)
        })
    } catch (error) {
        console.log(error)
    }
}