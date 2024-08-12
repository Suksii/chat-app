import {createContext, useContext, useEffect, useState} from "react";
import {useAuth} from "./AuthContext.jsx";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        if(currentUser){
            const newSocket = io("http://localhost:5173", {query: {userId: currentUser._id}});
            setSocket(newSocket);
            return () => newSocket.close();
        } else {
            if(socket) socket.close();
            setSocket(null);
        }
    }, [currentUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
}
const useSocket = () => {
    return useContext(SocketContext);
}