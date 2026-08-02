import { Server } from "socket.io";
import http from "http";
import express from "express";
import { parseCookie } from "cookie";
import User from "../models/user.js";
import { verifyToken } from "../middleware/userProfile.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.use((socket, next) => {
  try {
    const { token } = parseCookie(socket.handshake.headers.cookie || "");
    const decoded = verifyToken(token);
    socket.userId = decoded.id;
    next();
  } catch {
    next(new Error("Unauthorized"));
  }
});

io.on("connection", async (socket) => {
  const userId = socket.userId;

  userSocketMap[userId] = socket.id;
  try {
    await User.findByIdAndUpdate(userId, { online: true });
  } catch (error) {
    console.error(error);
  }
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", async () => {
    if (userSocketMap[userId] === socket.id) {
      delete userSocketMap[userId];
    }
    try {
      await User.findByIdAndUpdate(userId, {
        online: false,
        lastSeen: new Date(),
      });
    } catch (error) {
      console.error(error);
    }
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
