import React, {useEffect, useState} from 'react';
import Search from "./Search.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import {useAuth} from "../context/AuthContext.jsx";

const Sidebar = () => {

    return (
        <div style={{flex: 1}}>
            <div className="flex items-center gap-4 p-4">
            <Search/>
            <LogoutButton/>
            </div>
            <div className="divider my-0"></div>
            <Conversations />
        </div>
    );
};

export default Sidebar;