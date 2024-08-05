import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { username, fullName, password, confirmPassword } = req.body;

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
            // profilePicture
        })
            return res.status(201).send(newUser)
    } catch (error) {
        console.error(error)
    }
}

export const login = (req, res) => {
    res.send("login")
}

export const logout = (req, res) => {
    res.send("logout")
}