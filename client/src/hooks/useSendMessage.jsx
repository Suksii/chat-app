import {useState} from "react";
import {useConversations} from "../context/ConversationsContext.jsx";
import axios from "axios";

const UseSendMessage = () => {

    const [loading, setLoading] = useState(false);
    const {selectedConversation, messages, setMessages} = useConversations();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const response = await axios.post(`/messages/send/${selectedConversation._id}`, {message});
            setMessages(prevMessages => [...prevMessages, response.data]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

    }

    return {loading, sendMessage}
};

export default UseSendMessage;