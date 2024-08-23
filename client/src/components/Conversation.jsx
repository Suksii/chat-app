import React from 'react';
import UserAvatar from "./UserAvatar.jsx";
import {useConversations} from "../context/ConversationsContext.jsx";
import useGetAllMessages from "../hooks/useGetAllMessages.jsx";

const Conversation = ({user}) => {

    const {selectedConversation, setSelectedConversation} = useConversations();

    const {conversations} = useGetAllMessages();

    const findUser = conversations.find((conversation) => conversation.members.includes(user._id));

    const lastMessage = findUser?.messages[findUser.messages.length - 1]?.message;
    const lastMessageTime = findUser?.messages[findUser.messages.length - 1  ]?.createdAt.slice(11, 16);

    const isSelected = selectedConversation?._id === user._id;

    return (
        <div className={`w-full flex items-center justify-between gap-4 py-2 px-1 hover:bg-gray-100 ${isSelected ? 'bg-gray-100' : ''} duration-300 cursor-pointer rounded-md`} onClick={() => setSelectedConversation(user)}>
            <div className="flex items-center gap-2">
                <UserAvatar user={user}/>
                <div>
                    <div className="text-lg font-semibold text-black">{user.fullName}</div>
                    <p className="text-sm text-gray-400">{lastMessage}</p>
                </div>
            </div>
            <p className="text-sm text-gray-400">{lastMessageTime}</p>
        </div>
    );
};
export default Conversation;
