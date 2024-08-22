import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllMessages = () => {
    const [conversations, setconversations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMessages = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/messages/get");
                setconversations(response.data);
            } catch (error) {
                console.error("Error fetching messages: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    return { conversations, loading };
}

export default useGetAllMessages;