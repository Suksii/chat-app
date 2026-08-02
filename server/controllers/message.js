import mongoose from "mongoose";
import Message from "../models/message.js";
import Conversation from "../models/conversation.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

const MAX_MESSAGE_LENGTH = 5000;

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverID } = req.params;
    const senderID = req.user._id;
    const { message } = req.body;

    if (!isValidId(receiverID)) {
      return res.status(400).json({ message: "Invalid receiver id" });
    }
    if (typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ message: "Message cannot be empty" });
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return res
        .status(400)
        .json({
          message: `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters`,
        });
    }

    let conversation = await Conversation.findOne({
      members: {
        $all: [senderID, receiverID],
      },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderID, receiverID],
        messages: [],
      });
    }
    const newMessage = await Message.create({
      senderID,
      receiverID,
      message,
    });

    conversation.messages.push(newMessage._id);
    await conversation.save();

    const receiverSocketId = getReceiverSocketId(receiverID);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    if (!isValidId(receiverID)) {
      return res.status(400).json({ message: "Invalid receiver id" });
    }

    const conversation = await Conversation.findOne({
      members: {
        $all: [senderID, receiverID],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllConversations = async (req, res) => {
  try {
    const senderID = req.user._id;

    const conversations = await Conversation.find({
      members: senderID,
    }).populate("messages");
    res.status(200).json(conversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
