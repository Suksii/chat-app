import React, {useEffect} from 'react';
import Search from "./Search.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import axios from "axios";

const Sidebar = () => {

    const getUsers = async () => {
        try {
            const response = await axios.get("/users");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{flex: 1}}>
            <div className="flex items-center gap-4 p-4">
            <Search/>
            <LogoutButton/>
            </div>
            <div className="divider my-0"></div>
            <Conversations/>
        </div>
    );
};

export default Sidebar;