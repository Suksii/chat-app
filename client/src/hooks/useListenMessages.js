import React, {useEffect} from 'react';
import {useSocket} from "../context/SocketContext.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
import notificationSound from "../assets/notification/notification.mp3";

const UseListenMessages = () => {

    const {socket} = useSocket();
    const {messages, setMessages} = useConversations();

    useEffect(() => {
        socket?.on('newMessage', (message) => {
            const notiication = new Audio(notificationSound);
            notiication.play();
            setMessages(messages => [...messages, message]);
        });
        return () => {
            socket?.off('newMessage');
        }
    }, [socket, messages, setMessages]);

    return {}
};

export default UseListenMessages;