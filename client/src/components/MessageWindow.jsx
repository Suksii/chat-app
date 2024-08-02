import React from 'react';
import UserAvatar from "./UserAvatar.jsx";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageWindow = () => {
    return (
        <div style={{flex: 2}} className={"flex flex-col"}>
            <div className="w-full flex gap-2 items-center bg-gray-100 bg-opacity-50 p-1">
                <UserAvatar />
                <p className="text-lg font-semibold">Full Name</p>
            </div>
                <Messages/>
            <MessageInput/>
        </div>
    );
};

export default MessageWindow;