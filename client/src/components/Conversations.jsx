import React, {useEffect, useState} from 'react';
import Conversation from "./Conversation.jsx";
import axios from "axios";
import user from "../../../server/models/user.js";

const Conversations = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get("/users");
            setUsers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
                {users.map((user, index) => {
                    return (
                        <div key={index}>
                            <Conversation fullName={user.fullName}/>
                            <div className="divider -my-1"></div>
                        </div>
                    )
                })}
        </div>
    );
};

export default Conversations;