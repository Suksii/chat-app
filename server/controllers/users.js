import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const users = await User.find({_id: {$ne: loggedInUser._id}}).select("-password");
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}