import {useEffect, useState} from "react";
import axios from "axios";

const useGetConversations = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/users");
            setUsers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    getUsers();
    }, []);

    return {loading, users}
};

export default useGetConversations;