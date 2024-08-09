import {createContext, useContext, useState} from "react";

const SocketContext = createContext();

export const SocketProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    );
}

const useSocket = () => {
    return useContext(SocketContext);
}