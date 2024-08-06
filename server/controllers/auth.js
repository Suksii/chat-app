import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, fullName, password, confirmPassword, profilePicture } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" })
        }
        const user = await User.findOne({ username })
        const bycryptSalt = await bcrypt.genSaltSync(10)

        if (user) {
            return res.status(400).json({ message: "Username is already taken" })
        }
        const newUser = User.create({
            username,
            fullName,
            password: bcrypt.hashSync(password, bycryptSalt),
            profilePicture
        })
            return res.status(201).send(newUser)
    } catch (error) {
        console.error(error)
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isPasswordCorrect = bcrypt.compareSync(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" })
        }
        jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                console.error(err)
            }
            res.cookie('token', token).json(user)
        })
    } catch (error) {
        console.error(error)
    }
}

export const logout = (req, res) => {
    res.clearCookie('token').json({ message: "Logged out" })
}