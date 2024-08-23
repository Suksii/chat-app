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
            const socket = io("http://localhost:3001", {query: {userId: currentUser._id}});
            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });
            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [currentUser]);

    console.log(socket, onlineUsers);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
}
export const useSocket = () => {
    return useContext(SocketContext);
}