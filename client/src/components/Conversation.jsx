import React from 'react';
import UserAvatar from "./UserAvatar.jsx";

const Conversation = () => {
    return (
        <div className="w-full flex items-center justify-between gap-4 py-2 px-1 hover:bg-gray-100 duration-300 cursor-pointer rounded-md">
            <div className="flex items-center gap-2">
                <UserAvatar />
                <div>
                    <div className="text-lg font-semibold">Lionel Messi</div>
                    <div className="text-sm text-gray-500">Message</div>
                </div>
            </div>
            <div className="text-sm text-gray-500">1 min ago</div>
        </div>
    );
};
export default Conversation;
