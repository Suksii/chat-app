import express from 'express'
import dotenv from 'dotenv'
import authRouter from "./routes/auth.js";
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

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
app.use("/api/auth", authRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));