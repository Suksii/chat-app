import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    online: {
        type: Boolean,
        default: false,
    },
    lastSeen: {
        type: Date,
    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;