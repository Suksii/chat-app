import {Server} from "socket.io";
import http from "http";
import express from "express";
import User from "../models/user.js";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', async (socket) => {
    console.log('a user connected', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId !== undefined){
        userSocketMap[userId] = socket.id;
        try {
            await User.findByIdAndUpdate(userId, {online: true}, {new: true});
        } catch (error) {
            console.error(error);
        }
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));


    socket.on('disconnect', async () => {
        if(userId !== undefined) {
            try {
                await User.findByIdAndUpdate(userId, {online: false, lastSeen: new Date()}, {new: true});
            } catch (error) {
                console.error(error);
            }
        }
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
        console.log('user disconnected ', socket.id);
    });
});

export {app, server, io};