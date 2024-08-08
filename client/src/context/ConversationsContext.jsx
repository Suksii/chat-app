import {createContext, useContext, useState, useEffect} from 'react';

const ConversationsContext = createContext();

export const ConversationsProvider = ({children}) => {

    const [selectedConversation, setSelectedConversation] = useState(null);


        return (
            <ConversationsContext.Provider value={{selectedConversation, setSelectedConversation}}>
                {children}
            </ConversationsContext.Provider>
        );

}

export const useConversations = () => {
    return useContext(ConversationsContext);
}