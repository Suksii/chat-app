import User from "../models/user.js";
import fs from "fs";

export const getUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const users = await User.find({_id: {$ne: loggedInUser._id}}).select("-password");
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const uploadImage = async (req, res) => {
    try {
        const {path, originalname} = req.files[0];
        const extension = originalname.split(".").pop();
        const newPath = path + "." + extension;
        fs.renameSync(path, newPath);
        res.status(200).send(newPath.split("\\").slice(1));
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}