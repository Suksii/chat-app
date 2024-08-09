import React, {useEffect, useRef} from 'react';
import Message from "./Message.jsx";
import useGetMessages from "../hooks/useGetMessages.jsx";

const Messages = () => {

    const {messages, loading} = useGetMessages();
    const lastMessage = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessage.current.scrollIntoView({behavior: 'auto'});
        }, 100);
    }, [messages])

    return (
        <div className="flex-1 overflow-y-auto py-1 px-1">
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessage}>
                    <Message message={message}/>
                </div>
            ))}
            {!loading && messages.length === 0 && <p className="text-center text-gray-500">Select a chat to start messaging</p>}
            {loading && <p className="text-center text-gray-500">Loading...</p>}
        </div>
    );
};

export default Messages;