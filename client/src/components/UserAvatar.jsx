import React from 'react';
import {useSocket} from "../context/SocketContext.jsx";

const UserAvatar = ({user}) => {

    const {onlineUsers} = useSocket();
    const isOnline = onlineUsers.includes(user._id);

    console.log(onlineUsers, user._id, isOnline);

    return (
        <div className={`avatar  ${isOnline ? 'online' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gray-300">
                {/*<img src="" alt="" className="w-full h-full object-cover rounded-full"/>*/}
            </div>
        </div>
    );
};

export default UserAvatar;