import {createContext, useContext, useEffect, useState, useMemo} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get("/auth/profile");
                setCurrentUser(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getProfile();
    }, []);


    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}