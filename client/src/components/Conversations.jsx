import React from 'react';
import Conversation from "./Conversation.jsx";

const Conversations = () => {
    return (
        <div className="flex flex-col">
            <Conversation/>
            <div className="divider -my-1"></div>
            <Conversation/>
            <div className="divider -my-1"></div>

            <Conversation/>
            <div className="divider -my-1"></div>
            <Conversation/>
            <div className="divider -my-1"></div>

            <Conversation/>
        </div>
    );
};

export default Conversations;