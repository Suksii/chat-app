import express from 'express'
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import userRoutes from "./routes/users.js";
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app, server} from "./socket/socket.js";
import path from "path";

// const app = express();

dotenv.config()

const PORT = process.env.PORT

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
    }
}
connectDB()

// app.get("/",(req, res) => {
//     res.json("Hello World")
// })

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.use(cookieParser())
app.use('/uploads', express.static(path.join(import.meta.dirname, '../uploads')));
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));