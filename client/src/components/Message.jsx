import React, {useState} from 'react';
import {useAuth} from "../context/AuthContext.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";

const Message = ({message}) => {

    const {currentUser} = useAuth();

    const isSendersMessage = message.senderID === currentUser?._id;
    const timeSent = message?.createdAt.split('T')[1].slice(0, 5)
    const {selectedConversation} = useConversations();
    console.log("currentUser:", currentUser, "message:", message)

    return (
        <div className={`chat ${isSendersMessage ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full bg-gray-100">
                    <img src={`http://localhost:3001/uploads/${isSendersMessage ? currentUser?.profilePicture : selectedConversation.profilePicture}`}
                         alt=""
                         className="w-full h-full object-cover rounded-full"/>
                </div>
            </div>
            <div className={`chat-bubble bg-opacity-50 p-2 rounded-md ${isSendersMessage ? 'bg-gray-100' : 'bg-neutral'}`}>{message?.message}</div>
            <div className="chat-footer text-[12px] text-gray-300">{timeSent}</div>
            
        </div>
    );
};

export default Message;