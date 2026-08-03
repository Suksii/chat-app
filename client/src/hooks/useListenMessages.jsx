import { useEffect } from "react";
import { useSocket } from "../context/SocketContext.jsx";
import { useConversations } from "../context/ConversationsContext.jsx";
import notificationSound from "../assets/notification/notification.mp3";

const UseListenMessages = () => {
  const { socket } = useSocket();
  const { setMessages } = useConversations();

  useEffect(() => {
    const handleNewMessage = (message) => {
      new Audio(notificationSound).play().catch(() => {});
      setMessages((messages) => [...messages, message]);
    };
    socket?.on("newMessage", handleNewMessage);
    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages]);
};

export default UseListenMessages;
