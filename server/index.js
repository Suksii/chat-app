import express from 'express'
import dotenv from 'dotenv'
import authRouter from "./routes/auth.js";

const app = express();

dotenv.config()

const PORT = process.env.PORT

app.get("/",(req, res) => {
    res.json("Hello World")
})

app.use("/api/auth", authRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));