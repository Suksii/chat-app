import {useEffect, useState} from "react";
import {useConversations} from "../context/ConversationsContext.jsx";
import axios from "axios";

const UseGetMessages = () => {

    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversations();

    useEffect(() => {
    const getMessages = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/messages/get/${selectedConversation._id}`);
            setMessages(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    if(selectedConversation?._id)
    getMessages();
    }, [selectedConversation?._id])

    return {loading, messages}
};

export default UseGetMessages;