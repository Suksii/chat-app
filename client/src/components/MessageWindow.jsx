import React, {useEffect} from 'react';
import UserAvatar from "./UserAvatar.jsx";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import NoChatSelected from "./NoChatSelected.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
const MessageWindow = () => {

    const {selectedConversation, setSelectedConversation} = useConversations();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [])

    return (
        <>
            {selectedConversation !== null ? (
            <div style={{flex: 2}} className={"flex flex-col"}>
                <div className="w-full flex gap-2 items-center bg-gray-100 bg-opacity-50 p-1">
                    <UserAvatar user={selectedConversation}/>
                    <p className="text-lg font-semibold">{selectedConversation?.fullName}</p>
                </div>
                    <Messages/>
                <MessageInput/>
            </div>) : <NoChatSelected/> }
        </>
    );
};

export default MessageWindow;