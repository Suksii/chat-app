import React, {useEffect} from 'react';
import UserAvatar from "./UserAvatar.jsx";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import NoChatSelected from "./NoChatSelected.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
import {useSocket} from "../context/SocketContext.jsx";
import useGetConversations from "../hooks/useGetConversations.jsx";
const MessageWindow = () => {

    const {selectedConversation, setSelectedConversation} = useConversations();

    const lastSeen = selectedConversation?.lastSeen?.slice(11, 16);

    const isOnline = selectedConversation?.online ? "Online" : `last seen ${lastSeen}`;

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [])

    return (
        <>
            {selectedConversation !== null ? (
            <div style={{flex: 2}} className={"flex flex-col"}>
                <div className="w-full flex gap-2 items-center bg-gray-100 bg-opacity-50 p-1">
                    <UserAvatar user={selectedConversation}/>
                    <div className="flex items-end gap-2">
                        <p className="text-lg text-black font-semibold">{selectedConversation?.fullName}</p>
                        <p className="text-sm text-gray-700">{lastSeen ? isOnline : ''}</p>
                    </div>
                </div>
                    <Messages/>
                <MessageInput/>
            </div>) : <NoChatSelected/> }
        </>
    );
};

export default MessageWindow;