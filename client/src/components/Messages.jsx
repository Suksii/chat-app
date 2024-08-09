import React from 'react';
import Message from "./Message.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import useGetMessages from "../hooks/useGetMessages.jsx";

const Messages = () => {

    const {messages, loading} = useGetMessages();

    console.log(messages)

    // if(loading) return <p className="text-center text-gray-500">Loading...</p>

    return (
        <div className="flex-1 overflow-y-auto py-1 px-1">
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {messages.length > 0
                ? messages.map((message, index) => <Message key={index} message={message}/>)
                : <p className="text-center text-gray-500">Select a chat to start messaging</p>}
        </div>
    );
};

export default Messages;