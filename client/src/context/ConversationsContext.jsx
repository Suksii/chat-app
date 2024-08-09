import {createContext, useContext, useState} from 'react';

const ConversationsContext = createContext();

export const ConversationsProvider = ({children}) => {

    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);


        return (
            <ConversationsContext.Provider value={{selectedConversation, setSelectedConversation, messages, setMessages}}>
                {children}
            </ConversationsContext.Provider>
        );

}

export const useConversations = () => {
    return useContext(ConversationsContext);
}