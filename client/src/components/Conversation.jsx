import React from 'react';
import UserAvatar from "./UserAvatar.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";

const Conversation = ({user}) => {

    const {selectedConversation, setSelectedConversation} = useConversations();

    const isSelected = selectedConversation?._id === user._id;

    return (
        <div className={`w-full flex items-center justify-between gap-4 py-2 px-1 hover:bg-gray-100 ${isSelected ? 'bg-gray-100' : ''} duration-300 cursor-pointer rounded-md`} onClick={() => setSelectedConversation(user)}>
            <div className="flex items-center gap-2">
                <UserAvatar user={user}/>
                <div>
                    <div className="text-lg font-semibold">{user.fullName}</div>
                    <div className="text-sm text-gray-500">Message</div>
                </div>
            </div>
            <div className="text-sm text-gray-500">1 min ago</div>
        </div>
    );
};
export default Conversation;
