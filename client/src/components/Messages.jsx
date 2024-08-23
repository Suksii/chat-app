import React, {useEffect, useRef} from 'react';
import Message from "./Message.jsx";
import useGetMessages from "../hooks/useGetMessages.jsx";
import useListenMessages from "../hooks/useListenMessages.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
import {useAuth} from "../context/AuthContext.jsx";

const Messages = () => {

    const {messages, loading} = useGetMessages();
    useListenMessages();
    const lastMessage = useRef();
    const {currentUser} = useAuth();
    const {selectedConversation} = useConversations();

    useEffect(() => {
        setTimeout(() => {
            lastMessage.current.scrollIntoView({behavior: 'auto'});
        }, 100);
    }, [messages])

    const filteredMessages = messages.filter(message =>
        (message.senderID === currentUser?._id && message.receiverID === selectedConversation?._id) ||
        (message.receiverID === currentUser?._id && message.senderID === selectedConversation?._id)
    );

    return (
        <div className="flex-1 overflow-y-auto py-1 px-1">
            {!loading && filteredMessages.length > 0 && filteredMessages.map((message) => {
                return(
                <div key={message._id} ref={lastMessage}>
                    <Message message={message}/>
                </div>
            )})}
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {!loading && filteredMessages.length === 0 && <p className="text-center text-gray-300">Send a message to start the conversation</p>}
        </div>
    );
};

export default Messages;