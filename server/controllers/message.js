import Message from "../models/message.js";
import Conversation from "../models/conversation.js";
import {getReceiverSocketId, io} from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const {id: receiverID} = req.params;
        const senderID = req.user._id;
        const {message} = req.body;

        let conversation = await Conversation.findOne({
            members: {
                $all: [senderID, receiverID]
            }
        })
        if(!conversation) {
            conversation = await Conversation.create({
                members: [senderID, receiverID],
                messages: []
            });
        }
        const newMessage = await Message.create({
            senderID,
            receiverID,
            message
        })
        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverID);
        if(receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error})
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id: receiverID} = req.params;
        const senderID = req.user._id;

        const conversation = await Conversation.findOne({
            members: {
                $all: [senderID, receiverID]
            }
        }).populate("messages");

        if(!conversation) {
            return res.status(404).json({message: "Conversation not found"})
        }

        res.status(200).json(conversation.messages);

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const getAllConversations = async (req, res) => {
    try {
        const senderID = req.user._id;

        const conversations = await Conversation.find({
            members: senderID
        }).populate("messages");
        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}