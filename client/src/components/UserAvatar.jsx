import React from 'react';
import {useSocket} from "../context/SocketContext.jsx";

const UserAvatar = ({user}) => {

    const {onlineUsers} = useSocket();
    const isOnline = onlineUsers.includes(user._id);

    return (
        <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
            <div className="w-10 h-10 rounded-full bg-gray-300">
                <img src={`http://localhost:3001/uploads/${user?.profilePicture}`} alt="" className="w-full h-full object-cover rounded-full"/>
            </div>
        </div>
    );
};

export default UserAvatar;