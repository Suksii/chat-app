import {useEffect} from 'react';
import {useSocket} from "../context/SocketContext.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
import notificationSound from "../assets/notification/notification.mp3";

const UseListenMessages = () => {

    const {socket} = useSocket();
    const {messages, setMessages} = useConversations();

    useEffect(() => {
        socket?.on('newMessage', (message) => {
            const notification = new Audio(notificationSound);
            notification.play();
            setMessages(messages => [...messages, message]);
        });
        return () => {
            socket?.off('newMessage');
        }
    }, [socket, messages, setMessages]);
};

export default UseListenMessages;