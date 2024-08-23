import React, {useState} from 'react';
import Loading from "../loading/Loading.jsx";
import useSendMessage from "../hooks/useSendMessage.jsx";

const MessageInput = () => {

    const [message, setMessage] = useState('');
    const {loading, sendMessage} = useSendMessage();

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if(message.trim() === '') return;
        await sendMessage(message);
        setMessage('');
    }

    return (
        <form className="relative flex items-center gap-2 p-4" onSubmit={handleSendMessage}>
            <input type="text"
                   className="input input-ghost w-full focus:bg-opacity-0 focus:outline-none focus:text-black text-black"
                   placeholder="Type a message..."
                   value={message}
                   onChange={(e) => setMessage(e.target.value)}
            />
            <button type={"submit"}
                    className="btn btn-neutral rounded-md flex items-center gap-2"
                    disabled={loading}
            >
                {loading ? <Loading/> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                      stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                </svg>}
            </button>
        </form>
    );
};

export default MessageInput;