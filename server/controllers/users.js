import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const users = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(users);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({message: "No image uploaded"});
        res.status(200).json({filename: req.file.filename});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"})
    }
}
