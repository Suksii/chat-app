import React from 'react';

const MessageInput = () => {
    return (
        <div className="relative flex items-center gap-2 p-4">
            <input type="text" className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none" placeholder="Type a message..."/>
            <div className={`btn btn-neutral rounded-md px-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </div>
        </div>
    );
};

export default MessageInput;