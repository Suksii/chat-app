import React, {useEffect} from 'react';
import {useSocket} from "../context/SocketContext.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";

const UseListenMessages = () => {

    const {socket} = useSocket();
    const {messages, setMessages} = useConversations();

    useEffect(() => {
        socket?.on('newMessage', (message) => {
            setMessages(messages => [...messages, message]);
        });
        return () => {
            socket?.off('newMessage');
        }
    }, [socket, messages, setMessages]);

    return {}
};

export default UseListenMessages;