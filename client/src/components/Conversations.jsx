import React from 'react';
import Conversation from "./Conversation.jsx";
import useGetConversations from "../hooks/useGetConversations.jsx";
import Loading from "../loading/Loading.jsx";

const Conversations = () => {

    const {loading, users} = useGetConversations();

    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
                {users.map((user, index) => {
                    return (
                        <div key={user._id}>
                            <Conversation user={user}/>
                            {index === users.length - 1 ? null : <div className="divider my-0 py-0 h-1"></div>}
                        </div>
                    )
                })}
            {loading && <Loading className="loading-spinner-sm mx-auto"/>}
        </div>
    );
};

export default Conversations;