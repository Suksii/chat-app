import React, {useState} from 'react';

const Message = () => {

    const [isSendersMessage, setIsSendersMessage] = useState(false)

    return (
        <div className={`chat ${isSendersMessage ? 'chat-start' : 'chat-end'}`}>
            <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full bg-gray-100">
                    {/*<img src="" alt="" className="w-full h-full object-cover rounded-full"/>*/}
                </div>
            </div>
            <div className={`chat-bubble bg-opacity-50 p-2 rounded-md ${isSendersMessage ? 'bg-gray-100' : 'bg-neutral'}`}>Hello there!</div>
            <div className="chat-footer text-sm text-gray-500">12:12</div>
            
        </div>
    );
};

export default Message;